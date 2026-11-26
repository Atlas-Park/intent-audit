const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const icons = {
  brand: '<path d="M5 8V5h3m8 0h3v3m0 8v3h-3m-8 0H5v-3m3-4 2.5 2.5L16 9"/>',
  route: '<path d="M6 7v7a3 3 0 0 0 3 3h6m-3-10h4a3 3 0 0 1 3 3v3"/><circle cx="6" cy="5" r="2"/><circle cx="17" cy="17" r="2"/>',
  agent: '<path d="m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6L12 2Z"/>',
  reset: '<path d="M3 11a9 9 0 1 1 2 7M3 5v6h6"/>',
  panel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
  left: '<path d="m15 6-6 6 6 6"/>',
  right: '<path d="m9 6 6 6-6 6"/>',
  eye: '<path d="M2 12s3.7-6 10-6 10 6 10 6-3.7 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  fit: '<path d="M4 9V4h5m6 0h5v5m0 6v5h-5m-6 0H4v-5"/><rect x="9" y="9" width="6" height="6" rx="1"/>',
  hand: '<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5-7a1.5 1.5 0 0 1 3 0v7-5a1.5 1.5 0 0 1 3 0v6-3a1.5 1.5 0 0 1 3 0v5a7 7 0 0 1-7 7h-1a5 5 0 0 1-4-2L4 14a1.5 1.5 0 0 1 2-2l2 2"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>',
  phone: '<rect x="6.5" y="2.5" width="11" height="19" rx="2"/><path d="M11 18h2"/>',
  wifi: '<path d="M3 9a14 14 0 0 1 18 0M6 13a9 9 0 0 1 12 0m-9 4a4 4 0 0 1 6 0m-3 3h.01"/>',
  battery: '<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 10v4M6 12h8"/>',
  person: '<circle cx="12" cy="8" r="3"/><path d="M5 20a7 7 0 1 1 14 0"/>',
  box: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm-8 4.5 8 4.5 8-4.5M12 12v9"/>',
  heart: '<path d="M20.7 5.7a5 5 0 0 0-7.1 0L12 7.3l-1.6-1.6a5 5 0 0 0-7.1 7.1L12 21l8.7-8.2a5 5 0 0 0 0-7.1Z"/>',
  receipt: '<path d="M6 4h12v16l-3-2-3 2-3-2-3 2V4Zm3 4h6m-6 4h6"/>',
  gift: '<rect x="4" y="10" width="16" height="10" rx="1"/><path d="M3 7h18v3H3zm9 0v13m0-13H8a2 2 0 1 1 2-2l2 2Zm0 0h4a2 2 0 1 0-2-2l-2 2Z"/>',
  card: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18m-14 5h4"/>',
  support: '<path d="M4 13v-1a8 8 0 1 1 16 0v1M4 12h3v6H6a2 2 0 0 1-2-2v-4Zm16 0h-3v6h1a2 2 0 0 0 2-2v-4Zm-2 6c0 2-2 3-5 3"/>',
  truck: '<path d="M3 6h12v10H3zM15 9h4l2 4v3h-6"/><circle cx="7" cy="17" r="2" fill="white"/><circle cx="18" cy="17" r="2" fill="white"/>',
  circle: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8m-4-4v8"/>',
  calendar: '<rect x="4" y="6" width="16" height="15" rx="2"/><path d="M8 3v5m8-5v5M4 11h16m-11 5h2m3 0h2"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  book: '<path d="M12 6c-3-3-6-3-9-2v15c3-1 6-1 9 2 3-3 6-3 9-2V4c-3-1-6-1-9 2Zm0 0v15"/>',
  link: '<path d="M14 4h6v6m0-6-9 9m-4-6H5v12h12v-4"/>',
  chart: '<path d="M4 4v16h16M8 15l4-4 3 2 5-6"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-2-15-4 18"/>',
  send: '<path d="m4 4 17 8-17 8 3-8-3-8Zm3 8h14"/>',
  search: '<circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 5 5"/>',
};
const icon = (name) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[name] + '</svg>';
$$('[data-icon]').forEach((el) => el.insertAdjacentHTML('afterbegin', icon(el.dataset.icon)));
const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const law = 'https://www.law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1027063777';
const guide = 'https://admin2.korea.kr/briefing/pressReleaseView.do?newsId=156784349';

