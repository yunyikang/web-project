const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const propertyTemplate = path.resolve("./src/templates/Property.js")
  const res = await graphql(`
    {
      allContentfulBook {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBook.edges.forEach(edge => {
    createPage({
      component: propertyTemplate,
      path: `/property/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
