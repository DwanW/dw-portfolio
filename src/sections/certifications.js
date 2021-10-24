import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Heading from "../components/heading"
import { AiFillSafetyCertificate, FaAngleRight } from "../components/icons"
import { sectionContainer, container } from "./certifications.module.css"

const Certifications = () => {
  const data = useStaticQuery(graphql`
    {
      allCertificationJson {
        edges {
          node {
            id
            subtitle
            title
          }
        }
      }
    }
  `)

  return (
    <section id="certifications">
      <Heading icon={AiFillSafetyCertificate} title="Certifications" />
      <div className={sectionContainer}>
        {data.allCertificationJson.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className={`${container}`}
            data-aos="fade-down"
            data-aos-duration={`${(index % 3) * 50 + 100}`}
          >
            <div className="mt-1 pr-6">
              <FaAngleRight />
            </div>
            <div>
              <h6 className="font-semibold">{node.title}</h6>
              <p className="text-sm">{node.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
