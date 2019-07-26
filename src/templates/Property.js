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
      <div className="container my-container">
        <h3>{data.contentfulBook.bookTitle}</h3>
        <div className="my-container-flex">
          {data.contentfulBook.bookImages.map(image => (
            <Img fixed={image.fixed} alt="img" />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Property
