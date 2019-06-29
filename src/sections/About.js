import React from "react"
import { Box, Flex } from "rebass"
import Image from "gatsby-image"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import Fade from "react-reveal/Fade"
import { graphql, StaticQuery } from "gatsby"
import Section from "../components/Section"
import Triangle from "../components/Triangle"
import markdownRenderer from "../components/MarkdownRenderer"

const Background = () => (
  <div>
    <Triangle
      color="primary"
      height={["30vh", "20vh"]}
      width={["50vw", "50vw"]}
      invertY
    />

    <Triangle
      color="primary"
      height={["20vh", "40vh"]}
      width={["75vw", "70vw"]}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={["20vh", "20vh"]}
      width={["100vw", "100vw"]}
    />
  </div>
)

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="About me" icon="🙋‍♂️" label="person" />
    <StaticQuery
      query={graphql`
        query {
          profile: file(relativePath: { eq: "me-in-greece.jpg" }) {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <Fade bottom>
                <ReactMarkdown
                  source="Hi, I'm George"
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>

            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: "300px", margin: "auto" }}
            >
              <Fade right>
                <ProfilePicture
                  fixed={data.profile.childImageSharp.fixed}
                  alt="Profile"
                />
              </Fade>
            </Box>
          </Flex>
        )
      }}
    />
  </Section.Container>
)

export default About
