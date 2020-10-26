require("dotenv").config();

module.exports = {
  plugins: [
    // Tell gatsby which theme you will be using and other configs.
    {
      resolve: "gatsby-woocommerce-theme",
      options: {
        wordPressUrl: `${process.env.WORDPRESS_SITE_URL}`,
        gatsbySiteUrl: `${process.env.GATSBY_SITE_URL}`,
        googleTagManagerId: `${process.env.GOOGLE_TAGMANAGER_ID}`,
        fbAppId: `${process.env.FB_APP_ID}`,
      },
    },
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        schema: {
          timeout: 300000,
        },
        debug: {
          graphql: {
            copyHtmlResponseOnError: true,
          },
        },
      },
    },
  ],
};
