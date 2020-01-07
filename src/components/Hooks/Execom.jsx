import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useExecom = (chair=false) => {
    const { allMembers, allChairs } = useStaticQuery(
        graphql`
            query {
                allMembers: allExecomMembersJson(
                    filter: { year: { eq: "2019" } }
                  ) {
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
                                                ...GatsbyImageSharpFluid_withWebp_noBase64
                                            }
                                        }
                                    }
                                }
                                members{
                                    name
                                    designation
                                    image{
                                        childImageSharp{
                                            fluid(maxWidth: 180, quality: 80){
                                                ...GatsbyImageSharpFluid_withWebp_noBase64   
                                            }
                                        }
                                    }
                                }
                            }
                        }
                     }
                }

                allChairs: allExecomMembersJson(
                    filter: { year: { eq: "2019" } }
                  ) {
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