const pages = [
  {title:'내 계정', bar:'마이 모아', detail:'계정의 멤버십 메뉴에서 관리 화면으로 들어갑니다.', edge:'계정에서 멤버십 메뉴를 선택하면 결제 정보와 혜택을 확인할 수 있습니다.'},
  {title:'멤버십 관리', bar:'모아 멤버십', detail:'이용 상태와 결제 예정일을 확인하고 해지를 시작하는 화면입니다.', issue:1, edge:'관리 화면 하단의 해지 링크를 찾아야 해지 흐름을 시작할 수 있습니다.'},
  {title:'혜택 안내', bar:'해지 안내', detail:'해지 후 달라지는 혜택과 이용 기한을 안내합니다.', issue:2, edge:'유지와 해지 중 하나를 고릅니다. 안내 문구가 선택을 압박하는지 맥락을 확인합니다.'},
  {title:'해지 사유', bar:'해지 사유', detail:'서비스 개선을 위해 사용자가 해지 이유를 선택할 수 있습니다.', issue:3, edge:'현재 시연에서는 사유를 선택해야만 다음 단계로 이동할 수 있습니다.'},
  {title:'최종 확인', bar:'해지 확인', detail:'종료일과 이후 청구 여부를 확인한 뒤 해지를 확정합니다.', issue:4, edge:'유지와 해지 확정 버튼의 시각적 비중이 달라 마지막 선택을 다시 확인해야 합니다.'},
  {title:'해지 완료', bar:'처리 완료', detail:'해지 신청이 완료되면 이용 종료일과 다음 결제 상태를 알려줍니다.'},
];
const issues = {
  1: {
    title:'찾기 어려운 해지 링크', short:'해지 링크의 낮은 가시성', kind:'취소·탈퇴 등의 방해', level:'risk', article:'제21조의2 제1항 제4호 가목',
    cause:'해지 진입점이 혜택 목록 뒤에 작은 글씨로 표시됩니다. 계정 관리의 핵심 행동을 발견하기 어렵습니다.',
    evidence:'가입보다 해지 절차를 복잡하게 설계했는지, 그러한 차이에 정당한 이유가 있는지 살펴봅니다.',
    impact:'사용자가 해지 메뉴를 찾는 데 시간을 쓰거나 다음 결제 전에 해지하지 못할 수 있습니다.',
    fix:'관리 화면 상단에 해지 진입점 표시', reason:'결제 예정일 아래에서 해지 경로를 바로 발견할 수 있게 하고 혜택 목록은 유지합니다.',
    metric:'해지 진입 버튼 클릭률(CTR), 메뉴 탐색 시간, 해지 관련 문의율을 함께 비교합니다.',
    business:'문의 부담이 줄고 멤버십 관리에 대한 신뢰가 높아질 가능성이 있습니다.',
    file:'MembershipView.tsx',
    before:'<BenefitsList />\n<QuietLink onClick={openCancellation}>멤버십 해지</QuietLink>',
    after:'<Button aria-label="멤버십 해지" onClick={openCancellation}>\n  멤버십 해지\n</Button>\n<BenefitsList />',
  },
  2: {
    title:'해지에 불이익을 강조하는 문구', short:'혜택 상실 강조 문구', kind:'감정적 압박 · 맥락 확인', level:'suspect', article:'제21조의2 제1항 제3호 참고',
    cause:'해지 버튼이 ‘혜택을 포기하고 계속’으로 표현됩니다. 안내의 필요성과 버튼 주변 표현을 함께 검토할 요소입니다.',
    evidence:'문구의 사실성, 버튼 간 시각적 위계, 합리적인 선택을 방해하는 효과가 있는지 함께 확인합니다.',
    impact:'이용 기한을 이해하기보다 혜택을 잃는다는 표현에 주의를 빼앗길 수 있습니다.',
    fix:'중립적인 결과와 행동 문구 사용', reason:'혜택 이용 기한을 명시하고 다음 행동을 ‘해지 계속하기’로 표현합니다.',
    metric:'안내 화면의 다음 단계 클릭률(CTR), 되돌아간 비율, 이용 기한 이해도를 비교합니다.',
    business:'날짜와 결과를 쉽게 이해하면 안내 과정에서의 혼란과 이탈이 줄어들 수 있습니다.',
    file:'BenefitsExitView.tsx',
    before:'<h3>지금 해지하면 혜택을 놓쳐요</h3>\n<Button>혜택을 포기하고 계속</Button>',
    after:'<h3>해지 후 이용 기한</h3>\n<Button>해지 계속하기</Button>',
  },
  3: {
    title:'해지 사유 응답 강제', short:'필수 해지 설문', kind:'취소·탈퇴 등의 방해', level:'risk', article:'제21조의2 제1항 제4호 가목',
    cause:'해지 사유를 선택하지 않으면 다음 화면으로 이동할 수 없도록 설계된 가상 사례입니다.',
    evidence:'해지 목적에 필요하지 않은 입력을 강제하면 가입에 비해 해지 절차가 복잡해질 수 있습니다.',
    impact:'정보 제공을 원하지 않는 이용자가 해지 절차를 중단할 수 있습니다.',
    fix:'설문을 선택 입력으로 전환', reason:'이유를 공유할 수 있게 두고, 넘기기를 제공해 해지를 계속 진행할 수 있게 합니다.',
    metric:'해지 완료율(CVR), 설문 화면 이탈률, 자발적 응답률을 함께 비교합니다.',
    business:'자발적 피드백을 유지하면서 해지 지연과 관련된 문의를 줄일 가능성이 있습니다.',
    file:'ExitSurvey.tsx',
    before:'<Reasons required />\n<Button onClick={requireReasonThenNext}>다음</Button>',
    after:'<Reasons required={false} />\n<Button onClick={goToReview}>다음</Button>\n<Button onClick={goToReview}>건너뛰기</Button>',
  },
  4: {
    title:'유지에 치우친 최종 선택지', short:'최종 버튼의 비대칭', kind:'잘못된 계층구조 · 맥락 확인', level:'suspect', article:'제21조의2 제1항 제3호',
    cause:'유지는 진한 색의 채움 버튼이고 해지는 약한 외곽선 버튼입니다. 위계 차이가 의사결정에 미치는 영향은 확인이 필요합니다.',
    evidence:'선택지의 시각적 차이로 해지할 수 없거나 유지를 꼭 선택해야 한다고 오인할 우려가 있는지 살펴봅니다.',
    impact:'해지를 원하는 사용자가 유지 버튼을 더 쉽게 발견하거나 잘못 누를 수 있습니다.',
    fix:'유지와 해지에 같은 시각적 비중 부여', reason:'같은 높이와 스타일로 두 선택지를 제시하고 버튼의 행동을 구체적으로 표현합니다.',
    metric:'해지 완료율(CVR), 뒤로 가기 빈도, 잘못된 클릭, 선택에 대한 신뢰도 설문을 비교합니다.',
    business:'실수로 유지되는 경우와 그에 따른 고객 문의가 줄어들 가능성이 있습니다.',
    file:'CancelReview.tsx',
    before:'<Button variant="solid">멤버십 유지하기</Button>\n<Button variant="outline">해지 확정하기</Button>',
    after:'<Button variant="outline">멤버십 유지하기</Button>\n<Button variant="outline">해지 확정하기</Button>',
  },
};

