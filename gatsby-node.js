const { paginate } = require("gatsby-awesome-pagination");
const {
  forEachIndexed,
  forEach,
  uniq,
  filter,
  not,
  isNil,
  chain,
} = require("rambdax");
const path = require("path");

const pageTypeRegex = /src\/(.*?)\//;
const getType = (node) => node.fileAbsolutePath.match(pageTypeRegex)[1];

const pageTemplate = path.resolve(`./src/templates/page.tsx`);
const indexTemplate = path.resolve(`./src/templates/index.tsx`);

function toKebabCase(value) {
  return value.replace(new RegExp("(\\s|_|-)+", "gmi"), "-");
}

exports.createPages = ({ actions, graphql, getNodes }) => {
  const { createPage } = actions;
  const allNodes = getNodes();

  return graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              title
              tags
            }
            fileAbsolutePath
          }
        }
      }
      site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const {
      allMdx: { edges: markdownPages },
      site: { siteMetadata },
    } = result.data;

    const sortedPages = markdownPages.sort((pageA, pageB) => {
      const typeA = getType(pageA.node);
      const typeB = getType(pageB.node);

      return (typeA > typeB) - (typeA < typeB);
    });

    const posts = allNodes.filter(
      ({ internal, fileAbsolutePath }) =>
        internal.type === "Mdx" && fileAbsolutePath.indexOf("/posts/") !== -1
    );

    // Create posts index with pagination
    paginate({
      createPage,
      items: posts,
      component: indexTemplate,
      itemsPerPage: siteMetadata.postsPerPage,
      pathPrefix: "/",
    });

    // Create each markdown page and post
    forEachIndexed(({ node }, index) => {
      const previous = index === 0 ? null : sortedPages[index - 1].node;
      const next =
        index === sortedPages.length - 1 ? null : sortedPages[index + 1].node;
      const isNextSameType = getType(node) === (next && getType(next));
      const isPreviousSameType =
        getType(node) === (previous && getType(previous));

      createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
        context: {
          type: getType(node),
          next: isNextSameType ? next : null,
          previous: isPreviousSameType ? previous : null,
        },
      });
    }, sortedPages);

    return {
      sortedPages,
    };
  });
};

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter!
    }

    type Frontmatter {
      title: String!
      author: String
      date: Date! @dateformat
      path: String!
      tags: [String!]
      excerpt: String
      coverImage: File @fileByRelativePath
    }
  `;
  createTypes(typeDefs);
};
