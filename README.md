# Code Day Penalty Shootout

A football-themed coding quiz game with a Supabase leaderboard.

## File guide

- `index.html` — page layout only. Good place to move screens around.
- `css/styles.css` — all design, sizing, colors, and layout.
- `js/config.js` — teams, difficulty names, difficulty timers.
- `js/questions.js` — question bank. Add/edit questions here.
- `js/state.js` — live game variables such as score, timer, and selected teams.
- `js/helpers.js` — shuffle helpers and small utility functions.
- `js/canvas.js` — football pitch, keeper, ball, and goal drawing.
- `js/ui.js` — team buttons, difficulty buttons, and switching screens.
- `js/game.js` — match flow, answers, scoring, timer, and result screen.
- `js/leaderboard.js` — Supabase save/load leaderboard code.
- `js/main.js` — startup code that builds the team grid and draws the first screen.

## Edit questions

Open `js/questions.js` and add questions like this:

```js
{
  q: "Your question?",
  opts: ["Option A", "Option B", "Option C", "Option D"],
  ans: 0,
  jokes: ["Message shown when the player misses."]
}
```

`ans` is the index of the correct option in the original order. The game shuffles the options automatically.

## Deploy with GitHub Pages

Upload everything in this folder to your GitHub repository. Make sure `index.html` is in the root of the repository.
Then go to Settings → Pages → Deploy from branch → main → `/root`.
