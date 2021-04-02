import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useLatestEvents = () => {
  const data = useStaticQuery(
    graphql`query EventQuery {
  allMarkdownRemark(limit: 4, sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        fields {
          slug
          date
        }
        excerpt(pruneLength: 100, truncate: true)
        timeToRead
        frontmatter {
          title
          tags
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800, quality: 80, layout: CONSTRAINED)
              thumbnail: gatsbyImageData(width: 500, height: 300, quality: 80, layout: CONSTRAINED)
            }
          }
          date(formatString: "MMM Do YYYY")
        }
      }
    }
  }
}
`
  )
  return data.allMarkdownRemark;
}