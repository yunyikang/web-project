import React from "react"
import { Link } from "gatsby"
import { Jumbotron, Container } from "react-bootstrap"

import Layout from "../components/layout"
//import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout isHome={true}>
      <div className="container my-container-index">
        <h1>Welcome</h1>
        <p>Find your dream home with me</p>
      </div>
    </Layout>
  )
}

export default IndexPage

/* 
<Container className="container-index">
        <Jumbotron>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div
            style={{
              maxWidth: `300px`,
              marginBottom: `1.45rem`,
            }}
          ></div>
          <Link to="/page-2/">Go to page 2</Link>
        </Jumbotron>
      </Container>

      
      */
