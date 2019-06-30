import React from "react"
import PropTypes from "prop-types"
import ReactHelmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { withTheme } from "styled-components"

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
const Helmet = ({ description, lang, meta, keywords, title, theme = {} }) => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description
      return (
        <ReactHelmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              name: `theme-color`,
              content: theme.background,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                : []
            )
            .concat(meta)}
        >
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          />
        </ReactHelmet>
      )
    }}
  />
)

Helmet.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

Helmet.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.string),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line
  theme: PropTypes.object,
}

export default withTheme(Helmet)
