import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function useLatestEvents() {
  const data = useStaticQuery(
    graphql`
      query EventQuery {
        allMarkdownRemark(
          limit: 5
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
                date(formatString: "MMM Do YYYY")
              }
              excerpt(pruneLength: 100, truncate: true)
              timeToRead
              frontmatter {
                title
                tags
                featuredImage {
                  childImageSharp {
                    gatsbyImageData(
                      width: 800
                      aspectRatio: 1.5
                      quality: 80
                      layout: CONSTRAINED
                    )
                  }
                }
                date(formatString: "MMM Do YYYY")
              }
            }
          }
        }
      }
    `
  );
  return data.allMarkdownRemark;
}
