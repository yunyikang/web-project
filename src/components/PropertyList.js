import React, { Fragment } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Card, Container } from "react-bootstrap"
import Img from "gatsby-image"

const PropertyList = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBook {
        edges {
          node {
            id
            bookTitle
            slug
            bookImages {
              fixed(height: 200, width: 270) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {data.allContentfulBook.edges.map(edge => (
        <Card
          key={edge.node.id}
          bg="dark"
          text="white"
          style={{ width: "17rem" }}
        >
          <Img fixed={edge.node.bookImages[0].fixed} />
          <Link to={`/property/${edge.node.slug}`}>{edge.node.bookTitle}</Link>
        </Card>
      ))}
    </Container>
  )
}

export default PropertyList
