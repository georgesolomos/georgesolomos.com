import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`george solomos`, `george`, `solomos`, `gatsby`, `react`]}
    />
    <h1>Hello world!</h1>
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>Stay tuned for more</p>
  </Layout>
)

export default IndexPage
