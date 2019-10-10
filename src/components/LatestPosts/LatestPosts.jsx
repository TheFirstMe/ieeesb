import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import {Row, Col} from 'react-bootstrap';

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

function LatestPosts() {
    return (
        <StaticQuery
            query={graphql`
          query MainLayoutQuery {
            allMarkdownRemark(
              limit: 3
              sort: { fields: [fields___date], order: DESC }
            ) {
              edges {
                node {
                  fields {
                    slug
                    date
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
                    date
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
                                    <div className="mt-4" style={{ position: "relative", minHeight: "55px" }}>
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
                                    </p>
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