import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaCalendarAlt } from "react-icons/fa";


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

const LatestPosts = () => (
    <StaticQuery
        query={graphql`query MainLayoutQuery {
  allMarkdownRemark(limit: 5, sort: {fields: [frontmatter___date], order: DESC}) {
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
            return <>
                <h3 className="boxed">
                    <span>Latest Posts</span>
                </h3>
                {postList.map(post => (
                    <Row key={post.title}>
                        <Col>
                            <Post className="my-3">
                                <PostImage>
                                    <Link style={{ textDecoration: 'none' }} to={post.path}>
                                        <GatsbyImage
                                            image={getImage(post.featuredImage)}
                                            title={post.title}
                                            alt={post.title} />
                                    </Link>
                                </PostImage>
                                <PostText>
                                    <Link style={{ textDecoration: 'none' }} to={post.path}>
                                        {post.title}
                                    </Link><br />
                                    <div className="small"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            padding: "3px 0px"
                                        }}>
                                        <FaCalendarAlt className="text-muted" />
                                        <span className="text-muted ml-1" style={{ fontSize: "90%" }}>
                                            {post.date}
                                        </span>
                                    </div>
                                </PostText>
                            </Post>
                        </Col>
                    </Row>
                ))}
            </>;
        }}
    />
);


export default LatestPosts;