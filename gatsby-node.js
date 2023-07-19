const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      categories: allContentfulCategory {
        edges {
          node {
            category
            slug
          }
        }
      }
    }
  `);
  const { categories } = data;
  const categoryTemplate = path.resolve("src/templates/category.js");
  categories.edges.forEach((category) => {
    createPage({
      path: "/" + category.node.slug,
      component: categoryTemplate,
      context: {
        slug: category.node.slug,
      },
    });
  });
};
