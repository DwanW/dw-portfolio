import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div>
            <h1>My Thoughts</h1>
            <h4>data</h4>
        </div>
        <p>Now go build something Awesome.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
    </Layout>
)

export default IndexPage

// export const query = graphql`
//     query {
//   }
// `
