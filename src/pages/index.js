import React from "react";
import Wrapper from '../components/wrapper';

import styles from "./index.module.css";

import Hero from '../sections/hero';
import AboutMe from '../sections/about-me';
import Skills from '../sections/skills';
import Projects from '../sections/projects';
import Footer from '../sections/footer';

const IndexPage = () => (
    <Wrapper>
        <div className={`container ${styles.layout}`}>
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Footer />
        </div>
    </Wrapper>
)

export default IndexPage
