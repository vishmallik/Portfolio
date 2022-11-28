let projects = [
  {
    name: "Conduit Blog App",
    features: [
      "User can register and login/Logout in the App.",
      "Add, edit and delete articles.",
      "Add, edit and delete User Info.",
      "Favorite a post or follow a user.",
      "Homepage feed based on followed users and favorited posts.",
      "Add comments in articles and delete own comments.",
      "View list of articles by Tags.",
    ],
    details:
      "Conduit Blog App is a Platform where people can share their thoughts and articles and can interact with each others post.",
    link: "https://conduit-blog.netlify.app",
    gh_link: "https://github.com/vishmallik/Conduit-blog",
    image: "/images/projects/conduit-mbp.png",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "TailwindCSS",
      "ReactJS",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
    ],
  },
  {
    name: "Shopping Cart App",
    features: [
      "Add and remove products from the floating cart",
      "Filter products by available sizes",
      " Sort products by Highest and Lowest prices",
      " Add multiple items to cart",
    ],
    details:
      "A Simple shopping cart application made using react where people can sort items according to sizes and price and can add itmes to cart.",
    link: "https://shopping-cart-vish.netlify.app",
    gh_link: "https://github.com/vishmallik/React-Shopping-Cart-using-Hooks",
    image: "/images/projects/shop-cart-mbp.png",
    tools: ["HTML", "CSS", "JavaScript", "SASS/SCSS", "ReactJS"],
  },
  {
    name: "Github Battle",
    features: [
      "Github Top Stars: Show a list of 30 most starred Github Repos for languages like:JavaScript, Ruby, Python, Java, CSS, Overall",
      "Github Battle: Github Battle accept two github username. And battles them on the basis of their number of followers and repos.",
      "The player with higher score wins.",
      "This App support Dark mode.",
    ],
    details:
      "An open, extensible, platform for github users to track top repositories of various programming languages.",
    link: "https://vishmallik.github.io/Github-Battle-using-Hooks",
    gh_link: "https://github.com/vishmallik/Github-Battle-using-Hooks",
    image: "/images/projects/gb-mbp.png",
    tools: ["HTML", "CSS", "JavaScript", "SASS/SCSS", "ReactJS"],
  },
  {
    name: "Quiz App",
    features: [
      "User can select difficulty : Easy, Medium & Hard",
      "24 unique categories available to pick",
      "Supports Local Storage , so user can continue where they last left.",
      "Results page to check how many questions were correct.",
      "User can retake the same quiz after they have completed the quiz atleast once",
    ],
    details:
      "A Quiz App which is made using React and opentdb API to fetch quiz data. ",
    link: "https://quizappbyvish.netlify.app",
    gh_link: "https://github.com/vishmallik/QuizApp",
    image: "/images/projects/quiz-mbp.png",
    tools: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
  {
    name: "Castillo - The Podcast App",
    features: [
      " A User can upload podcasts, but first it must be verified by the admin.",
      "All the podcasts uploaded by user will always be listed for free members.",
      "Separate User and Admin registration.",
      "Only Admin can upload VIP and Premium podcasts.",
      "Admin can edit/delete the podcasts.",
      "Admin can verify podcast listed by user. After that it will be visible to all users.",
    ],
    details:
      "A Podcast application made using Express & MongoDB where a user can login as - Free, VIP and Premium user.",

    link: "https://castillo-czpg.onrender.com/",
    gh_link: "https://github.com/vishmallik/Castillo-The-Podcast-App",
    image: "/images/projects/castillo-mbp.png",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "TailwindCSS",
      "EJS",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
    ],
  },
  {
    name: "Trakr - Expense Tracker App",
    features: [
      "Each user will have thier own set of income source, expenses category and saving calculated based on income & expenses.",
      "User can create account and login ",
      "Social OAuth Login supported (Google and Github)",
      "Filter by date, by category , by both date and category, by month and year and so on.",
      "User can see their monthly saving.",
    ],
    details:
      "An expense tracker application made using Express & MongoDB where a logged in user can track their income, expenses and savings",
    link: "https://expense-tracker-fbdd.onrender.com/",
    gh_link: "https://github.com/vishmallik/Expense-Tracker",
    image: "/images/projects/trakr-mbp.png",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "TailwindCSS",
      "EJS",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
    ],
  },
  {
    name: "Monthly Activity Tracker",
    features: [
      "Clean and Simple UI",
      "Add Multiple actvities at once.",
      "Just mark your activity once and it will remember for you.",
      "Supports Local Storage so, data will persists even after closing browser.",
    ],
    details:
      "This App helps to track your activities for you. You can add as many activities as you want and simply mark the date, it will remember everything for you even after closing the browser.",
    link: "https://monthly-activity-tracker.netlify.app",
    gh_link: "https://github.com/vishmallik/Monthly-Activity-Tracker",
    image: "/images/projects/mat-mbp.png",
    tools: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
  {
    name: "HTML CSS Live Code Editor",
    features: [
      "Create HTML Layouts on the go.",
      "Supports code hightlighting.",
    ],
    details:
      "A Simple Live HTML and CSS code editor where user can write and create small Web Layouts on the go. Made using codemirror",
    link: "https://vishmallik.github.io/HTML_CSS_editor",
    gh_link: "https://github.com/vishmallik/HTML_CSS_editor",
    image: "/images/projects/code-editor-mbp.png",
    tools: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },

  {
    name: "Todo App",
    features: [
      "Clean and Simple UI",
      "Add, Delete, mark todos as completed.",
      "View Todos by active, completed and all.",
      "Supports Local Storage so, data will persists even after closing browser.",
    ],
    details: `A simple clone of TodoMVC where user can add, delete and mark todo as complete.`,
    link: "https://vishmallik.github.io/TODO-App-Vanilla-JS",
    gh_link: "https://github.com/vishmallik/TODO-App-Vanilla-JS",
    image: "/images/projects/todo-mbp.png",
    tools: ["HTML", "CSS", "JavaScript"],
  },
];
export default projects;
