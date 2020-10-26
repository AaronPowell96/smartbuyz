require("dotenv").config();

module.exports = {
  plugins: [
    // Tell gatsby which theme you will be using and other configs.
    {
      resolve: "gatsby-woocommerce-theme",
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
