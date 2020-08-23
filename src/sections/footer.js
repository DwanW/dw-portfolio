import React from "react";
import Heading from "../components/heading";
import { FaInfoCircle, FaStar } from "../components/icons";
import { useStaticQuery, graphql } from "gatsby";
import Button from "../components/button";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "about-development" } }) {
        html
      }
    }
  `);

  return (
    <section id="footer">
      <Heading icon={FaInfoCircle} title="Foot note" />

      <div
        className="text-justify w-full md:w-4/5 lg:w-3/4"
        data-aos="fadeIn"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />

      <Button
        className="mt-6"
        icon={FaStar}
        title="Github Repo"
        onClick={() =>
          window.open(
            "https://github.com/DwanW/dw-portfolio",
            "_blank",
          )
        }
      />

      <div className="pt-24 pb-8 text-xs leading-relaxed opacity-25">
        <div>Licensed under MIT.</div>
        <div>Copyright {new Date().getFullYear()} Dwan W.</div>
        <div>Built with passion.</div>
      </div>
    </section>
  );
};

export default Footer;