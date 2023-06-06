const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({
      node, // The node you'd like to convert to a path e.g. from a markdown, JSON, YAML file, etc
      getNode // Method used to get a node. The parameter from `onCreateNode` should be passed in here
    })
    createNodeField({
      node,
      name: `slug`,
      value: `${relativeFilePath}`
    })
  }
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach((edge) => {
    const id = edge.node.id
    const slug = edge.node.fields.slug
    actions.createPage({
      path: slug,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id
      }
    })
  })
}
