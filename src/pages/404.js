import React from "react"
import { Heading, Box } from "rebass"
import Layout from "../components/Layout"
import Section from "../components/Section"
import Triangle from "../components/Triangle"

const Background = () => (
  <div>
    <Triangle
      color="background"
      height={["35vh", "80vh"]}
      width={["95vw", "60vw"]}
    />

    <Triangle
      color="primary"
      height={["25vh", "35vh"]}
      width={["75vw", "60vw"]}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={["10vh", "20vh"]}
      width={["50vw", "50vw"]}
      invertX
      invertY
    />
  </div>
)

const NotFoundPage = () => (
  <Layout>
    <Section.Container id="404" Background={Background}>
      <Box width={[320, 400, 600]} m="auto">
        <Heading color="onSurface" fontSize={["8rem", "12rem", "15rem"]}>
          404
        </Heading>
        <Heading color="onSurface" fontSize={["3rem", "4rem", "5rem"]}>
          {"There isn't anything here"}
        </Heading>
      </Box>
    </Section.Container>
  </Layout>
)

export default NotFoundPage
