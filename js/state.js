// Mutable game state. These values reset during a new match.

let diff=0,youTeamIdx=0,oppTeamIdx=1;
let questions=[],kick=0,youScore=0,aiScore=0;
let youResults=[],aiResults=[],aiMisses=[];
let timerInterval=null,timeLeft=0,totalTime=0,kickStart=0,answered=false;
