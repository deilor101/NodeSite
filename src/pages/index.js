import * as React from "react"
import Layout from "../components/layout"
import OnePage from "../components/OnePage"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <OnePage/>
  </Layout>
)

export default IndexPage
