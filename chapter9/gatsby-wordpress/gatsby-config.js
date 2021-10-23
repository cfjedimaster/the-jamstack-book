module.exports = {
  siteMetadata: {
    title: "Gatsby Wordpress",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://gatsbysample.local/graphql",
      },
    },
  ],
};
