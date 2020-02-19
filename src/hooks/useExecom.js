import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useExecom = () => {
    const { allChairs } = useStaticQuery(
        graphql`
            query {
                allChairs: allExecomMembersJson(sort: {fields: year, order: DESC}, limit: 1) {
                    edges {
                      node {
                          execom{
                              execomName
                              execomColor
                              chair{
                                  name
                                  designation
                                  image{
                                      childImageSharp{
                                          fluid(maxWidth: 180, quality: 80){
                                              ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                          }
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

