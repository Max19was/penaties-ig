// Shared teams, difficulty settings, and Supabase config.
// If you change Supabase projects, update SB_URL and SB_KEY near the bottom.

const TEAMS=[
  {name:"Brazil",flag:"🇧🇷",color:"#009c3b",kit:"#FEDD00"},
  {name:"Argentina",flag:"🇦🇷",color:"#74acdf",kit:"#ffffff"},
  {name:"France",flag:"🇫🇷",color:"#002395",kit:"#ffffff"},
  {name:"England",flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",color:"#ffffff",kit:"#cf081f"},
  {name:"Germany",flag:"🇩🇪",color:"#000000",kit:"#ffffff"},
  {name:"Spain",flag:"🇪🇸",color:"#c60b1e",kit:"#ffc400"},
  {name:"Portugal",flag:"🇵🇹",color:"#006600",kit:"#ff0000"},
  {name:"Japan",flag:"🇯🇵",color:"#bc002d",kit:"#ffffff"},
  {name:"Morocco",flag:"🇲🇦",color:"#c1272d",kit:"#006233"},
  {name:"South Korea",flag:"🇰🇷",color:"#cd2e3a",kit:"#ffffff"},
];

const DIFF_DESCS=["10 seconds per kick · AI misses 2–3 times","7 seconds per kick · AI misses 1–2 times","5 seconds per kick · AI misses 0–1 times"];
const DIFF_NAMES=["EASY","MEDIUM","HARD"];
const DIFF_TIMES=[10,7,5];

