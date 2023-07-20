module.exports = {
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "n82qji1yn2a6",
        accessToken: "D3OIrasj6u7X4Kr8Oietel1RUDUo9-EMQEJ0Jj-dABE",
      },
    },
  ],
};
