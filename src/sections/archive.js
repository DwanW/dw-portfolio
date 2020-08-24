import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
import Heading from "../components/heading";
import { FaLink, IoIosJournal, FaGithub } from "../components/icons";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./archive.module.css";

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
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

    return (
        <section id="archive">
            <Heading icon={IoIosJournal} title="Archive" />

            <div className={styles.container}>
                {data.allArchiveJson.edges.map(({ node }, idx) => (
                    <div
                        className={styles.gadget}
                        key={node.id}
                        data-aos="zoom-in"
                        data-aos-delay={`${idx * 50 + 200}`}
                    >
                        <Tooltip title={node.label} placement="top">
                            <OutboundLink
                                href={node.website || node.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-auto bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
                            >
                                <FaLink className="absolute" color="#FFF" size="5rem" />
                                <GatsbyImage
                                    className="absolute w-full h-full object-cover rounded-lg hover:opacity-50 duration-200"
                                    {...node.icon.childImageSharp}
                                />
                                <span className="sr-only">{node.title}</span>
                            </OutboundLink>
                        </Tooltip>
                        <h5 className="mt-4 font-semibold">{node.title}</h5>

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
    );
};

export default Archive;