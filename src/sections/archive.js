import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from "react"
import Heading from "../components/heading"
import { FaLink, IoIosJournal, FaGithub } from "../components/icons"
import Tooltip from "@material-ui/core/Tooltip"
import { container, gadget } from "./archive.module.css"

const Archive = () => {
  const data = useStaticQuery(graphql`
    {
      allArchiveJson {
        edges {
          node {
            id
            title
            label
            website
            github
            icon {
              childImageSharp {
                gatsbyImageData(width: 250)
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="archive">
      <Heading icon={IoIosJournal} title="Archive" />

      <div className={container}>
        {data.allArchiveJson.edges.map(({ node }, idx) => (
          <div
            className={gadget}
            key={node.id}
            data-aos="zoom-in"
            data-aos-delay={`${idx * 50 + 200}`}
          >
            <Tooltip title={node.label} placement="top">
              <OutboundLink
                href={node.website || node.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-auto bg-transparent relative cursor-pointer rounded-lg shadow-lg"
              >
                <GatsbyImage
                  className="w-36 h-24 object-cover rounded-lg hover:opacity-50 duration-200"
                  image={node.icon.childImageSharp.gatsbyImageData}
                  alt="archive item"
                />
                <span className="sr-only">{node.title}</span>
              </OutboundLink>
            </Tooltip>
            <h6 className="mt-4 font-light">{node.title}</h6>

            <div className="flex mt-2 justify-start pb-12">
              {node.website && (
                <Tooltip title="Go to Website" placement="bottom">
                  <OutboundLink
                    href={node.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 mr-2 hover:text-primary-500"
                  >
                    <FaLink />
                    <span className="sr-only">Go to Website</span>
                  </OutboundLink>
                </Tooltip>
              )}

              {node.github && (
                <Tooltip title="Go to GitHub Repo" placement="bottom">
                  <OutboundLink
                    href={node.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 mr-2 hover:text-primary-500"
                  >
                    <FaGithub />
                    <span className="sr-only">Go to GitHub Repo</span>
                  </OutboundLink>
                </Tooltip>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Archive
