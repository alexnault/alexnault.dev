const postCssPresetEnv = require(`postcss-preset-env`);
const postCSSNested = require("postcss-nested");
const postCSSUrl = require("postcss-url");
const postCSSImports = require("postcss-import");
const cssnano = require("cssnano");
const postCSSMixins = require("postcss-mixins");

module.exports = {
  siteMetadata: {
    title: `Alex Nault`,
    description:
      "I solve problems using software and write bite-sized articles for developers.",
    copyrights: "",
    author: `Alex Nault`,
    twitterUsername: "@nault_alex",
    logo: {
      src: "",
      alt: "",
    },
    image: "/alex.jpg",
    logoText: "alexnault.dev",
    defaultTheme: "light",
    postsPerPage: 6,
    showMenuItems: 2,
    menuMoreText: "More",
    mainMenu: [
      {
        title: "Blog",
        path: "/blog",
      },
    ],
    siteUrl: "https://alexnault.dev",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-22359399-5",
        head: true,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postCSSUrl(),
          postCSSImports(),
          postCSSMixins(),
          postCSSNested(),
          postCssPresetEnv({
            importFrom: "src/styles/variables.css",
            stage: 1,
            preserve: false,
          }),
          cssnano({
            preset: "default",
          }),
        ],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter"],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Nault`,
        short_name: `Alex Nault`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#fe5186`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-catch-links`,
    "gatsby-plugin-svgr",
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-remove-generator",
  ],
};
