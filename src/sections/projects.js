import Tooltip from '@mui/material/Tooltip';
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../components/button"
import Heading from "../components/heading"
import { FaDev, FaGithub, FaLink } from "../components/icons"
import { container, project } from "./projects.module.css"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            description
            tags
            website
            github
            image {
              childImageSharp {
                gatsbyImageData(width: 400)
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="projects">
      <Heading icon={FaDev} title="Projects" />

      <div className={container}>
        {data.allProjectsJson.edges.map(({ node }, idx) => (
          <div
            className={project}
            key={node.id}
            data-aos="fadeIn"
            data-aos-delay={`${idx * 200 + 200}`}
          >
            <a
              href={node.website || node.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-48 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
            >
              <FaLink className="absolute" color="#FFF" size="5rem" />
              <GatsbyImage
                className="max-w-sm h-full object-cover rounded-lg hover:opacity-50 duration-200"
                image={node.image.childImageSharp.gatsbyImageData}
                alt="project item"
              />
              <span className="sr-only">{node.title}</span>
            </a>
            <h5 className="mt-4 font-semibold">{node.title}</h5>
            <p className="mt-2 pb-5 text-sm text-left">{node.description}</p>

            <p className="pb-2 flex text-xs font-semibold">
              {node.tags.map(tag => (
                <span key={tag} className="mr-2">
                  #{tag}
                </span>
              ))}
            </p>

            <div className="flex mt-2 justify-start">
              {node.website && (
                <Tooltip title="Go to Website" placement="bottom">
                  <a
                    href={node.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 mr-2 hover:text-primary-500"
                  >
                    <FaLink />
                    <span className="sr-only">Go to Website</span>
                  </a>
                </Tooltip>
              )}

              {node.github && (
                <Tooltip title="Go to GitHub Repo" placement="bottom">
                  <a
                    href={node.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 mr-2 hover:text-primary-500"
                  >
                    <FaGithub />
                    <span className="sr-only">Go to GitHub Repo</span>
                  </a>
                </Tooltip>
              )}
            </div>
          </div>
        ))}
      </div>

      <Button
        className="mt-6"
        icon={FaGithub}
        title="Projects on GitHub"
        onClick={() => window.open("https://github.com/DwanW", "_blank")}
      />
    </section>
  )
}

export default Projects
