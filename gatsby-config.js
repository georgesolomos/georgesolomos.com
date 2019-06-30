require("dotenv").config()
const colors = require("./colors")

module.exports = {
  siteMetadata: {
    title: `George Solomos`,
    description: `The home of George Solomos on the web`,
    author: `@georgesolomos`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `georgesolomos.com`,
        short_name: `georgesolomos.com`,
        start_url: `/`,
        background_color: colors.background,
        theme_color: colors.primary,
        display: `standalone`,
        // This path is relative to the root of the site
        icon: `src/images/logos/georgesolomos-dark.svg`,
        include_favicon: true,
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["cabin", "Open Sans"],
      },
    },
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
  ],
}