const state = {
  page:1, issue:1, edge:null, tab:'review', marks:true, agentOpen:!matchMedia('(max-width: 640px)').matches,
  sidebarOpen:false, applied:new Set(), reason:'', surveyError:false, messages:[],
  camera:{x:0,y:0,scale:1}, autoCamera:true, quick:null, quickTab:'compare', popover:null,
};
const position = {width:224, gap:47, height:465};
const frameX = (index) => index * (position.width + position.gap);
const worldWidth = frameX(pages.length - 1) + position.width;
const pageNumber = (index) => String(index + 1).padStart(2,'0');
const countNumber = (n) => String(n).padStart(2,'0');
const chosenIssue = () => state.issue ? issues[state.issue] : null;
const issuePage = (id) => pages.findIndex((page) => page.issue === id);
const isApplied = (id) => state.applied.has(Number(id));
const beforeFix = (id) => !isApplied(id);
const context = () => state.edge !== null
  ? pages[state.edge].title + ' → ' + pages[state.edge + 1].title
  : pageNumber(state.page) + ' ' + pages[state.page].title + (chosenIssue() ? ' · ' + chosenIssue().short : '');

function button(label, action, attr = '') {
  return '<button class="screen-action ' + (action.variant || '') + (action.next ? ' route-target' : '') + '" ' + (action.attr || '') + ' ' + attr + '>' + label + '</button>';
}
const row = (symbol, label) => '<div class="screen-row">' + icon(symbol) + '<span>' + label + '</span>' + icon('right') + '</div>';
const symbol = (name) => '<div class="hero-symbol">' + icon(name) + '</div>';
const terms = () => '<div class="terms"><div><span>혜택 이용 종료일</span><b>12월 3일</b></div><div><span>종료 후 자동 결제</span><b>없음</b></div></div>';
const marker = (id) => '<span class="marker ' + issues[id].level + '" aria-hidden="true">' + id + '</span>';

function phone(index, fixed, mode = 'canvas') {
  const page = pages[index];
  const comparison = mode !== 'canvas';
  const flag = page.issue && !fixed && (comparison ? mode === 'before' : state.marks);
  const markClass = flag ? ' flag ' + issues[page.issue].level + (!comparison && state.issue === page.issue ? ' active' : '') : '';
  const markAttr = flag && !comparison ? 'data-flag="' + page.issue + '"' : '';
  const marked = flag ? marker(page.issue) : '';
  const next = comparison ? '' : 'data-next="' + index + '"';
  const keep = comparison ? '' : 'data-goto="1"';
  const showPreview = (label, v, move = next, attrs = '') => button(label, {variant:v, next:move === next && !comparison, attr:move}, attrs);
  const wrapActions = (content) => '<div class="screen-actions">' + content + '</div>';
  let contents;
  if (index === 0) {
    contents = '<div class="account-person"><div class="account-avatar">' + icon('person') + '</div><div><h3>김모아 님</h3><p class="small">내 계정 정보</p></div></div>' +
      '<div class="balance"><span>모아 포인트</span><b>2,400 P</b></div>' +
      '<div class="shortcut-row"><span>' + icon('box') + '주문 내역</span><span>' + icon('heart') + '관심 상품</span><span>' + icon('receipt') + '최근 본 상품</span></div>' +
      '<div class="screen-section">쇼핑 및 구독</div><div class="screen-list">' +
      row('gift','쿠폰과 혜택') +
      '<button class="screen-row feature route-target" ' + next + '>' + icon('circle') + '<span>모아 멤버십</span>' + icon('right') + '</button>' +
      row('card','결제 수단') + row('truck','정기 배송') + row('support','고객센터') + '</div>';
  } else if (index === 1) {
    const cancel = showPreview('멤버십 해지' + marked, (fixed ? 'outline' : 'quiet') + markClass, next, markAttr);
    contents = '<div class="member-card"><span class="tier">모아 플러스</span><strong>멤버십 이용 중</strong><small>다음 결제일 12월 4일</small></div>' +
      (fixed ? '<div class="early-exit">' + cancel + '</div>' : '') +
      '<div class="saving"><span>받은 혜택</span><b>11,670원</b></div><div class="screen-section">이용 가능한 혜택</div>' +
      '<div class="screen-list">' + row('truck','무료 배송과 반품') + row('gift','회원 전용 할인') + row('heart','추천 상품 혜택') + '</div>' +
      (fixed ? '' : wrapActions(cancel));
  } else if (index === 2) {
    contents = '<div class="screen-hero">' + symbol('calendar') +
      '<h3>' + (fixed ? '해지 후 이용 기한' : '지금 해지하면<br>혜택을 놓쳐요') + '</h3>' +
      '<p class="small">12월 3일까지 현재 혜택을 이용할 수 있어요.</p></div>' +
      '<div class="screen-section">현재 멤버십 혜택</div><div class="screen-list">' +
      row('truck','배송비 할인') + row('gift','회원 전용 쿠폰') + row('card','결제 시 추가 적립') + '</div>' +
      wrapActions(showPreview('멤버십 유지하기','',keep) + showPreview((fixed ? '해지 계속하기' : '혜택을 포기하고 계속') + marked, 'outline' + markClass, next, markAttr));
  } else if (index === 3) {
    const choices = ['월회비가 부담돼요','이용 횟수가 줄었어요','필요한 혜택이 적어요','기타'];
    contents = '<h3>해지하는 이유를<br>알려주시겠어요?</h3><p>' + (fixed ? '원하실 때만 응답해 주세요.' : '이유를 선택하면 계속할 수 있어요.') + '</p>' +
      '<div class="reason-box' + markClass + '" ' + markAttr + (flag && !comparison ? ' tabindex="0"' : '') + '>' + marked +
      choices.map((choice,index) => '<label><input type="radio" name="reason-' + mode + '" value="' + index + '" ' + (!comparison && state.reason === String(index) ? 'checked' : '') + ' ' + (comparison ? 'disabled' : '') + '>' + choice + '</label>').join('') +
      '</div><div class="screen-status" id="survey-error-' + mode + '" role="status">' + (!comparison && state.surveyError ? '해지 사유를 선택해 주세요.' : '') + '</div>' +
      wrapActions(showPreview('다음','') + (fixed ? button('건너뛰기',{variant:'outline',attr:next}) : ''));
  } else if (index === 4) {
    const confirm = showPreview('해지 확정하기' + marked,'outline' + markClass,next,markAttr);
    contents = '<div class="screen-hero">' + symbol('receipt') + '<h3>해지 신청을<br>확인해 주세요</h3><p class="small">지금 확정하면 다음 결제는 진행되지 않아요.</p></div>' +
      terms() + wrapActions(showPreview('멤버십 유지하기',fixed ? 'outline' : '',keep) + confirm);
  } else {
    contents = '<div class="end-state">' + symbol('check') + '<h3>해지 신청이<br>완료되었어요</h3><p>12월 3일까지 멤버십 혜택을<br>계속 이용할 수 있어요.</p></div>' +
      terms() + wrapActions(showPreview('내 계정으로 돌아가기','outline',comparison ? '' : 'data-goto="0"'));
  }
  const back = index && !comparison ? '<button data-goto="' + (index-1) + '" aria-label="이전 단계">' + icon('left') + '</button>' : '<span></span>';
  return '<div class="phone" ' + (comparison ? 'inert' : '') + '><div class="screen-os"><span>9:41</span><span class="signals">' + icon('wifi') + icon('battery') +
    '</span></div><div class="screen-bar">' + back + '<strong>' + page.bar + '</strong><span></span></div><div class="screen-body">' + contents +
    '</div><div class="screen-home"><i></i></div></div>';
}

