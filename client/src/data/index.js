export default [
  {
    id: 1,
    question:
      "Which of the following is not a primitive data type in JavaScript?",
    options: ["Number", "String", "Boolean", "Array"],
    answer: "Array",
  },
  {
    id: 2,
    question: 'What is the result of the following expression: "10" + 20 + 30?',
    options: ["102030", "60", "2030", "Error"],
    answer: "102030",
  },
  {
    id: 3,
    question:
      "What is the output of the following code: console.log(typeof null);",
    options: ['"null"', '"undefined"', '"object"', '"string"'],
    answer: '"object"',
  },
  {
    id: 4,
    question:
      'What is the difference between "==" and "===" operators in JavaScript?',
    options: [
      "They are identical",
      "The first one compares only values",
      "The second one compares values and types",
      "The first one compares values and types",
    ],
    answer: "The second one compares values and types",
  },
  {
    id: 5,
    question:
      "Which of the following is not a valid way to declare a function in JavaScript?",
    options: [
      "function myFunc(){}",
      "const myFunc = function(){}",
      "let myFunc = () => {}",
      "var myFunc;",
    ],
    answer: "var myFunc;",
  },
  {
    id: 6,
    question: "What is the result of the following expression: 5 < 6 < 7?",
    options: ["true", "false", "undefined", "NaN"],
    answer: "true",
  },
  {
    id: 7,
    question:
      'What is the result of the following code: console.log("2" * "2");',
    options: ["4", '"4"', "NaN", "undefined"],
    answer: "4",
  },
  {
    id: 8,
    question:
      'What is the result of the following expression: true + false + "xyz"?',
    options: ['"3xyz"', '"truefalsexyz"', "NaN", "undefined"],
    answer: '"1xyz"',
  },
  {
    id: 9,
    question: "Which of the following is not a valid loop in JavaScript?",
    options: ["for", "while", "do-while", "until"],
    answer: "until",
  },
  {
    id: 10,
    question:
      "What is the output of the following code: console.log(Math.max(1,2,3,4));",
    options: ["4", "3", "2", "1"],
    answer: "4",
  },
];
