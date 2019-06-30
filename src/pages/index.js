import React from "react"
import Layout from "../components/Layout"
import Landing from "../sections/Landing"
import About from "../sections/About"
import WorkExperience from "../sections/WorkExperience"
import Header from "../components/Header"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <WorkExperience />
    <Footer />
  </Layout>
)

export default IndexPage
