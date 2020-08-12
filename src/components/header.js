import PropTypes from "prop-types"
import React from "react"

import { Link } from "gatsby";
import {NavLink} from './header.styles'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav>
        <NavLink to="/about/" >Go to about</NavLink> <br />
        <NavLink to="/archive/" >Go to archive</NavLink> <br />
        <NavLink to="/projects/" >Go to projects</NavLink> <br />
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
