import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"

const AboutPage = ({ data }) => (
  <Layout>
    <h3 style={{ margin: "2rem 4rem" }}>About Me</h3>
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
