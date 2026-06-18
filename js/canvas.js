// All canvas drawing lives here: pitch, keeper, ball, goal, animations.

/* ── CANVAS DRAWING ── */
function drawStripes(ctx,W,H){
  ctx.save();
  ctx.beginPath();ctx.roundRect(0,0,W,H,12);ctx.clip();
  const cols=['#1a4a1f','#1d5321'];
  for(let x=0;x<W;x+=36){ctx.fillStyle=cols[Math.floor(x/36)%2];ctx.fillRect(x,0,36,H);}
  ctx.restore();
}

function drawGoal(ctx,gx,gw,gt,gh){
  ctx.strokeStyle='rgba(255,255,255,.75)';ctx.lineWidth=2;
  ctx.strokeRect(gx,gt,gw,gh);
  // net lines
  ctx.strokeStyle='rgba(255,255,255,.15)';ctx.lineWidth=.8;
  for(let x=gx+20;x<gx+gw;x+=20){ctx.beginPath();ctx.moveTo(x,gt);ctx.lineTo(x,gt+gh);ctx.stroke();}
  for(let y=gt+14;y<gt+gh;y+=14){ctx.beginPath();ctx.moveTo(gx,y);ctx.lineTo(gx+gw,y);ctx.stroke();}
}

function drawKeeper(ctx,x,y,diveAngle,catching,ballX,ballY){
  ctx.save();
  ctx.translate(x,y);
  if(diveAngle!==0)ctx.rotate(diveAngle*Math.PI/180);

  // body (shirt)
  const shirtCol=TEAMS[oppTeamIdx].kit;
  ctx.fillStyle=shirtCol;
  ctx.fillRect(-9,-26,18,22);

  // shorts
  ctx.fillStyle='#222';
  ctx.fillRect(-9,-4,18,10);

  // head
  ctx.fillStyle='#f4c07a';
  ctx.beginPath();ctx.arc(0,-32,9,0,Math.PI*2);ctx.fill();
  // hair
  ctx.fillStyle='#5a3a1a';
  ctx.beginPath();ctx.arc(0,-36,9,Math.PI,0);ctx.fill();
  // eyes
  ctx.fillStyle='#222';
  ctx.beginPath();ctx.arc(-3,-32,1.5,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(3,-32,1.5,0,Math.PI*2);ctx.fill();
  // smile
  ctx.strokeStyle='#333';ctx.lineWidth=1.2;
  ctx.beginPath();ctx.arc(0,-29,3.5,0.2,Math.PI-.2);ctx.stroke();

  // arms
  ctx.strokeStyle=shirtCol;ctx.lineWidth=5;ctx.lineCap='round';
  if(diveAngle===0){
    // standing: arms out slightly
    ctx.beginPath();ctx.moveTo(-9,-20);ctx.lineTo(-20,-16);ctx.stroke();
    ctx.beginPath();ctx.moveTo(9,-20);ctx.lineTo(20,-16);ctx.stroke();
    // gloves
    ctx.fillStyle='#ff6600';
    ctx.beginPath();ctx.arc(-22,-16,5,0,Math.PI*2);ctx.fill();
    ctx.beginPath();ctx.arc(22,-16,5,0,Math.PI*2);ctx.fill();
  }else{
    // diving: both arms extend in dive direction
    const sign=diveAngle>0?1:-1;
    ctx.beginPath();ctx.moveTo(-9,-18);ctx.lineTo(-9+sign*22,-10);ctx.stroke();
    ctx.beginPath();ctx.moveTo(9,-18);ctx.lineTo(9+sign*22,-10);ctx.stroke();
    // gloves at end of arms
    ctx.fillStyle='#ff6600';
    ctx.beginPath();ctx.arc(-9+sign*26,-10,6,0,Math.PI*2);ctx.fill();
    ctx.beginPath();ctx.arc(9+sign*26,-10,6,0,Math.PI*2);ctx.fill();
    if(catching){
      // draw ball in gloves
      ctx.save();ctx.rotate(-diveAngle*Math.PI/180);
      ctx.restore();
    }
  }
  ctx.restore();
}

function drawBall(ctx,x,y,r){
  ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#222';ctx.beginPath();ctx.arc(x,y,r*.38,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#ccc';ctx.lineWidth=.6;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.stroke();
}

function drawStartPitch(){
  const c=document.getElementById('cv-start');if(!c)return;
  const ctx=c.getContext('2d');const W=520,H=150;
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle='#1a4a1f';ctx.beginPath();ctx.roundRect(0,0,W,H,12);ctx.fill();
  drawStripes(ctx,W,H);
  const gx=160,gw=200,gt=12,gh=88;
  drawGoal(ctx,gx,gw,gt,gh);
  drawKeeper(ctx,W/2,gt+gh-14,0,false,0,0);
  drawBall(ctx,W/2,H-18,10);
  // team flags preview
  ctx.font='28px serif';ctx.textAlign='center';
  ctx.fillText(TEAMS[youTeamIdx].flag,90,H/2+10);
  ctx.font='bold 14px "Space Grotesk",sans-serif';
  ctx.fillStyle='rgba(255,255,255,.5)';
  ctx.fillText('VS',W/2,H/2+14);
  ctx.font='28px serif';
  ctx.fillText(TEAMS[oppTeamIdx].flag,W-90,H/2+10);
}

function drawGame(playerScored,aiMissed,timeout){
  const c=document.getElementById('cv-game');if(!c)return;
  const ctx=c.getContext('2d');const W=520,H=168;
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle='#1a4a1f';ctx.beginPath();ctx.roundRect(0,0,W,H,12);ctx.fill();
  drawStripes(ctx,W,H);
  const gx=155,gw=210,gt=12,gh=90;
  drawGoal(ctx,gx,gw,gt,gh);
  const cx=W/2,kcy=gt+gh-15;
  let keeperX=cx,diveAngle=0,catching=false;
  if(playerScored===true){
    // keeper dives wrong way — ball goes other way
    diveAngle=(Math.random()<.5?-32:32);
    keeperX=cx+(diveAngle>0?48:-48);
  }else if(playerScored===false||timeout){
    // keeper catches — dives same direction as ball
    const dir=(Math.random()<.5?-1:1);
    diveAngle=dir*30;
    keeperX=cx+(diveAngle>0?44:-44);
    catching=true;
  }
  drawKeeper(ctx,keeperX,kcy,diveAngle,catching,0,0);

  if(playerScored===true){
    const bx=gx+25+Math.random()*(gw-50);
    const by=gt+8+Math.random()*(gh-20);
    drawBall(ctx,bx,by,8);
    ctx.fillStyle='rgba(168,240,138,.95)';
    ctx.font='bold 15px "Space Grotesk",sans-serif';
    ctx.textAlign='center';ctx.fillText('GOAL! ⚽',bx,by-14);
  }else if(playerScored===false||timeout){
    // ball in keeper's hands
    const gloveSide=diveAngle>0?1:-1;
    const bx=keeperX+(gloveSide*28);
    const by=kcy-10;
    drawBall(ctx,bx,by,8);
    ctx.fillStyle='rgba(255,170,170,.95)';
    ctx.font='bold 14px "Space Grotesk",sans-serif';
    ctx.textAlign='center';ctx.fillText('SAVED',W/2,gt+gh+16);
  }else{
    drawBall(ctx,cx,H-20,10);
  }
  if(playerScored!==null){
    ctx.font='11px "Space Grotesk",sans-serif';
    ctx.textAlign='right';
    ctx.fillStyle=aiMissed?'rgba(255,150,150,.5)':'rgba(200,200,200,.5)';
    ctx.fillText(aiMissed?`${TEAMS[oppTeamIdx].flag} AI missed`:`${TEAMS[oppTeamIdx].flag} AI scored`,W-10,H-6);
  }
}
