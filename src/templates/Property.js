import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    contentfulBook(slug: { eq: $slug }) {
      bookTitle
      bookImages {
        id
        fixed(height: 200, width: 270) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
const Property = ({ data, pageContext }) => {
  return (
    <Layout>
      <h3 style={{ margin: "2rem 4rem" }}>{data.contentfulBook.bookTitle}</h3>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {data.contentfulBook.bookImages.map(image => (
          <Img fixed={image.fixed} alt="img" />
        ))}
      </Container>
    </Layout>
  )
}

export default Property
