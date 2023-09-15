import { lazy } from "react";

const AboutMe = lazy(() => import("../pages/AboutMe"));
const Skills = lazy(() => import("../pages/Skills"));
const Projects = lazy(() => import("../pages/Projects"));
const Experience = lazy(() => import("../pages/Experience"));
const ContactMe = lazy(() => import("../pages/ContactMe"));

export { AboutMe, Skills, Projects, Experience, ContactMe };
