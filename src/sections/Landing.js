import { Box, Flex, Heading, Text } from "rebass"
import React, { Fragment } from "react"
import { SectionLink } from "react-scroll-section"
import TextLoop from "react-text-loop"
import MouseIcon from "../components/MouseIcon"
import Section from "../components/Section"
import SocialLink from "../components/SocialLink"
import Triangle from "../components/Triangle"

const Background = () => (
  <div>
    <Triangle
      color="primaryDark"
      height={["15vh", "20vh"]}
      width={["95vw", "60vw"]}
    />

    <Triangle
      color="primaryDark"
      height={["15vh", "20vh"]}
      width={["50vw", "35vw"]}
    />

    <Triangle
      color="primary"
      height={["25vh", "35vh"]}
      width={["75vw", "60vw"]}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={["20vh", "20vh"]}
      width={["100vw", "100vw"]}
      invertX
      invertY
    />
  </div>
)

const centerHorizontally = { marginRight: "auto", marginLeft: "auto" }

// TODO: Get these with a GraphQL query
const github = {
  fontAwesomeIcon: "github",
  name: "Github",
  url: "https://github.com/georgesolomos",
}
const email = {
  fontAwesomeIcon: "envelope",
  name: "Email",
  // SocialLink function removes all 'remove' strings.
  // Used for rudimentary spam protection.
  url: "mailto:georgeremove@removegeorgeremovesolomos.com",
}
const linkedin = {
  fontAwesomeIcon: "linkedin",
  name: "LinkedIn",
  url: "https://au.linkedin.com/in/george-solomos",
}
const socialLinks = [github, email, linkedin]
const roles = ["Software Engineer 👨‍💻", "Food Enthusiast 🍱", "Traveller ✈️"]

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <Fragment>
      <Heading
        textAlign="center"
        as="h1"
        color="onSurface"
        fontSize={[5, 6, 8]}
        mb={[3, 4, 5]}
      >
        {`Hello, I'm George Solomos!`}
      </Heading>

      <Heading
        as="h2"
        color="onSurface"
        fontSize={[4, 5, 6]}
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}
      >
        <TextLoop>
          {roles.map(text => (
            <Text width={[300, 500]} key={text}>
              {text}
            </Text>
          ))}
        </TextLoop>
      </Heading>

      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        {socialLinks.map(links => (
          <Box mx={3} fontSize={[5, 6, 6]} key={links.name}>
            <SocialLink {...links} />
          </Box>
        ))}
      </Flex>
      <SectionLink section="about">
        {({ onClick }) => <MouseIcon onClick={onClick} />}
      </SectionLink>
    </Fragment>
  </Section.Container>
)

export default LandingPage
