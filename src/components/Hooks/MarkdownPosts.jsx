import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useEvents = () => {
    const data = useStaticQuery(
        graphql`
        query EventQuery {
            allMarkdownRemark(
              limit: 2000
              sort: { fields: [fields___date], order: DESC }
            ) {
              edges {
                node {
                  fields {
                    slug
                    date
                  }
                  excerpt(
                    pruneLength: 100,
                    truncate:true
                  )
                  timeToRead
                  frontmatter {
                    title
                    tags
                    featuredImage{
                      childImageSharp{
                        fluid(maxWidth: 800, quality: 80){
                          ...GatsbyImageSharpFluid_withWebp
                        }
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

export const useLatestPosts = () => {
    const postEdges = useEvents().edges.slice(0,4);
    return { edges: postEdges }
}