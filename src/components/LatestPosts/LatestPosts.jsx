import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import Img from "gatsby-image";
import { FaCalendarAlt } from "react-icons/fa";
const Filler = () => (
    <div
        className="hehe"
        style={{
            width: "218px",
            height: "60px",
            backgroundColor: "grey"
        }}
    />
);

import styled from "styled-components";
const Post = styled.div`
    display: flex;
`

const PostImage = styled.div`
    flex: 40%;
    margin-right: 1rem;
`

const PostText = styled.div`
    flex: 60%;
`

function LatestPosts() {
    return (
        <StaticQuery
            query={graphql`
          query MainLayoutQuery {
            allMarkdownRemark(
              limit: 5
              sort: { fields: [fields___date], order: DESC }
            ) {
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
        `}
            render={data => {
                const postEdges = data.allMarkdownRemark.edges;
                const postList = [];
                postEdges.forEach(postEdge => {
                    postList.push({
                        path: postEdge.node.fields.slug,
                        tags: postEdge.node.frontmatter.tags,
                        featuredImage: postEdge.node.frontmatter.featuredImage,
                        title: postEdge.node.frontmatter.title,
                        date: postEdge.node.fields.date,
                        excerpt: postEdge.node.excerpt,
                        timeToRead: postEdge.node.timeToRead
                    });
                });
                return (
                    <>
                        <h3 className="boxed">
                            <span>Latest Posts</span>
                        </h3>
                        {postList.map(post => (
                            <Row key={post.title}>
                                <Col>
                                    {/* <div className="mt-4" style={{ position: "relative", minHeight: "55px" }}>
                                        <div className="hello">
                                            <Filler />
                                        </div>
                                        <h6 style={{ marginLeft: "90px" }}>
                                            <Link to={post.path}>
                                                {post.title}
                                            </Link>
                                        </h6>
                                    </div>
                                    <p className="text-muted mt-3" >
                                        {
                                            post.excerpt.length > 51 ?
                                                `${post.excerpt.substring(0, 50)}...` :
                                                `${post.excerpt}`
                                        }
                                    </p> */}
                                    <Post className="my-3">
                                        <PostImage>
                                            <Link style={{ textDecoration: 'none' }} to={post.path}>
                                                    <Img 
                                                        fluid={post.featuredImage.childImageSharp.fluid} 
                                                        placeholderStyle={{ filter: "blur(20px)" }}     
                                                    />  
                                            </Link>
                                        </PostImage> 
                                        <PostText>
                                            <Link style={{ textDecoration: 'none' }} to={post.path}>
                                                {post.title}
                                            </Link><br/>
                                            <div className="small" 
                                                 style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    padding: "3px 0px"
                                                }}>
                                                <FaCalendarAlt className="text-muted" />
                                                <span className="text-muted ml-1" style={{fontSize: "90%"}}>
                                                    {post.date}
                                                </span>
                                            </div>
                                            {/* <small>
                                            <span>
                                                <FaCalendarAlt className="text-muted" />
                                            </span>

                                            <span className="ml-1 text-muted" style={{fontSize: "70%"}}>
                                                {post.date}
                                            </span>
                                            </small> */}
                                        </PostText>
                                    </Post>
                                    {/* <p className="text-muted small mt-3" >
                                        {
                                            post.excerpt
                                        }
                                    </p> */}
                                </Col>
                            </Row>
                        ))}
                    </>
                );
            }}
        />
    );
}

export default LatestPosts;