import {
    AiFillSafetyCertificate,
    FaAward,
    FaDev,
    FaInfoCircle,
    GoTools,
    IoIosDocument,
    // IoIosJournal,
    IoIosPaperPlane,
    MdPerson,
    // MdSchool,
    // MdWork,
  } from "../components/icons";
  
  const sections = [
    { id: "about-me", title: "About Me", icon: MdPerson },
    // { id: "work", title: "Work", icon: MdWork },
    // { id: "education", title: "Education", icon: MdSchool },
    { id: "skills", title: "Skills", icon: GoTools },
    { id: "projects", title: "Projects", icon: FaDev },
    // { id: "blog", title: "Blog", icon: IoIosJournal },
    { id: "achievements", title: "Achievements", icon: FaAward },
    {
      id: "certifications",
      title: "Certifications",
      icon: AiFillSafetyCertificate,
    },
    { id: "archive", title: "Archive", icon: IoIosDocument },
    { id: "contact", title: "Contact", icon: IoIosPaperPlane },
    { id: "footer", title: "Foot Note", icon: FaInfoCircle },
  ];
  
  export default sections;