const canvas = $('#canvas');
const world = $('#world');
const agentBody = $('#agent-body');
const quick = $('#quick');
const popup = $('#popover');
world.style.width = worldWidth + 'px';
world.style.height = position.height + 'px';

function renderScreens() {
  $('#screens').innerHTML = pages.map((page,index) => {
    const label = '<button class="frame-title" data-page="' + index + '" aria-pressed="' + (state.page === index) + '">' +
      '<span class="frame-num">' + pageNumber(index) + '</span>' + page.title +
      (page.issue ? '<i class="' + dotClass(page.issue) + '" aria-label="' + levelName(page.issue) + '"></i>' : '') + '</button>';
    return '<section class="frame' + (state.page === index ? ' current' : '') + '" style="left:' + frameX(index) + 'px" data-frame="' + index + '" aria-label="' + page.title + '">' +
      label + phone(index,isApplied(page.issue)) + '</section>';
  }).join('');
  drawEdges();
}

function drawEdges() {
  const layer = $('#edges');
  const origin = world.getBoundingClientRect();
  const actualScale = origin.width / worldWidth || 1;
  layer.innerHTML = pages.slice(0,-1).map((page,index) => {
    const endpoint = $('.route-target', $('[data-frame="'+index+'"]'));
    const rect = endpoint.getBoundingClientRect();
    const y1 = (rect.top - origin.top + rect.height / 2) / actualScale;
    const y2 = Math.max(135, Math.min(343, y1 - 45));
    const x1 = frameX(index) + position.width + 2;
    const x2 = frameX(index + 1) - 3;
    const c = (x1 + x2) / 2;
    const path = 'M'+x1+' '+y1+' C'+c+' '+y1+' '+c+' '+y2+' '+(x2-3)+' '+y2;
    return '<g class="edge' + (state.edge === index ? ' selected' : '') + '" role="button" tabindex="0" data-edge="' + index +
      '" aria-label="' + page.title + ' → ' + pages[index+1].title + ' 연결선" aria-pressed="' + (state.edge === index) + '">' +
      '<path class="edge-hit" d="' + path + '"/><path class="edge-line" d="' + path + '"/><path class="edge-dash" d="' + path +
      '"/><circle class="edge-end" cx="'+x1+'" cy="'+y1+'" r="2.8"/><path class="edge-arrow" d="M'+(x2-8)+' '+(y2-4)+' L'+x2+' '+y2+' L'+(x2-8)+' '+(y2+4)+'"/></g>';
  }).join('');
}

function renderSidebar() {
  const pageList = $('#page-list');
  const issueList = $('#issue-list');
  pageList.innerHTML = pages.map((page,index) => '<button class="side-row' + (state.page === index ? ' active' : '') + '" data-page="' + index +
    '" aria-current="' + (state.page === index ? 'step' : 'false') + '">' + icon('phone') + '<span class="step-num">' + pageNumber(index) + '</span>' +
    page.title + (page.issue ? '<span class="side-end"><i class="' + dotClass(page.issue) + '"></i></span>' : '') + '</button>').join('');
  issueList.innerHTML = Object.entries(issues).map(([id,item]) => '<button class="side-row issue-row' + (state.issue === Number(id) ? ' active' : '') +
    '" data-issue="' + id + '"><i class="' + dotClass(id) + '"></i>' + item.short + '</button>').join('');
  $('#issue-count').textContent = countNumber(Object.keys(issues).length-state.applied.size);
}

function renderNav() {
  $('#minimap').innerHTML = pages.map((page,index) => '<button data-page="' + index + '" class="' + (state.page === index ? 'active' : '') +
    '" aria-label="' + page.title + '" title="' + page.title + '"></button>').join('');
  $('[data-action="previous"]').disabled = state.page === 0;
  $('[data-action="next"]').disabled = state.page === pages.length - 1;
  $('[data-action="marks"]').setAttribute('aria-pressed', state.marks);
  $('#canvas-summary').textContent = '화면 6개 · 검토 ' + (4-state.applied.size) + '개' + (state.applied.size ? ' · 수정 적용 ' + state.applied.size + '개' : '');
}

