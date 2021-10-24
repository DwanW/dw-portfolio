import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Heading from "../components/heading"
import { GoTools } from "../components/icons"
import * as styles from "./skills.module.css"

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      allSkillsJson {
        edges {
          node {
            id
            name
            tech
            icon {
              childImageSharp {
                gatsbyImageData(width: 32, height: 32)
              }
            }
          }
        }
      }
    }
  `)
  return (
    <section id="skills">
      <Heading icon={GoTools} title="Skills" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.allSkillsJson.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className={`${styles.skill} md:mr-5`}
            data-aos="fade-right"
            data-aos-delay={`${index * 100 + 100}`}
          >
            <div className="flex items-center">
              <GatsbyImage
                className="w-8 h-8 mr-5"
                image={node.icon.childImageSharp.gatsbyImageData}
                alt="skill icon"
              />
              <div>
                <h6 className="text-xs font-semibold leading-none">
                  {node.name}
                </h6>
                <h6
                  className="mt-2 leading-none"
                  style={{ fontSize: "0.65rem" }}
                >
                  ({node.tech})
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
