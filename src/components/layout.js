import React, { Fragment } from "react"
import PropTypes from "prop-types"

import Header from "./header"

import "bootstrap/dist/css/bootstrap.css"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <footer
        style={{ textAlign: "center", background: "#6c757d", color: "white" }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