const dotClass = (id) => isApplied(id) ? 'fixed-dot' : issues[id].level + '-dot';
const levelName = (id) => isApplied(id) ? '수정 적용됨' : issues[id].level === 'risk' ? '고위험' : '맥락 확인';
const badge = (id) => '<span class="level ' + (isApplied(id) ? 'fixed' : issues[id].level) + '">' + levelName(id) + '</span>';
const sourceLink = (href,text) => '<a class="source-link" href="' + href + '" target="_blank" rel="noopener noreferrer">' + text + icon('link') + '</a>';
const section = (name,label,body) => '<section class="agent-section"><h3>' + icon(name) + label + '</h3>' + body + '</section>';
const optionButton = (id,label) => '<button class="agent-choice" data-issue="' + id + '"><i class="' + dotClass(id) + '"></i>' + label + icon('right') + '</button>';

function renderAgent() {
  $$('.agent-tabs button').forEach((el) => el.setAttribute('aria-selected',el.dataset.tab === state.tab));
  const current = chosenIssue();
  const page = pages[state.page];
  const linkPage = state.edge !== null ? pages[state.edge] : null;
  const contextLine = '<div class="context-line">' + icon(linkPage ? 'route' : 'phone') + context() + '</div>';
  const footer = $('#agent-footer');
  if (state.tab === 'chat') {
    const prompts = ['왜 검토가 필요한가요?', '수정 방향을 알려주세요', '어떤 지표를 검증할까요?'];
    agentBody.innerHTML = contextLine + '<div class="agent-issue"><h2>선택한 화면에 관해 물어보세요</h2><p>시연 응답은 현재 선택한 화면, 요소 또는 연결선을 참고합니다.</p></div>' +
      '<div class="prompt-list">' + prompts.map((prompt) => '<button data-prompt="' + prompt + '">' + prompt + '</button>').join('') + '</div>' +
      '<div role="log" aria-label="대화 내용">' + state.messages.map((entry) => '<div class="chat-message' + (entry.user ? ' user' : '') +
        '"><b>' + (entry.user ? '나' : 'AI 에이전트') + '</b><p>' + escape(entry.text) + '</p>' +
        (entry.suggestion ? '<button class="text-button" data-quick="' + entry.suggestion + '">수정 방향 선택 ' + icon('right') + '</button>' : '') +
        '</div>').join('') + '</div>';
    footer.innerHTML = '<form class="composer"><input name="message" aria-label="에이전트에 질문" placeholder="선택 항목에 관해 질문하기…" maxlength="240" autocomplete="off"><button class="button primary" aria-label="질문 보내기">' + icon('send') + '</button></form>';
    return;
  }
  const note = '<p class="note">위험도는 가상 사례의 검토 우선순위를 뜻합니다. 위법 여부는 실제 동선과 운영 맥락을 바탕으로 판단합니다.</p>';
  if (linkPage) {
    const issue = linkPage.issue;
    agentBody.innerHTML = contextLine + '<div class="agent-issue"><h2>화면 전환 검토</h2><p>' + (issue && isApplied(issue) ? '수정안이 적용된 화면에서 다음 단계로 이동합니다.' : linkPage.edge) + '</p></div>' +
      section('route','이동 경로','<p>' + pages[state.edge].title + ' → ' + pages[state.edge+1].title + '</p>') +
      section('info','관련 요소',issue ? optionButton(issue,issues[issue].short) : '<p>이 연결선에는 검토할 요소가 없습니다.</p>');
  } else if (current) {
    agentBody.innerHTML = contextLine +
      '<div class="agent-issue">' + badge(state.issue) + '<h2>' + current.title + '</h2><p>' + current.kind + '</p></div>' +
      section('search','탐지 사유','<p>' + current.cause + '</p>') +
      section('book','관련 법령 및 가이드라인','<p>' + current.evidence + '</p>' + sourceLink(law,current.article) + sourceLink(guide,'공정위 온라인 인터페이스 가이드라인')) +
      section('person','소비자 영향','<p>' + current.impact + '</p>') +
      section('chart','UX 개선과 검증','<div class="impact"><b>' + current.fix + '</b>' + current.metric + '</div>') + note;
  } else {
    agentBody.innerHTML = contextLine + '<div class="agent-issue"><h2>' + page.title + '</h2><p>' + page.detail + '</p></div>' +
      section('search','검토할 요소',page.issue ? optionButton(page.issue,issues[page.issue].title) : '<p>이 화면에는 표시된 위험 요소가 없습니다.</p>') + note;
  }
  const suggested = state.issue || (linkPage ? linkPage.issue : page.issue);
  footer.innerHTML = '<button class="button secondary" data-tab="chat">' + icon('agent') + '질문하기</button>' +
    (suggested ? '<button class="button primary" data-quick="' + suggested + '">' + icon('code') + '수정안 보기</button>' : '');
}

function renderChrome() {
  $('.workspace').classList.toggle('agent-closed',!state.agentOpen);
  $('.workspace').classList.toggle('sidebar-open',state.sidebarOpen);
  $('.agent-toggle').setAttribute('aria-expanded',state.agentOpen);
  $('.sidebar-toggle').setAttribute('aria-expanded',state.sidebarOpen);
  $('.sidebar-toggle').setAttribute('aria-label',state.sidebarOpen ? '화면 목록 접기' : '화면 목록 펼치기');
}

function render() {
  renderChrome();
  renderScreens();
  renderSidebar();
  renderNav();
  renderAgent();
}

let motionTimer;
function updateCamera(animate = false) {
  clearTimeout(motionTimer);
  world.classList.toggle('moving',animate);
  if (animate) motionTimer = setTimeout(() => world.classList.remove('moving'),405);
  const {x,y,scale} = state.camera;
  world.style.transform = 'translate(' + x + 'px,' + y + 'px) scale(' + scale + ')';
  $('#zoom').textContent = Math.round(scale*100) + '%';
}
const clamp = (value,min,max) => Math.min(max,Math.max(min,value));

