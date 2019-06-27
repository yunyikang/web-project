import React from "react"
import Layout from "../components/layout"
import PropertyList from "../components/PropertyList"
import { Container } from "react-bootstrap"

const BuyerPage = () => (
  <Layout>
    <h3 style={{ margin: "2rem 4rem" }}>Listing</h3>
    <PropertyList />
  </Layout>
)
export default BuyerPage
