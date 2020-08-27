import React, { useContext, useEffect, useState } from "react";

import Tooltip from "@material-ui/core/Tooltip";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";

import { animateScroll as scroll, scroller } from "react-scroll";
import ThemeContext from "../context/theme-context";
import sections from "../data/sections";
import { IoIosMoon, IoIosSunny, MdMenu } from "./icons";
import styles from "./navigation.module.css";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { dark, toggleDark } = useContext(ThemeContext);
  
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
          fixed(width: 32, height: 42) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils/util");
      setIsMobile(isMobile);
    }
  }, []);

  const scrollToTop = () =>
    scroll.scrollToTop({
      delay: 50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const scrollTo = id =>
    scroller.scrollTo(id, {
      delay: 50,
      offset: -50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const SectionLink = sectionObj => {
    const Icon = sectionObj.icon;

    return (
      <Tooltip key={sectionObj.id} title={sectionObj.title} placement="right" arrow>
        <div onClick={() => scrollTo(sectionObj.id)}>
          <Icon />
        </div>
      </Tooltip>
    );
  };

  return (
    <div
      className={`${styles.container} animated ${
        isMobile ? "fadeInDown" : "fadeInLeft"
      }`}
    >
      <Tooltip title="Go to Top" placement="right" arrow>
        <div className="flex-center cursor-pointer" onClick={scrollToTop}>
          <GatsbyImage className="grayscale" {...data.photo.childImageSharp} />
        </div>
      </Tooltip>

      <div className="hidden md:flex flex-col justify-center items-center">
        <div className={styles.menu}>
          <MdMenu />
        </div>
        <div className={styles.sectionLinks}>{sections.map(SectionLink)}</div>
      </div>

      <Tooltip title="Toggle Dark Mode" placement="right" arrow>
        <div
          className="flex-center cursor-pointer hover:text-primary-500"
          onClick={toggleDark}
        >
          {dark ? <IoIosMoon /> : <IoIosSunny />}
        </div>
      </Tooltip>
    </div>
  );
};

export default Navigation;