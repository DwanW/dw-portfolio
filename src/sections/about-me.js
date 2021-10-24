import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Heading from "../components/heading"
import { MdPerson } from "../components/icons"

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "developer.png" }) {
        childImageSharp {
          gatsbyImageData(width: 512)
        }
      }
      markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
        html
      }
    }
  `)

  return (
    <section id="about-me">
      <Heading icon={MdPerson} title="About Me" />

      <div className="grid lg:grid-cols-6 gap-12 items-center">
        <div
          className="hidden md:block lg:col-span-2 w-1/3 lg:w-3/4 mx-auto"
          data-aos="fade-right"
        >
          <GatsbyImage
            image={data.photo.childImageSharp.gatsbyImageData}
            alt="about"
          />
        </div>
        <div
          className="text-justify lg:col-span-4"
          data-aos="fade-in"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </section>
  )
}

export default AboutMe
