import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Archive = () => (
  <Layout>
    <SEO title="Archive" />
    <h1>Archive</h1>
    <p>Welcome to Archive</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Archive