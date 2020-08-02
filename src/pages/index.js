import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Now go build something Awsome.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to about</Link> <br />
    <Link to="/archive/">Go to archive</Link> <br />
    <Link to="/projects/">Go to projects</Link> <br />

  </Layout>
)

export default IndexPage
