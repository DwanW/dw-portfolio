import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useContext, useState } from "react"
import Heading from "../components/heading"
import { MdLocationOn, MdMoreHoriz, MdWork } from "../components/icons"
import ThemeContext from "../context/theme-context"
import Tooltip from '@mui/material/Tooltip';

const Work = () => {
  const { dark } = useContext(ThemeContext)
  const [max, setMax] = useState(4)
  const data = useStaticQuery(graphql`
    {
      allWorkJson {
        edges {
          node {
            id
            title
            subtitle
            period
            location
            specialization
            icon {
              childImageSharp {
                gatsbyImageData(height: 32)
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="work">
      <Heading icon={MdWork} title="Work" />

      <div className="flex w-1/2 m-auto justify-center">
        <div className="w-1 bg-gray-500 rounded-full md:ml-6 opacity-25" />
        <div className="-ml-2">
          {data.allWorkJson.edges.map(({ node }, index) => {
            if (index >= max) return null

            return (
              <div
                data-aos="fade-down"
                data-aos-delay={`${index * 200 + 200}`}
                key={node.id}
                className="py-4 flex"
              >
                <Tooltip title={`(${node.period})`} placement="left">
                  <div
                    className={`relative mt-3 w-3 h-3 rounded-full shadow-lg opacity-75 z-2 ${
                      dark ? "bg-white" : "bg-primary-500"
                    } duration-200`}
                  />
                </Tooltip>
                <div className="ml-8">
                  <GatsbyImage
                    className="w-auto h-8 object-contain"
                    image={node.icon.childImageSharp.gatsbyImageData}
                    alt="company icon"
                  />
                  <div className="mt-3 flex items-baseline">
                    <h6 className="font-semibold">{node.title}</h6>
                    <h6 className="text-xs ml-2">({node.period})</h6>
                  </div>
                  <h6 className="text-sm">{node.subtitle}</h6>
                  <div className="mt-2 flex items-center">
                    <MdLocationOn size="0.75rem" />
                    <h6 className="font-semibold text-xs ml-2">
                      {node.location}
                    </h6>
                  </div>
                  <h6 className="text-xs mt-2">
                    <strong>Specialized in:</strong> {node.specialization}
                  </h6>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {max <= 4 && data.allWorkJson.edges.length > 4 && (
        <div className="ml-12 mt-4 rounded-lg py-2 flex justify-center">
          <Tooltip title="Show More" placement="right">
            <div className="px-4" onClick={() => setMax(10)}>
              <MdMoreHoriz size="1.5rem" />
            </div>
          </Tooltip>
        </div>
      )}
    </section>
  )
}

export default Work
