// Main game flow: starting a round, timers, answers, score, and end screen.

function startGame(){
  const pool=QUESTIONS[['easy','medium','hard'][diff]];
  questions=pickRoundQuestions(pool,diff).map(shuffleQuestionOptions);
  kick=0;youScore=0;aiScore=0;
  youResults=[];aiResults=[];
  aiMisses=genAiMisses(diff);
  totalTime=0;
  document.getElementById('game-diff-badge').textContent=DIFF_NAMES[diff];
  document.getElementById('you-flag').textContent=TEAMS[youTeamIdx].flag;
  document.getElementById('opp-flag').textContent=TEAMS[oppTeamIdx].flag;
  showScreen('game');
  renderKick();
}

function renderKick(){
  answered=false;
  document.getElementById('kick-label').textContent=`Kick ${kick+1} of 5`;
  document.getElementById('score-you').textContent=youScore;
  document.getElementById('score-ai').textContent=aiScore;
  renderDots();
  const q=questions[kick];
  document.getElementById('q-text').textContent=q.q;
  const opts=document.getElementById('options');
  opts.innerHTML='';
  q.opts.forEach((o,i)=>{
    const b=document.createElement('button');
    b.className='opt-btn';b.textContent=o;
    b.onclick=()=>doAnswer(i);
    opts.appendChild(b);
  });
  document.getElementById('feedback').textContent='';
  document.getElementById('feedback').className='feedback-box';
  document.getElementById('next-btn').style.display='none';
  startTimer();
  drawGame(null,null,false);
}

function startTimer(){
  clearInterval(timerInterval);
  timeLeft=DIFF_TIMES[diff];kickStart=Date.now();
  const td=document.getElementById('timer-display');
  td.textContent=timeLeft;td.className='timer-display';
  timerInterval=setInterval(()=>{
    timeLeft--;
    td.textContent=timeLeft;
    if(timeLeft<=3)td.className='timer-display urgent';
    if(timeLeft<=0){clearInterval(timerInterval);timeUp();}
  },1000);
}

function timeUp(){
  if(answered)return;
  answered=true;
  totalTime+=DIFF_TIMES[diff];
  youResults.push(false);
  const aiMissed=aiMisses.includes(kick);
  if(!aiMissed){aiScore++;aiResults.push(true);}else{aiResults.push(false);}
  renderDots();
  const q=questions[kick];
  const joke=q.jokes[Math.floor(Math.random()*q.jokes.length)];
  const fb=document.getElementById('feedback');
  fb.innerHTML=`<b>⏱ Time's up!</b> ${joke}`;
  fb.className='feedback-box miss-fb';
  document.getElementById('next-btn').style.display='block';
  document.getElementById('next-btn').textContent=kick<4?'Next kick →':'See result →';
  drawGame(false,aiMissed,true);
}

function doAnswer(i){
  if(answered)return;
  answered=true;
  clearInterval(timerInterval);
  const elapsed=(Date.now()-kickStart)/1000;
  totalTime+=Math.min(elapsed,DIFF_TIMES[diff]);
  const q=questions[kick];
  const correct=i===q.ans;
  document.querySelectorAll('.opt-btn').forEach((b,j)=>{
    b.disabled=true;
    if(j===q.ans)b.classList.add('correct');
    else if(j===i&&!correct)b.classList.add('wrong');
  });
  const fb=document.getElementById('feedback');
  const aiMissed=aiMisses.includes(kick);
  if(correct){
    youScore++;youResults.push(true);
    fb.innerHTML='⚽ <b>Goal!</b> Keeper went the wrong way — no chance.';
    fb.className='feedback-box goal';
  }else{
    youResults.push(false);
    const joke=q.jokes[Math.floor(Math.random()*q.jokes.length)];
    fb.innerHTML=joke;
    fb.className='feedback-box miss-fb';
  }
  if(!aiMissed){aiScore++;aiResults.push(true);}else{aiResults.push(false);}
  renderDots();
  document.getElementById('score-you').textContent=youScore;
  document.getElementById('score-ai').textContent=aiScore;
  document.getElementById('next-btn').style.display='block';
  document.getElementById('next-btn').textContent=kick<4?'Next kick →':'See result →';
  drawGame(correct,aiMissed,false);
}

function nextKick(){kick++;if(kick>=5)showEnd();else renderKick();}

function renderDots(){
  ['you','ai'].forEach(who=>{
    const c=document.getElementById('dots-'+who);c.innerHTML='';
    const r=who==='you'?youResults:aiResults;
    for(let i=0;i<5;i++){
      const d=document.createElement('div');
      d.className='dot'+(r[i]===true?' score':r[i]===false?' miss':'');
      d.textContent=r[i]===true?'⚽':r[i]===false?'✕':'';
      c.appendChild(d);
    }
  });
}

function showEnd(){
  showScreen('end');
  const won=youScore>aiScore,draw=youScore===aiScore;
  document.getElementById('matchup-display').innerHTML=
    `${TEAMS[youTeamIdx].flag} <span style="font-size:14px;color:var(--gray);font-family:'Space Mono',monospace">VS</span> ${TEAMS[oppTeamIdx].flag}`;
  document.getElementById('end-result').textContent=`${youScore} – ${aiScore}`;
  document.getElementById('time-taken').textContent=`Completed in ${Math.round(totalTime)}s on ${DIFF_NAMES[diff].toLowerCase()}`;
  if(won){
    document.getElementById('end-title').textContent="You're built for this.";
    document.getElementById('end-msg').textContent=`${youScore}/5 correct. You clearly know your stuff. ${TEAMS[youTeamIdx].flag} takes the shootout. Bring that energy to Code Day.`;
    document.getElementById('cd-sub').textContent="We already know you'll fit right in. Come make something cool.";
  }else if(draw){
    document.getElementById('end-title').textContent="A draw. Respectable.";
    document.getElementById('end-msg').textContent=`${youScore} all. ${TEAMS[youTeamIdx].flag} vs ${TEAMS[oppTeamIdx].flag} couldn't be settled today. Come to Code Day and sort it out properly.`;
    document.getElementById('cd-sub').textContent="Half your misses have workshops waiting for them.";
  }else{
    document.getElementById('end-title').textContent="No worries. That's what Code Day is for.";
    document.getElementById('end-msg').textContent=`${youScore}/5. ${TEAMS[oppTeamIdx].flag} edges it, but every question you missed has a workshop with your name on it. That's literally the point.`;
    document.getElementById('cd-sub').textContent="Come for the workshops. Stay for the chaos. Leave with new skills.";
  }
  renderLeaderboard();
}