function defaultCamera(animate = false) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const maxWidth = width > 700 ? 1.03 : width > 445 ? .78 : .86;
  const scale = clamp(Math.min((height-87)/position.height,maxWidth,width > 445 ? (width-20)/frameX(3) : (width-21)/position.width),.32,1.03);
  const y = clamp((height-50-position.height*scale)*.4,12,75);
  const start = width < 445 && state.page > 0 ? clamp(state.page-1,0,pages.length-2) : clamp(state.page-1,0,pages.length-3);
  state.camera = {scale, x:(width > 700 ? 28 : 17)-frameX(start)*scale, y};
  state.autoCamera = true;
  updateCamera(animate);
}

function fitCamera() {
  const scale = clamp(Math.min((canvas.clientWidth-24)/worldWidth,(canvas.clientHeight-70)/position.height),.14,1.12);
  state.camera = {scale,x:(canvas.clientWidth-worldWidth*scale)/2,y:Math.max(10,(canvas.clientHeight-45-position.height*scale)/2)};
  state.autoCamera = false;
  updateCamera(true);
}

function moveToPage(index, animate = true) {
  const {x,y,scale} = state.camera;
  const width = canvas.clientWidth;
  const start = x + frameX(index)*scale;
  const end = start + position.width*scale;
  if (start >= 10 && end <= width-10 && y >= 0 && y < canvas.clientHeight-100) return;
  const nextX = width/2-(frameX(index)+position.width/2)*scale;
  state.camera.x = clamp(nextX,width-worldWidth*scale-24,26);
  state.camera.y = clamp((canvas.clientHeight-50-position.height*scale)*.4,11,74);
  updateCamera(animate);
}

function zoomBy(factor, x=canvas.clientWidth/2, y=(canvas.clientHeight-37)/2) {
  const old = state.camera;
  const scale = clamp(old.scale*factor,.14,1.65);
  const ratio = scale/old.scale;
  state.camera = {scale,x:x-(x-old.x)*ratio,y:y-(y-old.y)*ratio};
  state.autoCamera = false;
  updateCamera();
}

function selectPage(index, opt = {}) {
  if (!pages[index]) return;
  hidePopover();
  state.page = index;
  state.issue = opt.issue || null;
  state.edge = opt.edge ?? null;
  if (opt.open) state.agentOpen = true;
  if (state.sidebarOpen) state.sidebarOpen = false;
  agentBody.scrollTop = 0;
  render();
  moveToPage(index);
  if (opt.focus) {
    const target = opt.focus === 'edge' ? $('[data-edge="'+opt.edge+'"]') : $('.frame-title',$('[data-frame="'+index+'"]'));
    target?.focus({preventScroll:true});
  }
}

function nextFrom(index) {
  if (index === 3 && beforeFix(3) && !state.reason) {
    state.surveyError = true;
    selectPage(3,{issue:3});
    toast('해지 사유를 선택해야 이동할 수 있어요.');
    return;
  }
  state.surveyError = false;
  const target = index + 1;
  selectPage(target,{focus:'page'});
  if (target === 5) toast('가상 멤버십 해지 신청이 완료되었어요.');
}

function selectIssue(id, open = true) {
  state.tab = 'review';
  selectPage(issuePage(id),{issue:id,open});
}

let toastTimer;
function toast(message) {
  $('#toast').textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { $('#toast').textContent = ''; },3200);
}

let popTimer;
function hidePopover() {
  clearTimeout(popTimer);
  state.popover = null;
  popup.hidden = true;
}
function deferHide() {
  clearTimeout(popTimer);
  popTimer = setTimeout(hidePopover,200);
}
function showPopover(anchor) {
  clearTimeout(popTimer);
  const id = Number(anchor.dataset.flag);
  if (state.popover === id && !popup.hidden) return;
  const item = issues[id];
  state.popover = id;
  popup.innerHTML = '<div class="popover-top">' + badge(id) + '<button class="icon" data-action="close-pop" aria-label="검토 팝오버 닫기">' + icon('close') + '</button></div>' +
    '<h3>' + item.kind + '</h3><p><b>탐지 사유</b> ' + item.cause + '</p>' + sourceLink(law,item.article) +
    sourceLink(guide,'공정위 가이드라인') + '<p><b>소비자 영향</b> ' + item.impact + '</p>' +
    '<button class="button primary" data-quick="' + id + '">수정 방안 보기 ' + icon('right') + '</button>';
  popup.hidden = false;
  const bounds = anchor.getBoundingClientRect();
  const width = popup.offsetWidth;
  const height = popup.offsetHeight;
  const anchorCenter = (bounds.left+bounds.right)/2;
  const below = bounds.bottom+height+6 <= window.innerHeight-8;
  const top = below ? bounds.bottom+5 : bounds.top-height-5;
  popup.style.left = clamp(anchorCenter-width/2, 8, window.innerWidth-width-8) + 'px';
  popup.style.top = clamp(top,8,window.innerHeight-height-8) + 'px';
}

const quickHeader = (title, subtitle) => '<header class="quick-head"><span class="agent-icon">' + icon(subtitle ? 'code' : 'info') +
  '</span><div>' + (subtitle ? '<small>' + subtitle + '</small>' : '') + '<h2 id="quick-title">' + title +
  '</h2></div><button class="icon" data-action="close-quick" aria-label="미리보기 닫기">' + icon('close') + '</button></header>';

