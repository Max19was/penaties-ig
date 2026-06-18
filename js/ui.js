// UI controls: team selection, difficulty selection, screen switching.

function selectTeam(i,btn){
  const btns=document.querySelectorAll('.team-btn');
  if(youTeamIdx===i){
    // deselect you — move you to opp
    youTeamIdx=oppTeamIdx; oppTeamIdx=i;
  } else if(oppTeamIdx===i){
    oppTeamIdx=youTeamIdx; youTeamIdx=i;
  } else {
    // first click = you, if you already set shift opp
    if(btn.classList.contains('selected-you')||btn.classList.contains('selected-opp')) return;
    youTeamIdx=i;
  }
  btns.forEach((b,j)=>{
    b.classList.remove('selected-you','selected-opp');
    if(j===youTeamIdx) b.classList.add('selected-you');
    if(j===oppTeamIdx) b.classList.add('selected-opp');
  });
  drawStartPitch();
}

function setDiff(d){
  diff=d;
  document.querySelectorAll('.diff-pill').forEach((p,i)=>p.classList.toggle('active',i===d));
  document.getElementById('diff-desc').textContent=DIFF_DESCS[d];
}

function showScreen(name){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+name).classList.add('active');
  if(name==='start'||name==='leaderboard')setTimeout(()=>drawPitchPreview(name),30);
}

function drawPitchPreview(name){
  const oldStart=document.getElementById('cv-start');
  const publicLb=document.getElementById('cv-leaderboard');
  const canvas=name==='leaderboard'?publicLb:oldStart;
  if(!canvas)return;
  const originalId=canvas.id;
  if(originalId==='cv-start'){drawStartPitch();return;}
  const ctx=canvas.getContext('2d');const W=520,H=150;
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle='#1a4a1f';ctx.beginPath();ctx.roundRect(0,0,W,H,12);ctx.fill();
  drawStripes(ctx,W,H);
  const gx=160,gw=200,gt=12,gh=88;
  drawGoal(ctx,gx,gw,gt,gh);
  drawKeeper(ctx,W/2,gt+gh-14,0,false,0,0);
  drawBall(ctx,W/2,H-18,10);
  ctx.font='bold 44px "Space Grotesk",sans-serif';
  ctx.textAlign='center';
  ctx.fillStyle='rgba(245,197,24,.95)';
  ctx.fillText('🏆',W/2,H/2+16);
}
function resetGame(){showScreen('start');}
