import React, { Fragment } from "react"
import PropTypes from "prop-types"

import Header from "./header"

import "bootstrap/dist/css/bootstrap.css"
import "./layout.scss"

const Layout = ({ children, isHome }) => {
  return (
    <Fragment>
      {isHome && (
        <div className="bg">
          <div className="overlay"></div>
        </div>
      )}
      <Header isHome={isHome} />
      <main>{children}</main>
      {!isHome && (
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      )}
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
