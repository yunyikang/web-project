import React from "react"
import Layout from "../components/layout"
import PropertyList from "../components/PropertyList"
import { Container } from "react-bootstrap"

const BuyerPage = () => (
  <Layout>
    <div className="container my-container">
      <h3>Listing</h3>
      <PropertyList />
    </div>
  </Layout>
)
export default BuyerPage
