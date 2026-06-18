// Small reusable helper functions.

function shuffle(a){return[...a].sort(()=>Math.random()-.5);}

function genAiMisses(d){
  const pool=[0,1,2,3,4];
  const n=d===0?(Math.random()<.5?2:3):d===1?(Math.random()<.6?1:2):(Math.random()<.5?0:1);
  return shuffle(pool).slice(0,n);
}

function shuffleQuestionOptions(q){
  const pairs=q.opts.map((opt,i)=>({opt,correct:i===q.ans}));
  const mixed=shuffle(pairs);
  return {
    ...q,
    opts:mixed.map(p=>p.opt),
    ans:mixed.findIndex(p=>p.correct)
  };
}

function pickRoundQuestions(pool,d){
  const key='codeday-last-questions-'+d;
  let last=[];
  try{last=JSON.parse(localStorage.getItem(key)||'[]');}
  catch{last=[];}
  const fresh=shuffle(pool.filter(q=>!last.includes(q.q)));
  const repeats=shuffle(pool.filter(q=>last.includes(q.q)));
  const picked=[...fresh,...repeats].slice(0,5);
  try{localStorage.setItem(key,JSON.stringify(picked.map(q=>q.q)));}
  catch{}
  return picked;
}

function escapeHtml(value){
  return String(value)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#039;');
}
