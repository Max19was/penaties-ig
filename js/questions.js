// Question bank.
// Add new questions here. Format: q = question, opts = options, ans = correct option index, jokes = miss messages.
// The game shuffles options automatically, so ans only needs to match this original order.

const QUESTIONS={
  "easy": [
    {
      "q": "What does HTML stand for?",
      "opts": [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Hyperlink and Text Markup",
        "HyperText Making Language"
      ],
      "ans": 0,
      "jokes": [
        "HTML tried to head the ball, but forgot the closing tag."
      ]
    },
    {
      "q": "Which tag is used for the largest heading in HTML?",
      "opts": [
        "<heading>",
        "<h1>",
        "<head>",
        "<title>"
      ],
      "ans": 1,
      "jokes": [
        "The browser looked for a heading and found vibes instead."
      ]
    },
    {
      "q": "Which attribute gives an image its source file?",
      "opts": [
        "href",
        "src",
        "alt",
        "link"
      ],
      "ans": 1,
      "jokes": [
        "The image showed up to the match without a source."
      ]
    },
    {
      "q": "What symbol starts a comment in Python?",
      "opts": [
        "//",
        "/*",
        "#",
        "--"
      ],
      "ans": 2,
      "jokes": [
        "Python saw that comment and slithered away."
      ]
    },
    {
      "q": "Which of these is NOT a programming language?",
      "opts": [
        "Python",
        "Java",
        "Photoshop",
        "Rust"
      ],
      "ans": 2,
      "jokes": [
        "Photoshop has layers. This answer had none."
      ]
    },
    {
      "q": "What does a loop do in code?",
      "opts": [
        "Deletes files",
        "Repeats a block of code",
        "Connects to the internet",
        "Makes the screen spin"
      ],
      "ans": 1,
      "jokes": [
        "That loop missed the target and ran around the stadium."
      ]
    },
    {
      "q": "What is a bug in programming?",
      "opts": [
        "A fast shortcut",
        "An error in the code",
        "A type of database",
        "A secret feature"
      ],
      "ans": 1,
      "jokes": [
        "Calling bugs features is a classic developer survival tactic."
      ]
    },
    {
      "q": "Which language styles websites?",
      "opts": [
        "Python",
        "CSS",
        "Java",
        "SQL"
      ],
      "ans": 1,
      "jokes": [
        "The page had no CSS and showed up in default kit."
      ]
    },
    {
      "q": "What does open source usually mean?",
      "opts": [
        "Code people can view and contribute to",
        "Software that only runs online",
        "A paid-only app",
        "A locked private project"
      ],
      "ans": 0,
      "jokes": [
        "That answer was more closed source than open source."
      ]
    },
    {
      "q": "What is a variable in programming?",
      "opts": [
        "A named container for data",
        "A number that never changes",
        "A website background",
        "A broken keyboard key"
      ],
      "ans": 0,
      "jokes": [
        "The variable changed teams mid-penalty."
      ]
    },
    {
      "q": "Which file usually contains the main HTML page of a simple website?",
      "opts": [
        "style.css",
        "index.html",
        "script.png",
        "database.exe"
      ],
      "ans": 1,
      "jokes": [
        "The homepage was hiding in the wrong folder."
      ]
    },
    {
      "q": "Which JavaScript keyword declares a value that can change?",
      "opts": [
        "const",
        "let",
        "fixed",
        "static"
      ],
      "ans": 1,
      "jokes": [
        "That value wanted to change, but you locked it on the bench."
      ]
    },
    {
      "q": "Which operator checks strict equality in JavaScript?",
      "opts": [
        "=",
        "==",
        "===",
        "!=!"
      ],
      "ans": 2,
      "jokes": [
        "JavaScript equality is football VAR with extra drama."
      ]
    },
    {
      "q": "What does CSS stand for?",
      "opts": [
        "Cascading Style Sheets",
        "Code Style System",
        "Creative Site Script",
        "Computer Sheet Syntax"
      ],
      "ans": 0,
      "jokes": [
        "The stylesheet got a yellow card for bad naming."
      ]
    },
    {
      "q": "Which HTML element is used for a clickable button?",
      "opts": [
        "<click>",
        "<button>",
        "<press>",
        "<submit>"
      ],
      "ans": 1,
      "jokes": [
        "That button never got subbed on."
      ]
    }
  ],
  "medium": [
    {
      "q": "What does git commit do?",
      "opts": [
        "Deletes a branch",
        "Saves a snapshot of your changes",
        "Pushes code to GitHub",
        "Creates a new repo"
      ],
      "ans": 1,
      "jokes": [
        "Git commit stayed local. Git push was waiting on the bench."
      ]
    },
    {
      "q": "What is a function in programming?",
      "opts": [
        "A reusable block of code",
        "A database table",
        "A web request",
        "A type of monitor"
      ],
      "ans": 0,
      "jokes": [
        "That function was called, but nobody picked up."
      ]
    },
    {
      "q": "Which data structure is first in, first out?",
      "opts": [
        "Stack",
        "Queue",
        "Dictionary",
        "Graph"
      ],
      "ans": 1,
      "jokes": [
        "Stacks are last in, first out — like panic homework."
      ]
    },
    {
      "q": "What does API stand for?",
      "opts": [
        "Application Programming Interface",
        "Advanced Program Index",
        "Automated Prompt Integration",
        "App Protocol Input"
      ],
      "ans": 0,
      "jokes": [
        "That API response came back 404: correct answer not found."
      ]
    },
    {
      "q": "In Unity, what is a GameObject?",
      "opts": [
        "A C# class only",
        "Any object placed in a scene",
        "A 3D model file",
        "A physics component"
      ],
      "ans": 1,
      "jokes": [
        "That GameObject forgot to exist in the scene."
      ]
    },
    {
      "q": "What problem is Rust mainly designed to help with?",
      "opts": [
        "Memory safety in systems programming",
        "Making images smaller",
        "Writing SQL queries",
        "Styling websites"
      ],
      "ans": 0,
      "jokes": [
        "The borrow checker denied that shot."
      ]
    },
    {
      "q": "What does frontend mean in web development?",
      "opts": [
        "What users see in the browser",
        "The database layer",
        "The server logic",
        "The deployment bill"
      ],
      "ans": 0,
      "jokes": [
        "The frontend looked good. The answer did not."
      ]
    },
    {
      "q": "What is recursion?",
      "opts": [
        "A function that calls itself",
        "A loop with a counter only",
        "A CSS layout trick",
        "A database backup"
      ],
      "ans": 0,
      "jokes": [
        "Recursion missed, then missed again, then missed again..."
      ]
    },
    {
      "q": "What does JSON mainly store?",
      "opts": [
        "Structured data",
        "Video frames",
        "Compiled machine code",
        "Fonts only"
      ],
      "ans": 0,
      "jokes": [
        "That JSON had more commas than confidence."
      ]
    },
    {
      "q": "Which HTTP method is usually used to create a new record?",
      "opts": [
        "GET",
        "POST",
        "TRACE",
        "PING"
      ],
      "ans": 1,
      "jokes": [
        "GET asked politely, but POST actually brought the data."
      ]
    },
    {
      "q": "Which command sends local commits to a remote repository?",
      "opts": [
        "git push",
        "git save",
        "git upload",
        "git send"
      ],
      "ans": 0,
      "jokes": [
        "Git does not accept vibes as a command."
      ]
    },
    {
      "q": "What is an array?",
      "opts": [
        "An ordered list of values",
        "A secret password",
        "A CSS color",
        "A server error"
      ],
      "ans": 0,
      "jokes": [
        "The array lined up, but the answer still went wide."
      ]
    },
    {
      "q": "Which CSS property changes text color?",
      "opts": [
        "font-color",
        "text-style",
        "color",
        "paint"
      ],
      "ans": 2,
      "jokes": [
        "The text changed kit, but not correctly."
      ]
    },
    {
      "q": "What does DOM stand for in web development?",
      "opts": [
        "Document Object Model",
        "Data Order Machine",
        "Display Output Mode",
        "Direct Object Memory"
      ],
      "ans": 0,
      "jokes": [
        "The DOM tree just dropped a leaf."
      ]
    },
    {
      "q": "What is a database primary key used for?",
      "opts": [
        "Uniquely identifying a row",
        "Changing font size",
        "Encrypting JavaScript",
        "Drawing graphics"
      ],
      "ans": 0,
      "jokes": [
        "That row lost its ID card."
      ]
    }
  ],
  "hard": [
    {
      "q": "What is the time complexity of binary search?",
      "opts": [
        "O(n)",
        "O(n²)",
        "O(log n)",
        "O(1)"
      ],
      "ans": 2,
      "jokes": [
        "Binary search split the goal in half and still missed."
      ]
    },
    {
      "q": "In Rust, what does the borrow checker enforce?",
      "opts": [
        "Memory safety without garbage collection",
        "Code style only",
        "Async execution order",
        "CSS naming rules"
      ],
      "ans": 0,
      "jokes": [
        "The borrow checker refused to lend you that goal."
      ]
    },
    {
      "q": "What is a race condition?",
      "opts": [
        "Two threads accessing shared data unpredictably",
        "A benchmark between functions",
        "A type of infinite loop",
        "A git merge strategy"
      ],
      "ans": 0,
      "jokes": [
        "Two threads ran for the ball. Neither coordinated."
      ]
    },
    {
      "q": "What does a lexer do in an interpreter?",
      "opts": [
        "Breaks source text into tokens",
        "Runs the code",
        "Handles memory layout",
        "Uploads the app"
      ],
      "ans": 0,
      "jokes": [
        "The lexer tokenized the shot into pure disappointment."
      ]
    },
    {
      "q": "What is a pure function?",
      "opts": [
        "Same output for same input with no side effects",
        "A function with no arguments",
        "A function called once",
        "A method inside a class"
      ],
      "ans": 0,
      "jokes": [
        "That function had side effects all over the pitch."
      ]
    },
    {
      "q": "What is the purpose of a foreign key in SQL?",
      "opts": [
        "To link a row to another table's row",
        "To encrypt a column",
        "To speed up every query automatically",
        "To store images"
      ],
      "ans": 0,
      "jokes": [
        "That relationship needed counseling and a foreign key."
      ]
    },
    {
      "q": "In a basic interpreter pipeline, what usually comes after parsing?",
      "opts": [
        "Evaluation or execution",
        "Lexing",
        "Typing the README",
        "Deleting tokens"
      ],
      "ans": 0,
      "jokes": [
        "You went backwards in the compiler pipeline."
      ]
    },
    {
      "q": "What does idempotent mean in HTTP?",
      "opts": [
        "Calling it multiple times has the same intended effect",
        "The request is encrypted",
        "The response is cached forever",
        "The server is fast"
      ],
      "ans": 0,
      "jokes": [
        "Repeating that shot did not make it idempotent."
      ]
    },
    {
      "q": "What does Big O notation describe?",
      "opts": [
        "How an algorithm scales with input size",
        "How large a file is",
        "How bright a screen is",
        "How many bugs exist"
      ],
      "ans": 0,
      "jokes": [
        "Big O saw the runtime and left the stadium."
      ]
    },
    {
      "q": "Which data structure is usually used for depth-first search?",
      "opts": [
        "Stack",
        "Queue",
        "Hash map only",
        "Heap only"
      ],
      "ans": 0,
      "jokes": [
        "DFS went deep. Your answer stayed shallow."
      ]
    },
    {
      "q": "What is a SQL index mainly used for?",
      "opts": [
        "Speeding up lookups on columns",
        "Encrypting rows",
        "Changing table colors",
        "Replacing primary keys always"
      ],
      "ans": 0,
      "jokes": [
        "Without an index, that query walked the whole pitch."
      ]
    },
    {
      "q": "What does ACID refer to in databases?",
      "opts": [
        "Transaction reliability properties",
        "A CSS color mode",
        "A JavaScript framework",
        "A type of API key"
      ],
      "ans": 0,
      "jokes": [
        "That transaction rolled back like a missed penalty replay."
      ]
    },
    {
      "q": "What is memoization?",
      "opts": [
        "Caching function results to avoid repeat work",
        "Writing notes in comments",
        "Renaming variables",
        "Compressing images"
      ],
      "ans": 0,
      "jokes": [
        "The function forgot everything and recalculated the miss."
      ]
    },
    {
      "q": "What is a closure in JavaScript?",
      "opts": [
        "A function remembering variables from its outer scope",
        "A closed browser tab",
        "A private GitHub repo",
        "A CSS border style"
      ],
      "ans": 0,
      "jokes": [
        "That closure remembered the miss forever."
      ]
    },
    {
      "q": "What does normalization in databases try to reduce?",
      "opts": [
        "Duplicate and inconsistent data",
        "Screen brightness",
        "Network latency always",
        "JavaScript bundle size"
      ],
      "ans": 0,
      "jokes": [
        "The database had duplicate rows and duplicate regrets."
      ]
    }
  ]
};
