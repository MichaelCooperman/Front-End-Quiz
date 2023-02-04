const jsdata = [
  {
    question: "What type of language is Javascript?",
    incorrectAnswers: ["Object-Based", "Procedural", "None"],
    correctAnswer: "Object-Oriented",
  },
  {
    question: "JavaScript code can be written in which of the following?",
    incorrectAnswers: [
      "JavaScript file (.js file)",
      "HTML document directly",
      "In style sheets (.css file)",
    ],
    correctAnswer: "JavaScript file and in HTML document directly",
  },
  {
    question: "Which symbol is used separate JavaScript statements?",
    incorrectAnswers: ["Comma (,)", "Colon (:)", "Hyphen (_)"],
    correctAnswer: "Semicolon (;)",
  },
  {
    question:
      "Which is the correct syntax to call an external JavaScript file in the current HTML document?",
    incorrectAnswers: [
      "<script href=' jsfile.js'></script>",
      "<import src=' jsfile.js'></import>",
      "<script link=' jsfile.js'></script>",
    ],
    correctAnswer: "<script src='jsfile.js'></script>",
  },
  {
    question:
      "Which JavaScript method is used to access an HTML element by id?",
    incorrectAnswers: ["getElementById()", "getElement(id)", "elementById(id)"],
    correctAnswer: "getElementById(id)",
  },
  {
    question:
      "Which property is used to define the HTML content to an HTML element with a specific id?",
    incorrectAnswers: ["innerText", "innerContent", "elementText"],
    correctAnswer: "innerHTML",
  },
  {
    question: "Which JavaScript method is used to write HTML output?",
    incorrectAnswers: [
      "document.output()",
      "console.log()",
      "document.writeHTML()",
    ],
    correctAnswer: "document.write()",
  },
  {
    question: "Which JavaScript method is used to write on browser's console?",
    incorrectAnswers: [
      "console.write()",
      "console.output()",
      "console.writeHTML()",
    ],
    correctAnswer: "console.log()",
  },
  {
    question: "Which JavaScript method is used to write into an alert box?",
    incorrectAnswers: [
      "window.alertHTML()",
      "window.alertBox()",
      "window.alertContent()",
    ],
    correctAnswer: "window.alert()",
  },
  {
    question:
      "Which is/are the valid JavaScript method(s) to extract string parts?",
    incorrectAnswers: [
      "slice(start, end)",
      "substring(start, end)",
      "substr(start, length)",
    ],
    correctAnswer: "All",
  },
  {
    question: "<button>  onclick='window.print()'>Submit  </button>",
    incorrectAnswers: [
      "It will write 'Submit' on the current Window",
      "It will write the content of the current page in the browser’s console",
      "None",
    ],
    correctAnswer: "It will print the content of the current page",
  },
  {
    question: "In JavaScript, single line comment begins with?",
    incorrectAnswers: ["#", "/*", "$"],
    correctAnswer: "//",
  },
  {
    question: "In JavaScript, multi-line comments are wrapped with?",
    incorrectAnswers: ["// and //", "<!—and -->", "## and ##"],
    correctAnswer: "/* and */",
  },
  {
    question:
      "How many keywords are there in JavaScript to declare variables or constants?",
    incorrectAnswers: ["1", "2", "4"],
    correctAnswer: "3",
  },
  {
    question: "The const keyword is used to define a",
    incorrectAnswers: [
      "Function scopes variable",
      "Block scoped variable",
      "Constant with no initial value",
    ],
    correctAnswer: "Constant",
  },
  {
    question:
      "Which is the correct syntax to declare a constant in JavaScript?",
    incorrectAnswers: [
      "const constant_name;",
      "constant_name const;",
      "constant_name const = value;",
    ],
    correctAnswer: "const constant_name = value;",
  },
  {
    question: "What is the default value of an uninitialized variable?",
    incorrectAnswers: ["0", "null", "NaN"],
    correctAnswer: "undefined",
  },
  {
    question: "Which is the exponentiation operator in JavaScript?",
    incorrectAnswers: ["exp()", "^", "pow"],
    correctAnswer: "**",
  },
  {
    question: "JavaScript arrays are written with",
    incorrectAnswers: [
      "round brackets ()",
      "curly brackets {}",
      "double quotes ''",
    ],
    correctAnswer: "square brackets []",
  },
  {
    question: "JavaScript objects are written with",
    incorrectAnswers: [
      "round brackets ()",
      "square brackets []",
      "double quotes ''",
    ],
    correctAnswer: "curly brackets {}",
  },
  {
    question:
      "Which JavaScript operator is used to determine the type of a variable?",
    incorrectAnswers: ["sizeof", "TypeOf", "typeOf"],
    correctAnswer: "typeof",
  },
  {
    question:
      "In JavaScript a variable contains one value while an object may contain",
    incorrectAnswers: ["One value", "Two values", "Three values"],
    correctAnswer: "Many values",
  },
  {
    question:
      "Which property is used to get the length of a string in JavaScript?",
    incorrectAnswers: ["len", "strlen", "Length"],
    correctAnswer: "length",
  },
  {
    question:
      "Which character is used to break up a code line within a text string in JavaScript?",
    incorrectAnswers: [
      "Single quote (')",
      "Double quote ('')",
      "Tipple single quote (''')",
    ],
    correctAnswer: "Single backslash ()",
  },
  {
    question:
      "Which is the correct JavaScript statement to define string as object?",
    incorrectAnswers: [
      "var s = 'IncludeHelp!'",
      "var s = String('IncludeHelp!');",
      "All",
    ],
    correctAnswer: "var s = new String('IncludeHelp!');",
  },
];

export default jsdata;
