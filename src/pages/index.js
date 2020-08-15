import React from "react";
import Wrapper from '../components/aos-wrapper';

import styles from "./index.module.css";
import Hero from '../sections/hero';

const IndexPage = () => (
    <Wrapper>
        <div className={`container ${styles.layout}`}>
            <Hero />
        my portfolio
        </div>
    </Wrapper>
)

export default IndexPage
