const header = {
  homepage: "https://rajendralungeli.info.np/",
  title: "JS.",
};
const about = {
  name: "Rajendra Lungeli",
  role: "Software Engineer",
  description: "I like to build amazing products  for humans 🚀",
  //    Currently  I m focused on empowering peoples to learn how to code & change their future 👨‍💻',
  // resume: 'https://example.com',
  social: {
    linkedin: "https://linkedin.com/in/linkwithjs",
    github: "https://github.com/linkwithjs",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "bookOrder-api",
    description:
      "bookOrder-api was an api for book ordering system. It is self learning project which I'm currently working",
    stack: ["Java", "Spring Boot"],
    sourceCode: "https://github.com/linkwithjs/Book_Api",
    livePreview: "https://github.com/linkwithjs/Book_Api",
  },
  {
    name: "eCommerce-api",
    description:
      "eCommerce-api was an api for eCommerce android app. It was developed for the partial fulfillment of the college project.",
    stack: ["Node", "Express"],
    sourceCode: "https://github.com/linkwithjs/eCommerce-API",
    livePreview: "https://github.com/linkwithjs/eCommerce-API",
  },
  {
    name: "eClass-api",
    description:
      "was an api for simple LMS type android app. It was developed for the partial fulfillment of the college project.",
    stack: ["Node", "Express"],
    sourceCode: "https://github.com/linkwithjs/eClass-backend-API-",
    livePreview: "https://github.com/linkwithjs/eClass-backend-API-",
  }, {
    name: "eClass Android App",
    description:
      "was an small app for simple LMS type android app. It was developed for the partial fulfillment of the college project.",
    stack: ["Node", "Express"],
    sourceCode: "https://github.com/linkwithjs/eClass",
    livePreview: "https://github.com/linkwithjs/eClass",
  },

];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript (Nodejs)",
  "React",
  "Redux",
  "Java (Spring Boot)",
  "Git",
];

const education = [
  {
    college: "Oxford college of Engineering and Management.",
    university: "Pokhara University",
    faculty: "Science and Technology",
    program: "BCA",
  },
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "linkwithjs@gmail.com",
};

export { header, about, projects, skills, contact, education };
