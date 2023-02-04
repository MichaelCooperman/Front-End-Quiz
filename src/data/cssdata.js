const cssdata = [
  {
    question: "The HTML attribute used to define the internal stylesheet is?",
    incorrectAnswers: ["style", "<script>", "<link>"],
    correctAnswer: "<style>",
  },

  {
    question:
      "Which of the following CSS property is used to set the background image of an element?",
    incorrectAnswers: ["background-color", "None", "background-attachment"],
    correctAnswer: "background-image",
  },

  {
    question:
      "Which of the following is the correct syntax to display the hyperlinks without any underline?",
    incorrectAnswers: [
      "a {decoration: no-underline;}",
      "a {text-decoration: underline;}",
      "None",
    ],
    correctAnswer: "a {text-decoration: none;}",
  },

  {
    question:
      "Which of the following property is used as the shorthand property for the padding properties?",
    incorrectAnswers: ["padding-right", "padding-left", "All of the above"],
    correctAnswer: "padding",
  },
  {
    question: "How to select the elements with the class name “example”?",
    incorrectAnswers: ["example", "#example", "Class example"],
    correctAnswer: ".example",
  },
  {
    question: "The CSS property used to make the text bold is",
    incorrectAnswers: ["weight: bold", "style: bold", "font: bold"],
    correctAnswer: "font-weight : bold",
  },
  {
    question:
      "Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?",
    incorrectAnswers: [
      "transform : capitalize;",
      "text-style : capital;",
      "text-transform : capital;",
    ],
    correctAnswer: "text-transform : capitalize;",
  },
  {
    question: "What does CSS stand for?",
    incorrectAnswers: [
      "Color and style sheets",
      "Cascade style sheets",
      "None",
    ],
    correctAnswer: "Cascading style sheet",
  },
  {
    question:
      "Which of the following is the correct syntax for referring the external style sheet?",
    incorrectAnswers: [
      "<style src = “example.css”>",
      "<style src = example.css>",
      "<stylesheet> example.css </stylesheet>",
    ],
    correctAnswer: "<link rel=”stylesheet” type=”text/css” href=”example.css”>",
  },
  {
    question:
      "Which of the following CSS property is used to specify whether the table cells share the common or separate border?",
    incorrectAnswers: ["border-radius", "border-spacing", "None"],
    correctAnswer: "border-collapse",
  },
  {
    question:
      "Which of the following is used to specify the subscript of text using CSS?",
    incorrectAnswers: [
      "vertical-align: super",
      "vertical-align: subscript",
      "None",
    ],
    correctAnswer: "vertical-align: sub",
  },
  {
    question:
      "Which of the following CSS property is used to specify the space between every letter inside an element?",
    incorrectAnswers: [
      "character-spacing",
      "alpha-spacing",
      "alphabet-spacing",
    ],
    correctAnswer: "letter-spacing",
  },
  {
    question:
      "Which of the following is not a value of the font-variant property in CSS?",
    incorrectAnswers: ["small-caps", "normal", "inherit"],
    correctAnswer: "large-caps",
  },
  {
    question:
      "The CSS property used to make the rounded borders, or rounded corners around an element is",
    incorrectAnswers: ["None", "border-collapse", "border-spacing"],
    correctAnswer: "border-radius",
  },
  {
    question:
      "The CSS property used to specify the transparency of an element is",
    incorrectAnswers: ["visibility", "filter", "overlay"],
    correctAnswer: "opacity",
  },
  {
    question:
      "Which of the following CSS property defines how an image or video fits into container with established height and width?",
    incorrectAnswers: ["object-position", "None", "position"],
    correctAnswer: "object-fit",
  },
  {
    question: "Which of the following is not a type of combinator?",
    incorrectAnswers: ["~", ">", "+"],
    correctAnswer: "*",
  },
  {
    question:
      "Which of the following selector in CSS is used to select the elements that do not match the selectors?",
    incorrectAnswers: [":empty selector", ":! selector", "None"],
    correctAnswer: ":not selector",
  },
  {
    question:
      "The CSS property used to set the distance between the borders of the adjacent cells in the table is",
    incorrectAnswers: ["border-collapse", "border-radius", "None"],
    correctAnswer: "Border-spacing",
  },
  {
    question:
      "Which of the following is the correct syntax to select the p siblings of a div element?",
    incorrectAnswers: ["p", "div p", "div + p"],
    correctAnswer: "div ~ p",
  },
];

export default cssdata;
