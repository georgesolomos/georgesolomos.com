import React, { Fragment } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import { ScrollingProvider } from "react-scroll-section"
import "react-tippy/dist/tippy.css"
import config from "react-reveal/globals"
import colors from "../../colors"
import Helmet from "./Helmet"

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before { 
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  }

body {
  -webkit-box-sizing: border-box;
  box-sizing: border-box; 
  margin: 0;
  font-family: Cabin;
  overflow-x: hidden;
  background-color: ${colors.background};
}
`

config({ ssrFadeout: true })

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={{ colors }}>
      <ScrollingProvider>
        <Helmet
          title="George Solomos"
          keywords={[`george solomos`, `george`, `solomos`, `gatsby`, `react`]}
        />
        {children}
      </ScrollingProvider>
    </ThemeProvider>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
