import React from "react";
import { Link } from "gatsby";
import { Badge, Row, Col, Card } from "react-bootstrap";
import PostTags from "../PostTags/PostTags";
import Img from "gatsby-image";
import { FaCalendarAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "styled-components";
import './PostListing.scss';
const Filler = () => (
    <div className="w-100" style={{ height: "350px", backgroundColor: 'grey' }} >
    </div>
);


const Post = styled.div`
    display: flex;
`

const PostImage = styled.div`
    flex: 25%;
    margin-right: 1rem;
`

const PostText = styled.div`
    flex: 75%;
`

class PostListing extends React.Component {
    getPostList() {
        const postList = [];
        this.props.postEdges.forEach(postEdge => {
            postList.push({
                path: postEdge.node.fields.slug,
                tags: postEdge.node.frontmatter.tags,
                featuredImage: postEdge.node.frontmatter.featuredImage,
                title: postEdge.node.frontmatter.title,
                date: postEdge.node.frontmatter.date,
                excerpt: postEdge.node.excerpt,
                timeToRead: postEdge.node.timeToRead
            });
        });
        return postList;
    }
    render() {
        const postList = this.getPostList();
        return (
            <Row>
                {/* Your post list here. */
                    postList.map((post, key) => (
                        // <Link to={post.path} key={post.title}>
                        //   <h1>{post.title}</h1>
                        // </Link>
                        // <Row key={post.slug} className="my-5">
                            <Col sm={12} xl={6} key={key} className="py-5 py-xl-3">
                                <Card className="post w-100">
                                    <Link to={post.path}>
                                        <Img fluid={post.featuredImage.childImageSharp.fluid} className="card-img-top" />
                                    </Link>
                                    
                                    <Card.Body>
                                        <Card.Title>
                                            {post.title}
                                        </Card.Title>
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
                                        <Card.Text className="mt-3 small">
                                            {post.excerpt}
                                            <Link className="text-decoration-none" to={post.path}> Read more</Link>    
                                        </Card.Text>
                                        <PostTags tags={post.tags} />
                                        {/* <Link to={post.path} className="btn btn-primary float-right">Read more</Link> */}
                                    </Card.Body>
                                </Card>
                            </Col>

                        // </Row>
                    ))
                }
            </Row>
        );
    }
}

export default PostListing;
