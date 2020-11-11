import { combineReducers } from "redux";

const data = () => {
  return [
    {
      head: "Profile",
      content: {
        description:
          "Doing freelance with 1 year of experience in the software house company. Already completed 5 executive projects in a team and 1 internship as a Full-Stack Developer.",
      },
    },
    {
      head: "Experience",
      content: {
        experience: [
          {
            title: "Freelance Software Engineer",
            company: "Nibble Softworks",
            time: "2017-2018",
            description: [
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
            description: [
              "Developing and maintenance system.",
              "Writing documentation.",
            ],
          },
        ],
      },
    },
    {
      head: "Education",
      content: {
        education: [
          {
            study: "Computer Science",
            school: "Parahyangan Catholic University",
            time: "2016-present",
          },
        ],
      },
    },
    {
      head: "Skills",
      content: {
        skills: [
          "Object-Oriented Programming",
          "Object-Oriented Analysis",
          "Analitical and Computational Thinking",
          "Writing documentation",
        ],
      },
    },
    {
      head: "Expertise in",
      content: {
        expertise: [
          "Odoo ERP",
          "Java, Python",
          "HTML, CSS, Bootstrap, Javascript, JQuery",
          "MS SQL, MySQL",
          "Android Studio",
          "Git Version Control",
        ],
      },
    },
  ];
};

export default combineReducers({
  data,
});