function previewSizing() {
  $$('.quick-phone-slot',quick).forEach((slot) => {
    const scale = Math.min(.82,(slot.clientWidth-8)/position.width);
    slot.style.setProperty('--comparison-scale',scale);
    slot.style.height = 431*scale + 'px';
  });
}
function renderQuick() {
  const id = state.quick;
  const item = issues[id];
  const index = issuePage(id);
  const fixed = isApplied(id);
  const view = state.quickTab === 'compare' ?
    '<div class="compare"><div class="compare-pane"><b>기존 화면</b><div class="quick-phone-slot">' + phone(index,false,'before') +
    '</div></div><div class="compare-pane improved"><b>개선 화면</b><div class="quick-phone-slot">' + phone(index,true,'after') + '</div></div></div>' :
    '<div class="diff"><div class="diff-head">' + item.file + '</div><pre class="diff-old">' + escape(item.before.split('\n').map((line) => '− '+line).join('\n')) +
    '</pre><pre class="diff-new">' + escape(item.after.split('\n').map((line) => '+ '+line).join('\n')) + '</pre></div>';
  quick.innerHTML = quickHeader(item.fix,'수정안 미리보기 · ' + pageNumber(index) + ' ' + pages[index].title) +
    '<div class="quick-tabs" role="tablist" aria-label="수정안 보기 방식"><button data-quick-tab="compare" role="tab" aria-selected="' + (state.quickTab==='compare') +
    '">화면 비교</button><button data-quick-tab="code" role="tab" aria-selected="' + (state.quickTab==='code') + '">변경 코드</button></div>' +
    '<div class="quick-content">' + view + '<aside class="quick-notes"><h3>수정 이유</h3><p>' + item.reason + '</p><h3>기대 효과</h3><p>' + item.business +
    '</p><h3>성과 검증</h3><p>' + item.metric + '</p><p class="test-note">시연 내 예상 효과이며 성과는 실제 실험으로 검증해야 합니다.</p></aside></div>' +
    '<footer class="quick-footer"><button class="button secondary" data-action="close-quick">닫기</button><button class="button primary" data-action="' +
    (fixed ? 'undo' : 'apply') + '">' + icon(fixed ? 'reset' : 'check') + (fixed ? '적용 되돌리기' : '수정 적용') + '</button></footer>';
  if (!quick.open) quick.showModal();
  previewSizing();
}
let quickReturnFocus;
function openQuick(id) {
  quickReturnFocus = document.activeElement;
  state.quick = id;
  state.quickTab = 'compare';
  hidePopover();
  renderQuick();
}
function about() {
  state.quick = null;
  quickReturnFocus = document.activeElement;
  quick.innerHTML = quickHeader('프로젝트 정보','') +
    '<div class="about-content"><p>쿠팡 와우 멤버십 해지 자료에 나온 단계 순서를 참고해, 가상 서비스 ‘모아’의 화면과 데이터로 만든 분석용 데모입니다.</p>' +
    '<p>설문 필수 여부와 위험도는 이 시연의 조건입니다. 실제 서비스의 현재 화면이나 위법 여부를 판정하지 않습니다.</p>' +
    '<p>감지 결과와 AI 답변은 시연용이며, 적용된 변경은 이 세션의 화면에만 반영됩니다.</p>' +
    sourceLink('https://m.blog.naver.com/13starlight/223808511897','참고한 해지 흐름 자료') +
    sourceLink(law,'전자상거래법 제21조의2') + sourceLink(guide,'공정거래위원회 가이드라인') +
    '</div><footer class="quick-footer"><button class="button primary" data-action="close-quick">닫기</button></footer>';
  quick.showModal();
}
function applyQuick(undo) {
  const id = state.quick;
  if (undo) state.applied.delete(id);
  else state.applied.add(id);
  if (id === 3) state.surveyError = false;
  quick.close();
  selectIssue(id,state.agentOpen);
  toast(undo ? '시연 화면의 수정을 되돌렸어요.' : '개선된 요소를 시연 화면에 적용했어요.');
}

function sendMessage(value) {
  const message = value.trim();
  if (!message) return;
  const id = state.issue || pages[state.edge ?? state.page].issue;
  const item = issues[id];
  const topic = context();
  let response;
  let suggestion;
  if (!item) {
    const page = pages[state.edge ?? state.page];
    response = (state.edge === null ? page.detail : page.edge) + ' 시연 데이터에서는 이 위치에 표시된 위험 요소가 없습니다.';
  } else if (/지표|검증|성과|효과|ctr|cvr|전환|신뢰|이탈/i.test(message)) {
    response = item.metric + ' ' + item.business + ' 실제 변화는 동일한 조건의 사용자 테스트로 확인하세요.';
  } else if (/수정|개선|코드|변경|방향|대안/.test(message)) {
    response = item.fix + '. ' + item.reason + ' 화면과 변경 코드를 비교한 후 적용할 수 있어요.';
    suggestion = id;
  } else if (/법|가이드|의심|근거|왜|검토|위험/.test(message)) {
    response = item.cause + ' ' + item.evidence + ' ' + item.article + '를 참고할 수 있어요.';
  } else {
    response = item.impact + ' 제안하는 방향은 ‘' + item.fix + '’입니다. ' + item.reason;
    suggestion = id;
  }
  state.messages.push({user:true,text:message},{user:false,text:'[' + topic + '] ' + (id && isApplied(id) ? '시연 수정안이 적용되어 있어요. ' : '') + response,suggestion});
  renderAgent();
  agentBody.scrollTop = agentBody.scrollHeight;
  $('.composer input')?.focus({preventScroll:true});
}

