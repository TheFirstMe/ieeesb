const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/events/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/events/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/events/${parsedFilePath.name}/`;
    } else {
      slug = `/events/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/events/${_.kebabCase(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({
          node,
          name: "date",
          value: date.toISOString()
        });
      }
    }
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postPage = path.resolve("src/templates/post.jsx");
  const tagPage = path.resolve("src/templates/tag.jsx");
  const categoryPage = path.resolve("src/templates/category.jsx");
  const eventPage = path.resolve("src/templates/events.jsx");
  const execomPage = path.resolve("src/templates/execom-members.jsx")

  const execomQueryResult = await graphql(
    `
      {
        allExecomMembersJson(sort: {fields: year, order: DESC}) {
          edges {
            node {
              year
            }
          }
        }
      }
    `
  )

  if (execomQueryResult.errors) {
    console.error(execomQueryResult.errors);
    throw execomQueryResult.errors;
  }

  const execomEdges = execomQueryResult.data.allExecomMembersJson.edges;

  execomEdges.forEach((edge, index) => {
    const year = `${edge.node.year}-${Number(edge.node.year)+1}`
    createPage({
      path: index === 0 ? `/execom-members/` : `/execom-members/${year}/`,
      component: execomPage,
      context: {
        year: edge.node.year,
      }
    });
  });

  const markdownQueryResult = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                category
                date
              }
            }
          }
        }
      }
    `
  );

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  const tagSet = new Set();
  const categorySet = new Set();

  const postsEdges = markdownQueryResult.data.allMarkdownRemark.edges;

  postsEdges.sort((postA, postB) => {
    const dateA = moment(
      postA.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    const dateB = moment(
      postB.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  const postsPerPage = 8
  const numPages = Math.ceil(postsEdges.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/events/` : `/events/page/${i + 1}/`,
      component: eventPage,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      },
    });
  });

  postsEdges.forEach((edge, index) => {
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag);
      });
    }

    if (edge.node.frontmatter.category) {
      categorySet.add(edge.node.frontmatter.category);
    }

    const nextEdge = index + 1 < postsEdges.length ? postsEdges[index + 1] : null;
    const prevEdge = index - 1 >= 0 ? postsEdges[index - 1] : null;


    createPage({
      path: edge.node.fields.slug,
      component: postPage,
      context: {
        slug: edge.node.fields.slug,
        nexttitle: nextEdge ? nextEdge.node.frontmatter.title : null,
        nextslug: nextEdge ? nextEdge.node.fields.slug : null,
        prevtitle: prevEdge ? prevEdge.node.frontmatter.title : null,
        prevslug: prevEdge ? prevEdge.node.fields.slug : null
      }
    });
  });

  tagSet.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagPage,
      context: {
        tag
      }
    });
  });
  categorySet.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: categoryPage,
      context: {
        category
      }
    });
  });
};
