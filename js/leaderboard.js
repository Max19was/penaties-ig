// Supabase leaderboard read/write code.
// If leaderboard breaks, check the browser console and Supabase RLS policies.

const SB_URL='https://ybcbjrelqskyjjrwfzzy.supabase.co';
const SB_KEY='sb_publishable_kZ8lSyuHtRUq3stoPO3zlQ_-1yX_r6s';

async function sbFetch(path,opts={}){
  const {headers:customHeaders={},...fetchOptions}=opts;
  const res=await fetch(SB_URL+path,{
    ...fetchOptions,
    headers:{
      'apikey':SB_KEY,
      'Authorization':'Bearer '+SB_KEY,
      'Content-Type':'application/json',
      ...customHeaders
    }
  });

  const responseText=await res.text();
  let data=null;
  if(responseText){
    try{data=JSON.parse(responseText);}
    catch{data=responseText;}
  }

  if(!res.ok){
    const msg=(data&&data.message)||(data&&data.error)||data||`Request failed with status ${res.status}`;
    throw new Error(msg);
  }

  return data;
}

async function saveScore(){
  const name=document.getElementById('name-input').value.trim();if(!name)return;
  const btn=document.querySelector('.save-btn');
  btn.textContent='Saving...';btn.disabled=true;
  try{
    const safeScore=Math.max(0,Math.min(5,Number(youScore)));
    const safeTime=Math.max(0,Math.round(Number(totalTime)||0));
    await sbFetch('/rest/v1/leaderboard',{
      method:'POST',
      headers:{'Prefer':'return=minimal'},
      body:JSON.stringify({
        name:name.slice(0,20),
        score:safeScore,
        time:safeTime,
        diff:DIFF_NAMES[diff],
        flag:TEAMS[youTeamIdx].flag
      })
    });
    document.getElementById('name-prompt').style.display='none';
    await renderLeaderboard('lb-list');
  }catch(e){
    btn.textContent='Save';btn.disabled=false;
    alert('Could not save score. Supabase said: '+e.message);
  }
}

async function renderLeaderboard(targetId='lb-list'){
  const list=document.getElementById(targetId);
  if(!list)return;
  list.innerHTML='<p class="lb-empty">Loading...</p>';
  try{
    const board=await sbFetch('/rest/v1/leaderboard?select=*&order=score.desc,time.asc&limit=8');
    if(!Array.isArray(board)||!board.length){list.innerHTML='<p class="lb-empty">No scores yet — be the first!</p>';return;}
    list.innerHTML=board.map((e,i)=>`
      <div class="lb-row">
        <span class="lb-rank">#${i+1}</span>
        <span class="lb-flag">${e.flag||'⚽'}</span>
        <span class="lb-name">${escapeHtml(e.name||'Player')}</span>
        <span class="lb-score"><span class="hi">${Number(e.score)||0}/5</span> · ${Number(e.time)||0}s · ${escapeHtml(e.diff||'')}</span>
      </div>`).join('');
  }catch(e){
    list.innerHTML=`<p class="lb-empty">Could not load scores.</p><p class="error-detail">${escapeHtml(e.message||String(e))}</p>`;
  }
}
function openLeaderboard(){
  showScreen('leaderboard');
  renderLeaderboard('lb-list-public');
}
