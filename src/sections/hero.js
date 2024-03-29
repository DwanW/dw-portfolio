import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Parallax from "parallax-js"
import React, { useRef, useState, useEffect, useContext } from "react"
import ThemeContext from "../context/theme-context"
import Social from "../components/social"
import Subtitle from "../components/subtitle"

const Hero = () => {
  const { dark } = useContext(ThemeContext)

  const parallaxRef = useRef(null)
  const [parallax, setParallax] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [showSocial, setShowSocial] = useState(false)
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, height: 512)
        }
      }
      logo_dark: file(relativePath: { eq: "logo_dark.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, height: 512)
        }
      }
    }
  `)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils/util")
      setIsMobile(isMobile)
    }
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setParallax(
        new Parallax(parallaxRef.current, {
          invertX: false,
          invertY: false,
        })
      )
    }

    return () => {
      parallax && parallax.destroy()
    }
  }, [parallaxRef])

  return (
    <section id="hero" className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-16 justify-center lg:justify-start items-center mt-8 md:mt-12 lg:mt-0">
        <div ref={parallaxRef} className="col-span-2">
          <div className="max-w-xs mx-auto" data-depth="0.2">
            {dark ? (
              <GatsbyImage
                className="max-w-lg mx-auto lg:mx-0"
                image={data.logo.childImageSharp.gatsbyImageData}
                alt="dark logo"
              />
            ) : (
              <GatsbyImage
                className="max-w-lg mx-auto lg:mx-0"
                image={data.logo_dark.childImageSharp.gatsbyImageData}
                alt="light logo"
              />
            )}
          </div>
        </div>
        <div className="col-span-3">
          <h1 className="sr-only">
            Dwan Wang <br />
            Full stack Developer, programming enthusiast from Calgary
          </h1>

          <div className="text-center lg:text-left flex flex-col items-center lg:ml-4 lg:items-start">
            <Subtitle onDone={() => setShowSocial(true)} />

            <div className="w-full md:w-auto h-6 my-6">
              {showSocial && <Social />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
