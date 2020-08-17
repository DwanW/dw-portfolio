import React from "react";
import Wrapper from '../components/wrapper';

import styles from "./index.module.css";

import Hero from '../sections/hero';
import AboutMe from '../sections/about-me';

const IndexPage = () => (
    <Wrapper>
        <div className={`container ${styles.layout}`}>
            <Hero />
            <AboutMe />
        </div>
    </Wrapper>
)

export default IndexPage
