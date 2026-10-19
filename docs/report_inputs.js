// report_inputs.js: Inputs tab (formatted form + read-only JSON pane), Run control, Save (payload.json + payload.js), self-test. Classic script; shares report.html globals (D, $, RPT, fmt, init, msg). Needs js/runner.js (RPT.runner). ASCII only.
// Edits are never persisted: every page load starts from payload.json / payload.js (Reset and Save only).
"use strict";
(function(){
var T=RPT.T,F=T.f,P=null,P0=null,ctl=null,dirH=null,meta0=null,callShown=false,callT=0,ranSig=null;
var clone=function(o){return JSON.parse(JSON.stringify(o))};
var esc2=function(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')};
function get(o,p){var k=p.split('.');for(var i=0;i<k.length;i++){if(o==null)return undefined;o=o[k[i]]}return o}
function set(o,p,v){var k=p.split('.');for(var i=0;i<k.length-1;i++){if(o[k[i]]==null)o[k[i]]={};o=o[k[i]]}o[k[k.length-1]]=v;return true}
function same(a,b){return JSON.stringify(a)===JSON.stringify(b)}
function diffN(a,b){if(Array.isArray(a)&&Array.isArray(b)&&a.concat(b).every(function(x){return typeof x==='number'}))return same(a,b)?0:1;if(a&&b&&typeof a==='object'&&typeof b==='object'){var n=0,ks={};Object.keys(a).concat(Object.keys(b)).forEach(function(k){ks[k]=1});for(var k in ks)n+=diffN(a[k],b[k]);return n}return same(a,b)?0:1}
function info(t){$('iInfo').textContent=t||''}

// ---- display formats: d = $1,234,567  p = 12.5% (payload holds the fraction)  y = plain integer  r = claim-age range (from/to boxes <-> full list)
function show(k,v){
 if(typeof v==='number'){
  if(k==='p')return String(Number((v*100).toFixed(4)))+'%';
  if(k==='y')return String(v);
  return '$'+v.toLocaleString('en-US',{maximumFractionDigits:2})}
 return v==null?'':String(v)}
function parse(k,t){   // -> number | NaN
 t=t.trim();
 var re=k==='p'?/^[-+]?[\d,]*\.?\d*%?$/:k==='y'?/^\+?[\d,]*$/:/^[-+]?\$?[-+]?[\d,]*\.?\d*$/;   // no inner spaces, hex, wrong sign
 if(!re.test(t)||!/\d/.test(t))return NaN;
 var x=Number(t.replace(/[$,%]/g,''));
 if(!isFinite(x)||(k==='y'&&!Number.isInteger(x)))return NaN;
 return k==='p'?Number((x/100).toPrecision(12)):x}
function inRange(p,x){if(/_birth_month$/.test(p))return x>=1&&x<=12;if(/\.s[12]_birth$/.test(p))return x>=1900&&x<=2100;return true}
var SS_LO=62,SS_HI=70;
function ssLoHi(a){return Array.isArray(a)&&a.length?[Math.min.apply(0,a),Math.max.apply(0,a)]:['','']}
function ssList(lo,hi){var o=[];for(var a=lo;a<=hi;a++)o.push(a);return o}

// ---- form spec: [group key, rows]; row = [row label key | null, [[label key, dotted payload path, kind, show-when-missing]..]]; 'spend' = the 4 spend-band rows
var OP='optimization.',SSM=OP+'social_security_joint_mesh.';
function pf(n){return [['by','balances.s'+n+'_birth','y'],['bm','balances.s'+n+'_birth_month','y',1],['la','balances.s'+n+'_mort','y']]}
var GROUPS=[
 ['start',[[null,[['yr','scope.year','y']]]]],
 ['pers',[['p1',pf(1)],['p2',pf(2)]]],
 ['ss',[['p1',[['pia','social_security.s1_pia','d'],['claim',OP+'ss1_options','r'],['a1lo',SSM+'s1_search_bounds.min_age','y'],['a1hi',SSM+'s1_search_bounds.max_age','y']]],
        ['p2',[['pia','social_security.s2_pia','d'],['claim',OP+'ss2_options','r'],['a2lo',SSM+'s2_search_bounds.min_age','y'],['a2hi',SSM+'s2_search_bounds.max_age','y']]]]],
 ['bal',[[null,[['401k','balances.401k','d'],['fido','balances.fido','d'],['roth','balances.roth','d'],['nua','balances.nua','d'],['nuab','waterfall.nua_basis_ratio','p']]]]],
 ['spend','spend'],
 ['rate',[[null,[['growth','waterfall.growth','p'],['infl','waterfall.inflation','p'],['heir',OP+'heir_tax_rate','p']]]]]];
var NSPEND=4;
function fobj(f){return{l:F[f[0]]||f[0],p:f[1],k:f[2],o:f[3]}}
function visible(f){return f.o||get(P,f.p)!==undefined}
function bandsOf(){var b=get(P,'spend_bands');return Array.isArray(b)?b:[]}
function fieldHtml(f){
 if(f.k==='r'){var lh=ssLoHi(get(P,f.p));
  return '<label class="fld rng" data-p="'+f.p+'"><span class="rin">'+esc2(f.l)+': '+esc2(F.from)+' <input type="text" inputmode="numeric" data-r="lo" data-p="'+f.p+'" value="'+esc2(lh[0])+'"> '+esc2(F.to)+' <input type="text" inputmode="numeric" data-r="hi" data-p="'+f.p+'" value="'+esc2(lh[1])+'"></span></label>'}
 return '<label class="fld" data-p="'+f.p+'"><span>'+esc2(f.l)+'</span><input type="text" inputmode="decimal" data-p="'+f.p+'" data-k="'+f.k+'" value="'+esc2(show(f.k,get(P,f.p)))+'"></label>'}
function spendHtml(){
 var b=bandsOf(),n=Math.max(NSPEND,b.length),h='<div class="sbbox" style="display:flex;gap:8px;align-items:flex-start"><div style="flex:1">';
 for(var i=0;i<n;i++){var x=b[i]||{};
  h+='<div class="prow" data-sbrow="'+i+'"><b>'+esc2(F.spend+' '+(i+1))+'</b>'
   +'<label class="fld"><span>'+esc2(F.amt)+'</span><input type="text" inputmode="decimal" data-sb="amount" data-k="d" value="'+esc2(show('d',x.amount))+'"></label>'
   +'<label class="fld"><span>'+esc2(F.sAge)+'<i class="sbw" data-sbw="'+i+'" hidden>&#9888;</i></span><input type="text" inputmode="numeric" data-sb="start_age" data-k="y" value="'+esc2(show('y',x.start_age))+'"></label>'
   +'<label class="fld" title="'+esc2(F.olderAge)+'"><span>'+esc2(F.eAge)+'</span><input type="text" inputmode="numeric" data-sb="end_age" data-k="y" value="'+esc2(show('y',x.end_age))+'"></label></div>'}
 return h+'</div></div>'}
function renderForm(){
 var box=$('form');
 if(!P){box.innerHTML='<div class="mut">'+esc2(T.noPayload)+'</div>';printList();return}
 box.innerHTML=GROUPS.map(function(g){
  var h='<div class="grp">'+(g[0]==='start'?'':'<h3>'+esc2(T.g[g[0]]||g[0])+'</h3>');
  if(g[1]==='spend')return h+spendHtml()+'</div>';
  var rows=g[1].map(function(r){
   var fs=r[1].map(fobj).filter(visible);if(!fs.length)return '';
   var body=fs.map(fieldHtml).join('');
   return r[0]?'<div class="prow"><b>'+esc2(F[r[0]])+'</b>'+body+'</div>':'<div class="flds">'+body+'</div>'}).join('');
  return rows?h+rows+'</div>':''}).join('');
 box.querySelectorAll('input[data-k]:not([data-sb])').forEach(function(i){i.oninput=function(){fromForm(i)};i.onchange=function(){var v=get(P,i.dataset.p);i.value=show(i.dataset.k,v);i.classList.remove('bad')}});
 box.querySelectorAll('input[data-r]').forEach(function(i){i.oninput=function(){fromRange(i)};i.onchange=function(){syncRange(i.dataset.p)}});
 box.querySelectorAll('input[data-sb]').forEach(function(i){i.oninput=function(){fromBands()}});
 bandWarn();marks()}
function jsonPane(){
 var t=JSON.stringify(P,null,2),w=0;t.split('\n').forEach(function(l){if(l.length>w)w=l.length});
 var j=$('json');j.value=t;j.style.width='calc('+(w+1)+'ch + 40px)'}
function hideCall(){clearTimeout(callT);$('rcall').hidden=true}
function callOut(){callShown=true;$('rcall').hidden=false}   // 'Click to refresh' stays until Run is clicked; shown again on the next edit after a Run
function marks(){
 document.querySelectorAll('#form .fld[data-p]').forEach(function(l){l.classList.toggle('chg',!same(get(P,l.dataset.p),get(P0,l.dataset.p)))});
 var sbChg=!same(bandsOf(),get(P0,'spend_bands')||[]);
 document.querySelectorAll('#form [data-sbrow] .fld').forEach(function(l){l.classList.toggle('chg',sbChg)});
 var n=P&&P0?diffN(P0,P):0;info(n?n+' '+T.changed:'');$('iReset').disabled=!n;
 if(n&&sig()!==ranSig)callOut();else hideCall();
 printList()}
function fromForm(i){
 var x=parse(i.dataset.k,i.value);
 if(i.value.trim()===''&&get(P,i.dataset.p)===undefined){i.classList.remove('bad');return}
 if(typeof x==='number'&&(!isFinite(x)||!inRange(i.dataset.p,x))){i.classList.add('bad');return}
 i.classList.remove('bad');set(P,i.dataset.p,x);jsonPane();marks()}
// SS claim ages: two integer boxes (62-70, from<=to) saved back as the FULL list from..to step 1
function rangeIns(p){return Array.prototype.slice.call(document.querySelectorAll('#form input[data-r]')).filter(function(i){return i.dataset.p===p})}
function fromRange(i){
 var ins=rangeIns(i.dataset.p),lo=ins.filter(function(x){return x.dataset.r==='lo'})[0],hi=ins.filter(function(x){return x.dataset.r==='hi'})[0];
 var a=/^\d+$/.test(lo.value.trim())?+lo.value:NaN,b=/^\d+$/.test(hi.value.trim())?+hi.value:NaN;
 var okA=a>=SS_LO&&a<=SS_HI,okB=b>=SS_LO&&b<=SS_HI,ord=okA&&okB&&a<=b;
 lo.classList.toggle('bad',!okA||(okB&&!ord));hi.classList.toggle('bad',!okB||(okA&&!ord));
 if(!ord)return;
 set(P,i.dataset.p,ssList(a,b));jsonPane();marks()}
function syncRange(p){var lh=ssLoHi(get(P,p));rangeIns(p).forEach(function(i){i.value=lh[i.dataset.r==='lo'?0:1];i.classList.remove('bad')})}
// Spend bands: payload.spend_bands = [{amount,start_age,end_age}], empty rows omitted; a gap/overlap only warns (never blocks Run)
function readBands(){
 var out=[],ok=true;
 document.querySelectorAll('#form [data-sbrow]').forEach(function(r){
  var v=[],empty=0,bad=false;
  r.querySelectorAll('input').forEach(function(i){
   var t=i.value.trim();i.classList.remove('bad');
   if(!t){empty++;v.push(null);return}
   var x=parse(i.dataset.k,t);if(!isFinite(x)){i.classList.add('bad');bad=true;v.push(null)}else v.push(x)});
  if(empty===3)return;
  if(!bad&&!empty&&v[1]>v[2]){bad=true;r.querySelectorAll('input[data-sb=start_age],input[data-sb=end_age]').forEach(function(i){i.classList.add('bad')})}
  if(bad||empty){ok=false;return}
  out.push({amount:v[0],start_age:v[1],end_age:v[2]})});
 return ok?out:null}
function rng(a,b){return a===b?String(a):a+'-'+b}
function bandMsgs(b){   // -> [[band index, message]..]; the band whose Start age opens the gap/overlap carries the message
 var s=b.map(function(x,i){return{x:x,i:i}}).sort(function(p,q){return p.x.start_age-q.x.start_age}),m=[],mx=null;
 s.forEach(function(e){var x=e.x;
  if(mx!==null){
   if(x.start_age>mx+1)m.push([e.i,RPT.s(F.gap,rng(mx+1,x.start_age-1))]);
   else if(x.start_age<=mx)m.push([e.i,RPT.s(F.ovl,rng(x.start_age,Math.min(mx,x.end_age)))])}
  mx=mx===null?x.end_age:Math.max(mx,x.end_age)});
 return m}
function bandWarn(){
 var m=bandMsgs(bandsOf());
 document.querySelectorAll('#form .sbw').forEach(function(w){var t=m.filter(function(e){return String(e[0])===w.dataset.sbw}).map(function(e){return e[1]}).join('; ');w.hidden=!t;w.title=t})}
function fromBands(){
 var out=readBands();if(!out)return;
 if(!same(bandsOf(),out))set(P,'spend_bands',out);
 bandWarn();jsonPane();marks()}
// Inputs print: group headings with label/value rows (no form controls); hidden on screen, shown by the print stylesheet
function fieldVal(f){if(f.k==='r'){var lh=ssLoHi(get(P,f.p));return lh[0]===''?'':lh[0]+' to '+lh[1]}return show(f.k,get(P,f.p))}
function printList(){
 var el=$('inprint');if(!el)return;if(!P){el.innerHTML='';return}
 el.innerHTML=GROUPS.map(function(g){
  var it=[];
  if(g[1]==='spend')bandsOf().forEach(function(b,i){it.push([F.spend+' '+(i+1),show('d',b.amount)+', ages '+b.start_age+' to '+b.end_age])});
  else g[1].forEach(function(r){r[1].map(fobj).filter(visible).forEach(function(f){it.push([(r[0]?F[r[0]]+' ':'')+f.l,fieldVal(f)])})});
  return it.length?'<div class="ig"><h3>'+esc2(T.g[g[0]]||g[0])+'</h3>'+it.map(function(x){return '<div class="ir"><span>'+esc2(x[0])+'</span><b>'+esc2(x[1])+'</b></div>'}).join('')+'</div>':''}).join('')}
$('iReset').onclick=function(){if(!P0)return;P=clone(P0);jsonPane();renderForm();RPT.emit('payload');run('full')};   // Reset also re-runs (full) so the results match the restored inputs

// ---- payload source (payload.js global first, else report meta); nothing is restored from earlier sessions
RPT.setPayload=function(o){
 P0=clone(o);P=clone(P0);ranSig=sig();   // loaded results match the loaded payload: a spend_plan-only edit never calls for a re-run
 jsonPane();renderForm();$('rRun').disabled=$('iSave').disabled=false;RPT.emit('payload')};
RPT.pay=function(){return P};RPT.payEdited=function(){jsonPane();marks()};   // Spend tab (report_spend.js) edits P.spend_plan in place
function sig(){var c=clone(P);delete c.spend_plan;return JSON.stringify(c)}     // spend_plan is a planning view: it never makes the results stale
function eng(){var c=clone(P);delete c.spend_plan;return c}
RPT.on('loaded',function(){
 var m=D&&D.meta;meta0=m&&(m.payload||m.golden)?{payload:m.payload||null,golden:m.golden||null}:null;
 var pl=window.RETIRE_PAYLOAD||(m&&m.payload);
 if(pl)RPT.setPayload(pl);else if(!P)renderForm();
 var g=!!(meta0&&meta0.golden&&meta0.payload);$('rTest').hidden=!g;if(!g)$('pill').hidden=true;
 $('rRun').title=RPT.fullTime;
 if(RPT.runner.isStub())info((P?$('iInfo').textContent+' ':'')+T.stub)});

// ---- run
function busy(on){['rRun','rTest'].forEach(function(i){$(i).disabled=on});$('rCancel').disabled=!on;$('prog').hidden=!on;if(on)$('prog').value=0}
function prog(d,t){$('prog').value=t?d/t:0}
function apply(res){
 if(!res||!res.summary)throw new Error(T.badRes);
 var old=D&&D.meta||{};res.meta=res.meta||{};if(!res.meta.payload&&old.payload)res.meta.payload=old.payload;if(!res.meta.golden&&old.golden)res.meta.golden=old.golden;
 D=res;RPT.sample=false;RPT.ran=true;$('sample').hidden=true;init()}
function go(mode,job){
 if(ctl)return;ctl=new AbortController();busy(true);
 return job(ctl.signal).catch(function(e){if(e&&e.name==='AbortError')info(T.cancelled);else{console.error('run',e);info(T.fail+': '+(e&&e.message||e))}})
  .then(function(){ctl=null;busy(false);$('prog').hidden=true})}
function run(mode){
 if(!P){info(T.noPayload);return}
 ranSig=sig();hideCall();info(T.running);
 go(mode,function(sg){return RPT.runner.run(eng(),{mode:mode,signal:sg,onProgress:prog}).then(function(r){apply(r);marks()})})}
$('rRun').onclick=function(){run('full')};
$('rCancel').onclick=function(){if(ctl)ctl.abort()};
$('rTest').onclick=function(){
 var pill=$('pill');pill.hidden=true;
 go('quick',function(sig){return RPT.runner.run(clone(meta0.payload),{mode:'quick',golden:true,signal:sig,onProgress:prog}).then(function(r){
  var b=RPT.runner.bestOf(r),g=meta0.golden.best||meta0.golden,bad=[],ks=['Estate','HeirTax','NetEstate'];
  if(!b)bad.push('no rows');else ks.forEach(function(k){if(typeof g[k]!=='number'||Math.abs(b[k]-g[k])>1)bad.push(k+' '+(b[k]-g[k]).toFixed(2))});
  pill.hidden=false;pill.className='pill '+(bad.length?'bad':'ok');pill.textContent=bad.length?T.fail2:T.pass;pill.title=bad.length?bad.join(', '):ks.map(function(k){return k+' '+full(b[k])}).join(' / ')})})};

// ---- save: folder picked once (handle kept in IndexedDB, reused silently), payload.json + payload.js identical JSON; fallback = two downloads
// slim Expenses-only page (window.RETIRE_SLIM, set by the slim html transform): writes spend_plan.json + spend_plan.js and keeps its OWN folder handle store (retire_dirs_slim), so it never touches the full report's payload files or saved folder
var SLIM=!!window.RETIRE_SLIM,PN=SLIM?'spend_plan':'payload',IDB=SLIM?'retire_dirs_slim':'retire_dirs';
var FS='showDirectoryPicker' in window;
// the chosen folder handle is kept in IndexedDB (IDB) so later visits reuse it silently (permission re-asked once per browser session)
function idbOpen(){return new Promise(function(res,rej){var q=indexedDB.open(IDB,1);q.onupgradeneeded=function(){q.result.createObjectStore('h')};q.onsuccess=function(){res(q.result)};q.onerror=function(){rej(q.error)}})}
async function hGet(){try{var d=await idbOpen();return await new Promise(function(res,rej){var r=d.transaction('h').objectStore('h').get('root');r.onsuccess=function(){res(r.result||null)};r.onerror=function(){rej(r.error)}})}catch(e){console.warn('report_inputs folder handle load: '+(e&&e.message));return null}}
async function hPut(h){try{var d=await idbOpen();await new Promise(function(res,rej){var t=d.transaction('h','readwrite');t.objectStore('h').put(h,'root');t.oncomplete=res;t.onerror=function(){rej(t.error)}})}catch(e){console.warn('report_inputs folder handle save: '+(e&&e.message))}}
async function getDir(){
 if(!FS)return null;
 var o={mode:'readwrite'},lost=null;
 if(!dirH)dirH=await hGet();
 if(dirH){try{if(await dirH.queryPermission(o)==='granted'||await dirH.requestPermission(o)==='granted')return dirH}catch(e){console.warn('report_inputs folder permission: '+(e&&e.message))}lost=dirH;dirH=null}
 var pd=RPT.pageDir?RPT.pageDir():'',pm=T.chooseDir+(pd?' '+pd:'');info(pm);if($('spInfo'))$('spInfo').textContent=pm;   // name the folder to pick before the dialog opens
 var op={id:'retire-root',mode:'readwrite',startIn:lost||'downloads'},h;
 try{h=await showDirectoryPicker(op)}catch(e){if(e&&e.name==='TypeError'){delete op.startIn;h=await showDirectoryPicker(op)}else throw e}   // startIn unsupported -> retry without it
 dirH=h;await hPut(h);return dirH}
async function wr(dir,name,text){var f=await dir.getFileHandle(name,{create:true}),w=await f.createWritable();await w.write(text);await w.close()}
function dl(name,text){var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type:'text/plain'}));a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(a.href)},2000)}
$('iSave').onclick=async function(){
 if(!P)return;var js=JSON.stringify(P,null,2),tj=js+'\n',tp='window.RETIRE_PAYLOAD='+js+';\n',dir=null;
 var picked=false;   // showSaveFilePicker (when the browser has it): the user names the JSON file; cancel = silent; any other failure falls back to the folder / download path below
 if('showSaveFilePicker' in window){try{
  var fh=await showSaveFilePicker({suggestedName:PN+'.json',startIn:'documents',types:[{description:'JSON',accept:{'application/json':['.json']}}]}),fw=await fh.createWritable();await fw.write(tj);await fw.close();picked=true;info(T.saved+': '+(fh.name||PN+'.json'))}
  catch(e){if(e&&e.name==='AbortError')return;console.error('save picker',e)}}
 try{dir=await getDir()}catch(e){if(e.name==='AbortError'){if(!picked)info(T.saveCancel);return}console.error('folder',e)}
 if(dir){try{
  var hasR=true;try{await dir.getFileHandle('report.html')}catch(e){if(e&&e.name==='NotFoundError')hasR=false;else throw e}
  if(!picked)await wr(dir,PN+'.json',tj);
  if(hasR){await wr(dir,PN+'.js',tp);info(T.saved+': '+dir.name)}else info(PN+'.json saved (no report.html here: '+PN+'.js skipped)');
  return}catch(e){console.error('save',e)}}
 if(!picked)dl(PN+'.json',tj);dl(PN+'.js',tp);info(T.dl+(FS?'':' ('+T.noFS+')'))};
$('rRun').disabled=$('iSave').disabled=true;$('rCancel').disabled=true;$('prog').hidden=true;
})();
