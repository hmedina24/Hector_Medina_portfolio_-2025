/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import loading from "./assets/lottie/loading.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: loading,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hector Medina ",
  title: "Empowering the Future Through Code - Hector Medina",
  subTitle: emoji(
    "An experienced Software Engineer in JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/18guRb2wme5w_Z_UZ6V5Tlbp-Cqve7KJW/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hmedina24",
  linkedin: "https://www.linkedin.com/in/hectormedina24",
  gmail: "hectormedina24@gmail.com",
  //icloud: "hectormedina24@icloud.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Versatile software developer that enjoys building impactful software, from clean UIs to robust backend systems. ",
  skills: [
    emoji(
      "⚡ Scalable and secure RESTful APIs and backend systems in Java and Node.js"
    ),
    emoji(
      "⚡ Seamless cloud integrations with AWS for storage, compute, and monitoring"
    ),
    emoji("⚡ Automated CLI tools and scripts to optimize developer workflows")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer",
      company: "Amazon Web Services",
      companylogo: require("./assets/images/awsLogo.png"),
      date: "June 2022 – November 2023",
      desc: "At AWS, I engineered backend tools and UI components to enhance system reliability, streamline operations, and improve customer experience across global deployments—all while collaborating in a fast-paced Agile/DevOps environment.",
      descBullets: [
        "🔧 Developed resilient APIs and CLI tools using Java and Varia scripts to automate incident recovery and restore file system availability.",
        "🌐 Built core UI components like CreateVolume and CreateSVM using React.js, TypeScript, and JavaScript for AWS storage management.",
        "🚀 Deployed and monitored HM/AMI instances across 31 global regions using AWS DevOps tools and pipeline monitoring practices.",
        "🤝 Resolved critical system issues and maintained documentation, reinforcing a DevOps culture through Agile ceremonies and cross-functional collaboration."
      ]
    },
    {
      role: "Software Engineer",
      company: "Hack.Diversity",
      companylogo: require("./assets/images/hdLogo.png"),
      date: "December 2021 – June 2022",
      desc: "As a 2022 Hack.Diversity Fellow, I collaborated with industry leaders while building a full-stack web application using the MERN stack. I transformed client needs into scalable technical solutions, focusing on clean architecture and seamless data operations.",
      descBullets: [
        "🎓 Selected for the competitive Hack.Diversity Fellowship, connecting with top leaders across Boston’s tech, civic, and academic sectors.",
        "🌐 Built a full-stack web app using MongoDB, Express, React.js, and Node.js (MERN) to translate client goals into functional software.",
        "🗂️ Designed data models and services for precise CRUD operations using MongoDB, ensuring accuracy and scalability.",
        "🎨 Implemented responsive front-end architecture with React.js and JavaScript, delivering pixel-perfect UI aligned with design specs."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Spectrus",
      companylogo: require("./assets/images/spectrusLogo.png"),
      date: "May 2019 – August 2019",
      desc: "In this project, I led the analysis and backend design of a web application tailored for biochemist engineers, focusing on data architecture and system usability to support scientific workflows and business operations.",
      descBullets: [
        "🔬 Analyzed and optimized a web platform for biochemist engineers, enabling sample tracking, project updates, history access, and automated client invoicing.",
        "🗃️ Designed relational database models using MySQL, ensuring high-performance data storage and integrity across complex workflows."
      ]
    }
  ]
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Suffolk University",
      logo: require("./assets/images/suffolkLogo.png"),
      subHeader:
        "Bachelor of Arts in General Studies: Concentration in Physical Science",
      duration: "August 2017 - May 2022",
      desc: "I was member of the clubs: Computer Science Club, African American Student Council, Mathematicians Society."
    },
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Crimson Summer Academy Alumni",
      duration: "September 2013 - April 2017",
      desc: "As a scholar in the Harvard Crimson Summer Academy, I engaged in rigorous academic enrichment, leadership development, and college preparation. I collaborated with peers and mentors in a supportive learning environment that emphasized critical thinking, civic engagement, and personal growth."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(857)-249-8135",
  email_address: "hectormedina24@icloud.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
