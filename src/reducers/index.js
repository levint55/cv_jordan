import { combineReducers } from "redux";

const experiences = () => {
  return [
    {
      title: "Freelance Software Engineer",
      company: "Nibble Softworks",
      time: "2017-2018",
      descriptions: [
        "Analysis system specification.",
        "Making Gantt-chart.",
        "Developing and maintenance system.",
        "Writing documentation.",
      ],
    },
    {
      title: "Internship Software Engineer",
      company: "Nibble Softworks",
      time: "2019",
      descriptions: [
        "Developing and maintenance system.",
        "Writing documentation.",
      ],
    },
  ];
};

const educations = () => {
  return [
    {
      study: "Computer Science",
      school: "Parahyangan Catholic University",
      time: "2016-present",
    },
  ];
};

const skills = () => {
  return [
    "Object-Oriented Programming",
    "Object-Oriented Analysis",
    "Analitical and Computational Thinking",
    "Writing documentation",
  ];
};

const expertises = () => {
  return [
    "Odoo ERP",
    "Java, Python",
    "HTML, CSS, Bootstrap, Javascript, JQuery",
    "MS SQL, MySQL",
    "Android Studio",
    "Git Version Control",
  ];
};

export default combineReducers({
  experiences,
  educations,
  skills,
  expertises,
});
