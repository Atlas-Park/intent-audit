const sampleProject = {name:'모아 멤버십', kind:'sample'};
const sampleFiles = ['src/AccountView.tsx','src/MembershipView.tsx','src/CancelReview.tsx'];
const recentKey = 'intent-audit.recent-projects';
const entry = $('#project-entry');
const picker = $('#project-picker');
const analysis = $('#project-analysis');
const folderInput = $('#project-folder');
const steps = [
  ['프로젝트 파일 구조 탐색', (files) => '파일 목록 · ' + files.join(' · ')],
  ['페이지 및 UI 컴포넌트 식별', () => '샘플 화면 발견 · 내 계정, 멤버십 관리, 해지 사유 · 버튼, 라디오 그룹'],
  ['페이지 간 이동 경로 추출', () => '샘플 경로 추출 · 내 계정 → 멤버십 관리 → 해지 안내'],
  ['사용자 동선 구조 분석', () => '가입·해지 경로 비교 · 필수 입력과 확인 절차 확인'],
  ['다크패턴 데이터베이스 대조', () => '시연 검토 유형 · 취소·탈퇴 등의 방해, 잘못된 계층구조'],
  ['관련 법률 및 가이드라인 검토', () => '시연 참고 자료 · 전자상거래법, 공정거래위원회 가이드라인'],
  ['분석 결과 및 개선안 생성', () => '샘플 결과 · 화면 요소 4개, 동선 구간 2개 · 개선안 생성'],
];
let analysisTimer;
let pickerVersion = 0;
let recentlyOpened = readRecent();

function readRecent() {
  try {
    const saved = JSON.parse(localStorage.getItem(recentKey) || '[]');
    return Array.isArray(saved) ? saved.filter((project) => project && typeof project.name === 'string' &&
      ['sample','folder'].includes(project.kind)).slice(0,4) : [];
  } catch {
    return [];
  }
}

function renderRecent() {
  const list = $('#recent-projects');
  list.replaceChildren();
  if (!recentlyOpened.length) {
    const empty = document.createElement('p');
    empty.textContent = '최근에 연 프로젝트가 없어요.';
    list.append(empty);
    return;
  }
  recentlyOpened.forEach((project) => {
    const button = document.createElement('button');
    button.className = 'recent-project';
    button.innerHTML = icon('route') + '<strong></strong><small></small>' + icon('right');
    $('strong',button).textContent = project.name;
    $('small',button).textContent = project.kind === 'sample' ? '샘플' : '폴더 · 샘플 분석';
    button.addEventListener('click',() => startAnalysis(project));
    list.append(button);
  });
}

function showProjectPicker() {
  clearTimeout(analysisTimer);
  pickerVersion++;
  hidePopover();
  $('.workspace').hidden = true;
  $$('.project-chrome').forEach((el) => { el.hidden = true; });
  entry.hidden = false;
  picker.hidden = false;
  analysis.hidden = true;
  $('#project-feedback').textContent = '';
  renderRecent();
  entry.scrollTop = 0;
  $('#entry-title').focus({preventScroll:true});
}

function openProject(project) {
  recentlyOpened = [project,...recentlyOpened.filter((item) => item.name !== project.name || item.kind !== project.kind)].slice(0,4);
  try {
    localStorage.setItem(recentKey,JSON.stringify(recentlyOpened));
  } catch {
    // Keep recent projects available for the current session.
  }
  $('#project-name').textContent = project.name;
  entry.hidden = true;
  $('.workspace').hidden = false;
  $$('.project-chrome').forEach((el) => { el.hidden = false; });
  resetWorkspace();
  defaultCamera();
  canvas.focus({preventScroll:true});
}

function startAnalysis(project, fileNames = []) {
  clearTimeout(analysisTimer);
  pickerVersion++;
  picker.hidden = true;
  analysis.hidden = false;
  entry.scrollTop = 0;
  $('#analysis-project').textContent = project.name;
  const files = fileNames.length ? fileNames : sampleFiles;
  const stepList = $('#analysis-steps');
  stepList.innerHTML = steps.map(([title]) => '<li><span class="step-state"></span><span class="analysis-step-title">' + title + '</span><small></small></li>').join('');
  const rows = [...stepList.children];
  const progress = $('#analysis-progress');
  const percentLabel = $('#analysis-percent');
  const log = $('#analysis-log');
  $('#analysis-title').focus({preventScroll:true});

  function advance(index) {
    const percent = Math.round(index / steps.length * 100);
    progress.value = percent;
    percentLabel.textContent = percent + '%';
    if (index > 0) {
      const done = rows[index - 1];
      done.className = 'done';
      done.removeAttribute('aria-current');
      $('.step-state',done).innerHTML = icon('check');
      $('small',done).textContent = '완료';
    }
    if (index === steps.length) {
      log.textContent = '샘플 분석 완료 · 결과 화면을 열고 있어요.';
      analysisTimer = setTimeout(() => openProject(project),500);
      return;
    }
    const row = rows[index];
    row.className = 'active';
    row.setAttribute('aria-current','step');
    $('small',row).textContent = '진행 중';
    log.textContent = steps[index][1](files);
    analysisTimer = setTimeout(() => advance(index+1),680);
  }
  advance(0);
}

function openFolder(files) {
  const path = files[0]?.webkitRelativePath;
  if (!path?.includes('/')) {
    $('#project-feedback').textContent = '프로젝트 폴더를 선택해 주세요.';
    return;
  }
  const names = files.slice(0,3).map((file) => file.webkitRelativePath.split('/').slice(1).join('/'));
  startAnalysis({name:path.split('/')[0],kind:'folder'},names);
}

$('#sample-project').addEventListener('click',() => startAnalysis(sampleProject));
$('#cancel-analysis').addEventListener('click',showProjectPicker);
$('#pick-folder').addEventListener('click',() => folderInput.click());
folderInput.addEventListener('change',() => {
  openFolder([...folderInput.files]);
  folderInput.value = '';
});

const drop = $('#project-drop');
drop.addEventListener('dragover',(event) => {
  if (!event.dataTransfer.types.includes('Files')) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
  drop.classList.add('drag-over');
});
drop.addEventListener('dragleave',(event) => {
  if (!drop.contains(event.relatedTarget)) drop.classList.remove('drag-over');
});
drop.addEventListener('drop',(event) => {
  event.preventDefault();
  drop.classList.remove('drag-over');
  const dropped = [...event.dataTransfer.items].map((item) => item.webkitGetAsEntry?.()).find((item) => item?.isDirectory);
  if (!dropped) {
    openFolder([...event.dataTransfer.files]);
    return;
  }
  const version = ++pickerVersion;
  const open = (names) => {
    if (version === pickerVersion) startAnalysis({name:dropped.name,kind:'folder'},names);
  };
  dropped.createReader().readEntries((entries) => open(entries.slice(0,3).map((file) => file.name)),() => open([]));
});

renderRecent();