function setTab(tab) {
  state.tab = tab;
  state.agentOpen = true;
  renderChrome();
  agentBody.scrollTop = 0;
  renderAgent();
}
function reset() {
  state.applied.clear();
  Object.assign(state,{page:1,issue:1,edge:null,tab:'review',marks:true,reason:'',surveyError:false,messages:[]});
  hidePopover();
  render();
  defaultCamera(true);
  toast('시연을 처음 상태로 돌렸어요.');
}
const actions = {
  agent() {
    state.agentOpen = !state.agentOpen;
    renderChrome();
    if (!state.agentOpen) $('.agent-toggle').focus({preventScroll:true});
  },
  sidebar() {state.sidebarOpen = !state.sidebarOpen; renderChrome();},
  marks() {state.marks = !state.marks; hidePopover(); renderScreens(); renderNav();},
  previous() {selectPage(state.page-1);},
  next() {selectPage(state.page+1);},
  in() {hidePopover(); zoomBy(1.15);},
  out() {hidePopover(); zoomBy(1/1.15);},
  fit() {hidePopover(); fitCamera();},
  'default-view'() {hidePopover(); defaultCamera(true);},
  'close-quick'() {quick.close();},
  'close-pop'() {hidePopover();},
  apply() {applyQuick(false);},
  undo() {applyQuick(true);},
  about,
  reset,
};
document.addEventListener('click',(event) => {
  if (event.target === quick) {quick.close(); return;}
  const edge = event.target.closest('[data-edge]');
  if (edge) {
    const index = Number(edge.dataset.edge);
    state.tab = 'review';
    selectPage(index,{edge:index,open:true,focus:'edge'});
    return;
  }
  const button = event.target.closest('button');
  if (!button) return;
  const {action,page,issue,goto,next,tab,quick:quickId,quickTab,prompt} = button.dataset;
  if (action) actions[action]();
  if (page !== undefined) selectPage(Number(page),{focus:'page'});
  if (issue) selectIssue(Number(issue));
  if (goto !== undefined) selectPage(Number(goto),{focus:'page'});
  if (next !== undefined) nextFrom(Number(next));
  if (tab) {
    setTab(tab);
    if (tab==='chat' && !button.closest('.agent-tabs')) $('.composer input').focus();
  }
  if (quickId) openQuick(Number(quickId));
  if (quickTab) {
    state.quickTab = quickTab;
    renderQuick();
    $('[data-quick-tab="'+quickTab+'"]',quick).focus({preventScroll:true});
  }
  if (prompt) sendMessage(prompt);
});
document.addEventListener('change',(event) => {
  if (event.target.name !== 'reason-canvas') return;
  state.reason = event.target.value;
  state.surveyError = false;
  $('#survey-error-canvas').textContent = '';
});
document.addEventListener('submit',(event) => {
  if (!event.target.matches('.composer')) return;
  event.preventDefault();
  sendMessage(new FormData(event.target).get('message'));
});
canvas.addEventListener('pointerover',(event) => {
  const target = event.target.closest('[data-flag]');
  if (target && event.pointerType !== 'touch') showPopover(target);
});
canvas.addEventListener('pointerout',(event) => {
  const target = event.target.closest('[data-flag]');
  if (target && !target.contains(event.relatedTarget)) deferHide();
});
canvas.addEventListener('focusin',(event) => {
  const target = event.target.closest('[data-flag]');
  if (target && target.matches(':focus-visible')) showPopover(target);
});
document.addEventListener('focusout',(event) => {
  if (!popup.hidden && (popup.contains(event.target) || event.target.closest?.('[data-flag]')) &&
      !popup.contains(event.relatedTarget) && !event.relatedTarget?.closest?.('[data-flag]')) deferHide();
});
popup.addEventListener('pointerenter',() => clearTimeout(popTimer));
popup.addEventListener('pointerleave',deferHide);
popup.addEventListener('focusin',() => clearTimeout(popTimer));
quick.addEventListener('close',() => {
  quickReturnFocus?.focus({preventScroll:true});
  quickReturnFocus = null;
});

let drag;
canvas.addEventListener('pointerdown',(event) => {
  if (event.button !== 0 || event.target.closest('button,a,input,label,[data-edge],[data-flag]')) return;
  drag = {id:event.pointerId, clientX:event.clientX, clientY:event.clientY,x:state.camera.x,y:state.camera.y};
  canvas.setPointerCapture(event.pointerId);
  canvas.classList.add('dragging');
  state.autoCamera = false;
  hidePopover();
});
canvas.addEventListener('pointermove',(event) => {
  if (!drag || event.pointerId !== drag.id) return;
  state.camera.x = drag.x+event.clientX-drag.clientX;
  state.camera.y = drag.y+event.clientY-drag.clientY;
  updateCamera();
});
canvas.addEventListener('lostpointercapture',() => {drag = null; canvas.classList.remove('dragging');});
canvas.addEventListener('wheel',(event) => {
  event.preventDefault();
  hidePopover();
  if (event.ctrlKey || event.metaKey) {
    const rect = canvas.getBoundingClientRect();
    zoomBy(Math.exp(-event.deltaY*.005),event.clientX-rect.left,event.clientY-rect.top);
    return;
  }
  const units = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? canvas.clientWidth : 1;
  state.camera.x -= (event.deltaX || event.deltaY)*units;
  if (event.deltaX) state.camera.y -= event.deltaY*units;
  state.autoCamera = false;
  updateCamera();
},{passive:false});

document.addEventListener('keydown',(event) => {
  if (event.key === 'Escape' && !popup.hidden) hidePopover();
  const edge = event.target.closest('[data-edge]');
  if (edge && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    const index = Number(edge.dataset.edge);
    state.tab = 'review';
    selectPage(index,{edge:index,open:true,focus:'edge'});
    return;
  }
  if (event.target !== canvas) return;
  const arrows = {ArrowLeft:[45,0],ArrowRight:[-45,0],ArrowUp:[0,45],ArrowDown:[0,-45]};
  if (arrows[event.key]) {
    event.preventDefault();
    const [x,y] = arrows[event.key];
    state.camera.x += x;
    state.camera.y += y;
    state.autoCamera = false;
    updateCamera();
  } else if (['+','=','-','0'].includes(event.key)) {
    event.preventDefault();
    if (event.key==='0') fitCamera();
    else zoomBy(event.key === '-' ? 1/1.15 : 1.15);
  }
});

new ResizeObserver(() => {
  hidePopover();
  if (state.autoCamera) defaultCamera();
  else moveToPage(state.page,false);
  if (state.quick !== null && quick.open) previewSizing();
}).observe(canvas);
window.addEventListener('resize',() => { if (state.quick !== null && quick.open) previewSizing(); });
document.fonts.ready.then(drawEdges);
render();
defaultCamera();
