import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
        <div className="category-container">
          <Helmet
            title={`Posts in category "${category}" | ${config.siteTitle}`}
          />
          <PostListing postEdges={postEdges} />
        </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`query CategoryPage($category: String) {
  allMarkdownRemark(
    limit: 1000
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {category: {eq: $category}}}
  ) {
    totalCount
    edges {
      node {
        fields {
          slug
          date(formatString: "MMM Do YYYY")
        }
        excerpt
        timeToRead
        frontmatter {
          title
          tags
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800, quality: 80, layout: CONSTRAINED)
            }
          }
          date(formatString: "MMM Do YYYY")
        }
      }
    }
  }
}
`;
