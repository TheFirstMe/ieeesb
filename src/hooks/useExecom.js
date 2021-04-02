import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useExecom = () => {
    const { allChairs } = useStaticQuery(
        graphql`{
  allChairs: allExecomMembersJson(sort: {fields: year, order: DESC}, limit: 1) {
    edges {
      node {
        execom {
          execomName
          execomColor
          chair {
            name
            designation
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 180
                  quality: 80
                  placeholder: TRACED_SVG
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
}
`
    )

    return allChairs;
}

