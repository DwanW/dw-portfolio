import React from "react";
import Wrapper from '../components/wrapper';

import styles from "./index.module.css";

import Hero from '../sections/hero';
import AboutMe from '../sections/about-me';
import Work from '../sections/work';
import Skills from '../sections/skills';
import Projects from '../sections/projects';
import Certifications from "../sections/certifications";
import Archive from '../sections/archive';
import Contact from '../sections/contact';
import Footer from '../sections/footer';

const IndexPage = () => (
    <Wrapper>
        <div className={`container ${styles.layout}`}>
            <Hero />
            <AboutMe />
            <Work />
            <Skills />
            <Projects />
            <Certifications />
            <Archive />
            <Contact />
            <Footer />
        </div>
    </Wrapper>
)

export default IndexPage
