import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import ThemeContext from "../context/theme-context.js";
import Navigation from "./navigation";
import SEO from "./seo";
import styles from "./aos-wrapper.module.css";

const Wrapper = ({ children }) => {
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const AOS = require("aos");
      AOS.init({disable: 'mobile'});
    }
  }, []);

  return (
    <div className={dark ? styles.dark : styles.light}>
      <SEO />
      <Navigation />

      <div className="mx-8 lg:mx-16 xl:mx-0">{children}</div>
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;