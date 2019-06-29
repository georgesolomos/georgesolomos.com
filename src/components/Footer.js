import React from "react"
import styled from "styled-components"
import { Text, Flex, Box } from "rebass"
import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import GatsbyLogo from "./logos/gatsby-name.svg"
import ReactLogo from "./logos/react-name.svg"
import GraphqlLogo from "./logos/graphql-name.svg"
import NetlifyLogo from "./logos/netlify-name.svg"

const FooterContainer = styled.footer`
  padding: 1em;
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.onSurface};
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ResponsiveLogo = styled.img`
  width: 100%;

  @media (min-width: 400px) {
    height: 40px;
  }
`

const Logo = ({ url, logo, alt = "" }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <ResponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
)

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

const Footer = () => (
  <FooterContainer>
    <Fade bottom>
      <span>
        <Text
          mb={2}
          pb={1}
          style={{
            textTransform: "uppercase",
            borderBottom: "white 3px solid",
            display: "table",
          }}
        >
          Powered By
        </Text>
      </span>
      <Flex justifyContent="space-around" alignItems="center">
        <Logo
          url="https://www.gatsbyjs.org/"
          logo={GatsbyLogo}
          alt="Gatsby logo"
        />
        <Logo url="https://reactjs.org/" logo={ReactLogo} alt="React logo" />
        <Logo
          url="https://graphql.org/"
          logo={GraphqlLogo}
          alt="GraphQL logo"
        />
        <Logo
          url="https://www.netlify.com/"
          logo={NetlifyLogo}
          alt="Netlify logo"
        />
      </Flex>
    </Fade>
  </FooterContainer>
)

export default Footer
