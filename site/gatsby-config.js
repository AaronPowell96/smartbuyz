require("dotenv").config();

module.exports = {
  plugins: [
    // Tell gatsby which theme you will be using and other configs.
    {
      resolve: "gatsby-woocommerce-theme",
      options: {
        wordPressUrl: `https://www.smartbuyz.com.au/`,
        gatsbySiteUrl: `https://www.smartbuyz.com.au/`,
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
