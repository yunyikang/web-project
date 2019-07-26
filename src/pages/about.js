import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"

const AboutPage = ({ data }) => (
  <Layout>
    <div className="container my-container">
      <h3>About Me</h3>
    </div>
  </Layout>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default AboutPage
