const $ = (selector) => document.querySelector(selector);
const paths = {
  logo:'<path d="M5 8V5h3m8 0h3v3m0 8v3h-3m-8 0H5v-3"/><path d="m8 12 2.5 2.5L16 9"/>',
  box:'<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
  branch:'<circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M6 8v8m12-8c0 5-5 5-9 5"/>',
  files:'<rect x="8" y="6" width="12" height="15" rx="2"/><path d="M16 3H6a2 2 0 0 0-2 2v12m7-6h6m-6 4h6"/>',
  shield:'<path d="M12 22s7-3 7-10V5l-7-3-7 3v7c0 7 7 10 7 10Z"/><path d="m9 12 2 2 4-4"/>',
  scan:'<path d="M4 8V4h4m8 0h4v4m0 8v4h-4m-8 0H4v-4M3 12h18"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 4 3c-1 .5-1 1-1 2m0 3h.01"/>',
  panel:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M9 5v14"/>',
  down:'<path d="m6 9 6 6 6-6"/>',
  arrow:'<path d="m9 6 6 6-6 6"/>',
  globe:'<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-2-15-4 18"/>',
  lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
  monitor:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M12 17v4m-4 0h8"/>',
  phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  expand:'<path d="M4 9V4h5m6 0h5v5m0 6v5h-5m-6 0H4v-5"/>',
  spark:'<path d="m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7L12 2Z"/>',
  more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  sound:'<path d="M3 13V11a9 9 0 0 1 18 0v2M3 12h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm18 0h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2Z"/>',
  wave:'<path d="M2 12h3l2-6 4 12 4-12 3 6h4"/>',
  book:'<path d="M12 6c-3-3-6-3-9-2v15c3-1 6-1 9 2 3-3 6-3 9-2V4c-3-1-6-1-9 2Zm0 0v15"/>',
  external:'<path d="M14 4h6v6m0-6-8 8m5 1v6H5V7h6"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  close:'<path d="m6 6 12 12M18 6 6 18"/>',
  send:'<path d="m4 4 17 8-17 8 3-8-3-8Zm3 8h14"/>',
};
const icon = (name) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths[name] + '</svg>';
document.querySelectorAll('[data-icon]').forEach((node) => node.insertAdjacentHTML('afterbegin', icon(node.dataset.icon)));
const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const eu = 'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A02011L0083-20260927';
const findings = [
  {id:1, title:'Preselected paid add-on', short:'Preselected add-on', severity:'High', pattern:'DEFAULT CHOICE', file:'ProtectionOption.tsx', line:6,
   detail:'Shipping protection adds $4.90 and is selected as soon as the checkout loads.',
   law:'EU Consumer Rights Directive · Art. 22', url:eu, evidence:'Additional payments require express consent. Article 22 addresses paid extras selected by default.',
   fix:'Make protection opt-in', rationale:'Start with an empty checkbox. Keep the price visible next to the option and update the total when selected.',
   metric:'Compare checkout completion and add-on opt-in. Uplift is uncertain.',
   before:'  const [selected, setSelected] = useState(true);', after:'  const [selected, setSelected] = useState(false);'},
  {id:2, title:'Fee shown late in checkout', short:'Late fee disclosure', severity:'Medium', pattern:'HIDDEN COSTS', file:'OrderSummary.tsx', line:5,
   detail:'A $3.50 handling fee first appears at payment, after the customer has passed the cart.',
   law:'FTC staff report · Hidden costs', url:'https://www.ftc.gov/reports/bringing-dark-patterns-light', evidence:'The FTC staff report identifies hidden costs and fees disclosed late in a purchase as dark-pattern risks.',
   fix:'Show mandatory fees in the cart', rationale:'Show the handling fee in both cart and checkout. Keep the full total directly above the payment button.',
   metric:'Track cart-to-payment clicks, completion, and fee-related exits. Uplift is uncertain.',
   before:'  const showHandlingFee = stage === "payment";', after:'  const showHandlingFee = stage === "cart" || stage === "payment";'},
  {id:3, title:'Ambiguous payment button', short:'Ambiguous payment CTA', severity:'High', pattern:'UNCLEAR COMMITMENT', file:'Checkout.tsx', line:10,
   detail:'The final button says “Continue” even though it places a paid order.',
   law:'EU Consumer Rights Directive · Art. 8(2)', url:eu, evidence:'When an order carries an obligation to pay, the final control must make that obligation unambiguous.',
   fix:'Name the action and price', rationale:'Use “Pay” with the current total, so the customer knows what clicking the button does.',
   metric:'Measure payment-button CTR alongside completion and refund requests. Uplift is uncertain.',
   before:'      <button onClick={placeOrder}>Continue</button>', after:'      <button onClick={placeOrder}>Pay {formatMoney(total)}</button>'},
];
const files = {
 'ProtectionOption.tsx':[
  'import { useState } from "react";',
  'import { formatMoney } from "./pricing";',
  '',
  'export function ProtectionOption({ onChange }) {',
  '  const protectionFee = 4.90;',
  findings[0].before,
  '',
  '  return (',
  '    <label className="shipping-protection">',
  '      <input type="checkbox" checked={selected}',
  '        onChange={(event) => {',
  '          setSelected(event.target.checked);',
  '          onChange(event.target.checked ? protectionFee : 0);',
  '        }}',
  '      />',
  '      Shipping protection · {formatMoney(protectionFee)}',
  '    </label>',
  '  );',
  '}',
 ],
 'OrderSummary.tsx':[
  'import { formatMoney } from "./pricing";',
  '',
  'export function OrderSummary({ stage, subtotal, protection }) {',
  '  const handlingFee = 3.50;',
  findings[1].before,
  '  const total = subtotal + protection + (showHandlingFee ? handlingFee : 0);',
  '',
  '  return <section aria-label="Order summary">',
  '    <SummaryLine label="Subtotal" value={formatMoney(subtotal)} />',
  '    {showHandlingFee && <SummaryLine label="Handling fee" value={formatMoney(handlingFee)} />}',
  '    <SummaryLine label="Total" value={formatMoney(total)} />',
  '  </section>;',
  '}',
 ],
 'Checkout.tsx':[
  'import { formatMoney } from "./pricing";',
  'import { OrderSummary } from "./OrderSummary";',
  'import { ProtectionOption } from "./ProtectionOption";',
  '',
  'export function Checkout({ subtotal, total, protection, setProtection, placeOrder }) {',
  '  return (',
  '    <section aria-label="Checkout">',
  '      <ProtectionOption onChange={setProtection} />',
  '      <OrderSummary stage="payment" subtotal={subtotal} protection={protection} />',
  findings[2].before,
  '    </section>',
  '  );',
  '}',
 ],
 'pricing.ts':['export function formatMoney(amount: number) {','  return new Intl.NumberFormat("en-US", {','    style: "currency",','    currency: "USD",','  }).format(amount);','}'],
 'package.json':['{','  "name": "studio-store",','  "private": true,','  "dependencies": {','    "react": "^19.0.0"','  }','}'],
};
const state = {active:1,file:'ProtectionOption.tsx',panel:'findings',mode:'preview',device:'desktop',stage:'payment',applied:new Set(),messages:[],folders:{src:true,checkout:true},scan:false,protection:true};
const getFinding = (id = state.active) => findings.find((finding) => finding.id === id);
const resolved = (id) => state.applied.has(id);
const focusItem = (selector) => $(selector)?.focus({preventScroll:true});
const typeFor = (file) => file.endsWith('.json') ? '{}' : file.endsWith('.tsx') ? '≋' : 'TS';
const fileButton = (file, indent) => '<button class="tree-row '+(state.file===file?'current':'')+'" style="--indent:'+indent+'px" data-file="'+file+'"><span class="type '+(file.endsWith('.json')?'json':'')+'">'+typeFor(file)+'</span>'+file+(state.file===file?'<i class="file-dot"></i>':'')+'</button>';
const folderButton = (name, indent) => '<button class="tree-row" style="--indent:'+indent+'px" data-folder="'+name+'" aria-expanded="'+state.folders[name]+'">'+icon(state.folders[name]?'down':'arrow')+icon('folder')+name+'</button>';
function renderTree() {
  $('#tree').innerHTML = folderButton('src',9) + (state.folders.src ? folderButton('checkout',21) + (state.folders.checkout ? ['Checkout.tsx','OrderSummary.tsx','ProtectionOption.tsx'].map((file) => fileButton(file,34)).join('') : '') + fileButton('pricing.ts',23) : '') + fileButton('package.json',13);
  $('#finding-list').innerHTML = findings.map((f) => '<button class="finding-row '+(state.active===f.id?'current ':'')+(resolved(f.id)?'resolved':'')+'" data-issue="'+f.id+'" aria-pressed="'+(state.active===f.id)+'"><span class="finding-number">'+(resolved(f.id)?'✓':'0'+f.id)+'</span>'+f.short+'</button>').join('');
}
const money = (value) => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value);
const pin = (id) => '<span class="pin" aria-hidden="true">'+id+'</span>';
const flagClass = (id) => resolved(id) ? '' : ' flagged'+(state.active===id?' active':'');
function renderStore() {
  const store = $('#store');
  store.classList.toggle('mobile',state.device==='mobile');
  const cart = state.stage==='cart';
  const handling = !cart || resolved(2);
  const protection = !cart && state.protection;
  const total = 129 + (protection ? 4.90 : 0) + (handling ? 3.50 : 0);
  const activeFlag = (id) => resolved(id) ? '' : ' data-issue="'+id+'" aria-pressed="'+(state.active===id)+'"';
  store.innerHTML =
    '<div class="shop-header"><span class="shop-logo">'+icon('wave')+' studio supply</span><span class="secure">'+icon('lock')+' Secure checkout</span></div>'+
    '<div class="checkout"><div class="steps"><button data-action="cart" class="'+(cart?'current':'')+'">Cart</button>'+icon('arrow')+'<span>Details</span>'+icon('arrow')+'<button data-action="payment" class="'+(!cart?'current':'')+'">Payment</button></div>'+
    '<h2>'+(cart?'Your cart':'Review your order')+'</h2><div class="order"><div class="product"><span class="product-image">'+icon('sound')+'</span><span><strong>Studio Headphones</strong><small>Clay · Qty 1</small></span><span class="product-price">$129.00</span></div>'+
    (cart ? '' : resolved(1) ? '<label class="addon consent"><input id="protection" type="checkbox" '+(protection?'checked':'')+'> <span>Shipping protection</span><strong>+$4.90</strong></label>' :
      '<button class="addon'+flagClass(1)+'"'+activeFlag(1)+'><span class="fake-check on">✓</span><span>Shipping protection</span><strong>+$4.90</strong>'+pin(1)+'</button>')+
    '<div class="totals"><div class="money"><span>Subtotal</span><span>$129.00</span></div>'+
    (handling ? (resolved(2) ? '<div class="money"><span>Handling fee</span><span>$3.50</span></div>' : '<button class="money fee'+flagClass(2)+'"'+activeFlag(2)+'><span>Handling fee</span><span>$3.50</span>'+pin(2)+'</button>') : '')+
    '<div class="money total"><span>Total</span><span>'+money(total)+'</span></div></div>'+
    (cart ? '<button class="pay" data-action="payment">Go to payment</button>' : '<button class="pay'+flagClass(3)+'" '+(resolved(3)?'data-action="purchase"':activeFlag(3))+'>'+(resolved(3)?'Pay '+money(total):'Continue'+pin(3))+'</button>')+
    '<p class="order-note">'+(cart?'Sample cart · switch to Payment to see the final step':'Payments are simulated in this preview')+'</p></div></div>';
  $('.route').textContent = cart?'/cart':'/checkout';
  document.querySelectorAll('.view-tools button').forEach((button) => {button.classList.toggle('active',button.dataset.action===state.device);button.setAttribute('aria-pressed',button.dataset.action===state.device);});
}
const highlight = (line) => escape(line).replace(/(&quot;.*?&quot;|\b(?:import|from|export|function|return|const|false|true|number)\b|&lt;\/?[\w.]+)/g,(part)=> '<span class="'+(part.startsWith('&quot;')?'syntax-string':part.startsWith('&lt;')?'syntax-tag':'syntax-key')+'">'+part+'</span>');
function renderCode() {
  const fileFinding = findings.find((f) => f.file===state.file);
  $('#source-file').textContent = (state.file==='package.json'?'':state.file==='pricing.ts'?'src/':'src/checkout/')+state.file;
  $('#source-code').innerHTML = files[state.file].map((line,index) => {
    const marked = fileFinding?.line===index+1;
    return '<div class="code-row'+(marked?(resolved(fileFinding.id)?' patched':' highlight'):'')+'"><span class="line-no">'+(index+1)+'</span><code>'+highlight(marked && resolved(fileFinding.id)?fileFinding.after:line)+'</code></div>';
  }).join('');
  const code = $('#source-code');
  code.scrollTop = Math.max(0, (fileFinding?.line-4 || 0)*18);
  code.scrollLeft = 0;
}
function renderPanel() {
  const f = getFinding();
  const remaining = findings.length-state.applied.size;
  $('#side-count').textContent = remaining;
  $('#agent-count').textContent = remaining;
  $('#status-findings').innerHTML = icon('shield')+remaining+' open '+(remaining===1?'finding':'findings');
  $('#agent-status').textContent = state.scan?'Reviewing sample files…':'Analysis complete';
  document.querySelectorAll('[data-panel]').forEach((node) => {node.classList.toggle('active',node.dataset.panel===state.panel);node.setAttribute('aria-pressed',node.dataset.panel===state.panel);});
  if (state.panel==='chat') {
    $('#agent-content').innerHTML = '<div class="chat-intro"><h2>Ask about this review</h2><p>Simulated answers use the selected finding and sample code.</p></div><div class="quick">'+['Why was this flagged?','How would I test CTR?','Summarize findings'].map((prompt) => '<button data-prompt="'+prompt+'">'+prompt+'</button>').join('')+'</div><div role="log" id="messages">'+state.messages.map((m) => '<div class="bubble '+(m.user?'user':'')+'"><b>'+(m.user?'You':'Audit agent')+'</b><p>'+escape(m.text)+'</p></div>').join('')+'</div>';
    $('#agent-bottom').innerHTML = '<form class="composer"><input aria-label="Ask the demo agent" maxlength="280" name="prompt" placeholder="Ask about this review…"><button class="primary" aria-label="Send message">'+icon('send')+'</button></form>';
    return;
  }
  const fixed = resolved(f.id);
  $('#agent-content').innerHTML =
    '<div class="summary"><div><strong>'+(remaining?remaining+' open '+(remaining===1?'finding':'findings'):'All sample fixes applied')+'</strong><small>Checkout flow · '+state.applied.size+' applied</small></div><span class="summary-icon">'+icon('shield')+'</span></div>'+
    '<article class="card"><header class="card-top"><div class="find-meta"><span class="severity '+(fixed?'fixed':f.severity.toLowerCase())+'">'+(fixed?'Applied':f.severity+' risk')+'</span><span>0'+f.id+' / '+f.pattern+'</span></div><h2>'+f.title+'</h2><p>'+f.detail+'</p></header>'+
    '<div class="card-body"><button class="loc" data-action="location">'+icon('code')+f.file+':'+f.line+'</button>'+
    '<h3 class="section-label">'+icon('book')+' REGULATORY EVIDENCE</h3><a class="evidence" href="'+f.url+'" target="_blank" rel="noopener noreferrer"><strong>'+f.law+icon('external')+'</strong><p>'+f.evidence+'</p></a>'+
    '<h3 class="section-label">'+icon('spark')+' UX RECOMMENDATION</h3><div class="suggestion"><strong>'+f.fix+'</strong><p>'+f.rationale+'</p></div><div class="experiment"><b>Experiment to validate</b>'+f.metric+'</div></div></article>'+
    '<div class="other-list">'+findings.filter((other) => other.id!==f.id).map((other) => '<button class="other" data-issue="'+other.id+'"><span class="finding-number">'+(resolved(other.id)?'✓':'0'+other.id)+'</span>'+other.title+icon('arrow')+'</button>').join('')+'</div>';
  $('#agent-bottom').innerHTML = '<button class="subtle" data-action="ask">Ask agent</button><button class="primary" data-action="changes">'+icon(fixed?'check':'branch')+(fixed?'View applied diff':'Review diff')+'</button>';
}
function render() {
  renderTree(); renderStore(); renderCode(); renderPanel();
  $('.main').classList.toggle('editor-mode',state.mode==='editor');
  document.querySelectorAll('.workspace-tab').forEach((button) => {button.classList.toggle('active',button.dataset.action===state.mode);button.setAttribute('aria-pressed',button.dataset.action===state.mode);});
}
function select(id) {
  state.active=id; state.file=getFinding().file; state.panel='findings';
  state.folders.src=true; state.folders.checkout=true;
  $('#agent-content').scrollTop=0;
  render();
}
let toastTimer;
function toast(message) {
  $('#toast').textContent=message;
  clearTimeout(toastTimer);
  toastTimer=setTimeout(() => {$('#toast').textContent='';},3800);
}
function dialog(title, body, footer) {
  const modal = $('#modal');
  modal.innerHTML='<div class="modal-head"><h2 id="modal-title">'+title+'</h2><button class="icon" data-action="close" aria-label="Close dialog">'+icon('close')+'</button></div><div class="modal-content">'+body+'</div><div class="modal-footer">'+footer+'</div>';
  if (!modal.open) modal.showModal();
}
function diff(id=state.active) {
  const f=getFinding(id);
  const done=resolved(id);
  const context=files[f.file];
  dialog('Review proposed change',
    '<div class="diff-select">'+findings.map((item) => '<button class="subtle '+(item.id===id?'active':'')+'" data-diff="'+item.id+'" aria-pressed="'+(item.id===id)+'">'+(resolved(item.id)?'✓ ':'0'+item.id+' ')+item.short+'</button>').join('')+'</div><p>'+f.rationale+'</p>'+
    '<div class="diff"><div class="diff-head">'+f.file+':'+f.line+'</div><pre>'+escape('  '+context[f.line-2])+'</pre><pre class="diff-del">'+escape('− '+f.before)+'</pre><pre class="diff-add">'+escape('+ '+f.after)+'</pre><pre>'+escape('  '+context[f.line])+'</pre></div>',
    '<button class="subtle" data-action="close">Close</button><button class="primary" data-'+(done?'undo':'apply')+'="'+id+'">'+icon(done?'branch':'check')+(done?'Undo demo change':'Simulate apply')+'</button>');
}
function send(prompt) {
  const value=prompt.trim();
  if(!value) return;
  const f=getFinding();
  const question=value.toLowerCase();
  let reply;
  if (/ctr|test|conversion|experiment/.test(question)) reply=f.metric+' Define the primary metric as a share of eligible sessions and compare against the current experience. Monitor the guardrails before rolling out.';
  else if (/summar|all findings|priority/.test(question)) reply='This sample has three checks: paid add-on consent, fee disclosure, and payment-button wording. '+state.applied.size+' of 3 fixes have been applied in the demo.';
  else if (/code|fix|change|patch/.test(question)) reply=f.fix+'. '+f.rationale+' Review the patch in '+f.file+' on line '+f.line+'.';
  else if (/why|legal|law|regulat|flag/.test(question)) reply=f.detail+' '+f.evidence+' See '+f.law+' in Findings.';
  else reply='For “'+f.title+',” the suggested change is to '+f.fix.toLowerCase()+'. '+f.rationale+' I can also show the evidence, proposed patch, or experiment for this finding.';
  state.messages.push({user:true,text:value},{user:false,text:reply});
  renderPanel();
  const content=$('#agent-content');
  content.scrollTop=content.scrollHeight;
  focusItem('.composer input');
}
const actions = {
  scan(button) {
    if(state.scan) return;
    state.scan=true; button.disabled=true;
    button.innerHTML=icon('scan')+' Auditing…';
    renderPanel();
    setTimeout(() => {
      state.scan=false; state.panel='findings'; button.disabled=false;
      button.innerHTML=icon('scan')+' Run audit'; renderPanel();
      const count=findings.length-state.applied.size;
      toast('Demo audit complete · '+count+' open '+(count===1?'finding':'findings'));
    },650);
  },
  explorer() {
    const workspace=$('.workspace');
    if(matchMedia('(max-width:830px)').matches) {
      const open=workspace.classList.toggle('explorer-open');
      $('.mobile-explorer').setAttribute('aria-expanded',open);
    }
    else workspace.classList.toggle('explorer-hidden');
  },
  findings(){state.panel='findings';renderPanel();$('.assistant').scrollIntoView({block:'nearest'});},
  changes(){diff();},
  preview(){state.mode='preview';render();},
  editor(){state.mode='editor';render();},
  expand(){state.mode=state.mode==='editor'?'preview':'editor';render();},
  desktop(){state.device='desktop';renderStore();},
  mobile(){state.device='mobile';renderStore();},
  location(){state.file=getFinding().file;state.mode='editor';render();focusItem('#source-code');},
  cart(){state.stage='cart';renderStore();focusItem('[data-action="cart"]');},
  payment(){state.stage='payment';renderStore();focusItem('.steps [data-action="payment"]');},
  purchase(){toast('Sample payment complete · no charge made');},
  ask(){state.panel='chat';renderPanel();focusItem('.composer input');},
  close(){$('#modal').close();},
  about(){dialog('About Intent Audit','<p>Intent Audit is a simulated review of a storefront checkout. Explore the sample files, inspect regulatory sources, and try reversible changes in the preview.</p><p>AI responses and audit results are scripted. Reload to reset the workspace.</p>','<button class="primary" data-action="close">Back to workspace</button>');},
};
document.addEventListener('click',(event) => {
  if(event.target===$('#modal')) {$('#modal').close();return;}
  const button=event.target.closest('button');
  if(!button) return;
  const {action,file,folder,issue,panel,diff:diffId,apply,undo,prompt}=button.dataset;
  if(action) actions[action](button);
  if(file){if(matchMedia('(max-width:599px)').matches){$('.workspace').classList.remove('explorer-open');$('.mobile-explorer').setAttribute('aria-expanded',false);}
    state.file=file;const f=findings.find((item)=>item.file===file);if(f)state.active=f.id;state.mode='editor';render();focusItem('[data-file="'+file+'"]');}
  if(folder){state.folders[folder]=!state.folders[folder];renderTree();focusItem('[data-folder="'+folder+'"]');}
  if(issue){
    const inStore=button.closest('#store');
    select(Number(issue));
    if(inStore)focusItem('#store [data-issue="'+issue+'"]');
    else if(button.closest('.other'))focusItem('.loc');
    else focusItem('.finding-row[data-issue="'+issue+'"]');
    if(matchMedia('(max-width:599px)').matches) $('.assistant').scrollIntoView({block:'start',behavior:'smooth'});
  }
  if(panel){state.panel=panel;$('#agent-content').scrollTop=0;renderPanel();}
  if(diffId){diff(Number(diffId));focusItem('[data-diff="'+diffId+'"]');}
  if(apply || undo){
    const id=Number(apply || undo);
    if(apply)state.applied.add(id);else state.applied.delete(id);
    if(id===1) state.protection=Boolean(undo);
    state.mode='preview';state.stage='payment';
    $('#modal').close();select(id);focusItem('[data-action="changes"].primary');
    toast(apply?'Demo change applied · preview and code updated':'Demo change undone');
  }
  if(prompt)send(prompt);
});
document.addEventListener('change',(event) => {
  if(event.target.id==='protection'){state.protection=event.target.checked;renderStore();focusItem('#protection');}
});
document.addEventListener('submit',(event) => {
  if(!event.target.matches('.composer'))return;
  event.preventDefault();
  send(new FormData(event.target).get('prompt'));
});
render();
