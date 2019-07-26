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
            bookImages {
              fluid(maxHeight: 150) {
                ...GatsbyContentfulFluid
              }
            }
            id
            bookTitle
            slug
          }
        }
      }
    }
  `)

  return (
    <div className="my-container-flex">
      {data.allContentfulBook.edges.map(edge => (
        <Card
          key={edge.node.id}
          bg="dark"
          text="white"
          style={{ width: "15rem", margin: "1rem" }}
        >
          <Img fluid={edge.node.bookImages[0].fluid} />
          <Link to={`/property/${edge.node.slug}`}>{edge.node.bookTitle}</Link>
        </Card>
      ))}
    </div>
  )
}

export default PropertyList

/*
<Link to={`/property/${edge.node.slug}`}>{edge.node.bookTitle}</Link>
*/
