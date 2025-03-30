const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page

  correctPasscode: "1784",
  passcodeTitle: "Enter Passcode",
  successMessage: "Yayy!:)",
  redirectMessage: "Redirecting...",
  incorrectPasscodeMessage: "Incorrect passcode, hint: your favourite number",
  cancelButtonText: "Cancel",

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL",
  trendingTitle: "Trending searches",
  trendingSearches: [
    "Why is my bf so cute?",
    "Why my bf loves me so much?",
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" ;)',

  // ⏳ Timer Page
  anniversaryDate: "2020-11-08",
  timerTitle: "We've been together for:",
  timerMessage: "... and still counting <3",
  timeUnits: {
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  },

  // 💌 Love Letter Page
  loveLetterMessage: "Hi, I love you so much💖",

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, my love! 💖 Wishing us many more wonderful years together.",
>>>>>>> ab38060 (Initial commit - removed music and recap pages)

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths
  redirectPath: "/question",
  timerRedirectPath: "/timer",
  questionRedirectPath: "/question",
  letterNextPage: "/closing",
  letterPreviousPage: "/timer", // ✅ Updated to remove recap reference
  previousPageText: "Previous page",
  nextPageText: "Next page",

  // 🔍 Search Queries
  correctSearchQueries: [
    "How long have we been together?",
    "how long have we been together",
>>>>>>> ab38060 (Initial commit - removed music and recap pages)
  ],
};

export default config;
