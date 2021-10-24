import PropTypes from "prop-types"
import React, { useContext, useEffect } from "react"
import ThemeContext from "../context/theme-context.js"
import Navigation from "./navigation"
import SEO from "./seo"
import { dark as darkStyle, light } from "./wrapper.module.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Wrapper = ({ children }) => {
  const { dark } = useContext(ThemeContext)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      AOS.init({ disable: "mobile", animatedClassName: "aos-animate" })
    }
  }, [])

  return (
    <div className={dark ? darkStyle : light}>
      <SEO />
      <Navigation />

      <div className="mx-8 lg:mx-16 xl:mx-0">{children}</div>
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
