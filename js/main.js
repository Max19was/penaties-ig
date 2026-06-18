// App startup code.
// Builds the team buttons and draws the first screen.

// Build team grid
(function(){
  const g=document.getElementById('team-grid');
  TEAMS.forEach((t,i)=>{
    const b=document.createElement('button');
    b.className='team-btn'+(i===0?' selected-you':'');
    b.innerHTML=`<span class="flag">${t.flag}</span>${t.name}`;
    b.onclick=()=>selectTeam(i,b);
    g.appendChild(b);
  });
})();

window.onload=()=>{drawStartPitch();};
