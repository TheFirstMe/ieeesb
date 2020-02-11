import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useExecom = (chair=false) => {
    const { allMembers, allChairs } = useStaticQuery(
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
                                          fluid(maxWidth: 180, quality: 100){
                                              ...GatsbyImageSharpFluid_withWebp
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
    if(!chair){
        return allMembers;
    }
    return allChairs;
}

