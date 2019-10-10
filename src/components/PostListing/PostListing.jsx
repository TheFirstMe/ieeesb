import React from "react";
import { Link } from "gatsby";
import { Badge, Row, Col, Card } from "react-bootstrap";
import PostTags from "../PostTags/PostTags";
import {FaClock} from "react-icons/fa";
import {IconContext} from "react-icons";
import './PostListing.scss';
const Filler = () => (
    <div className="w-100" style={{ height: "350px", backgroundColor: 'grey' }} >
    </div>
);

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
            <>
                {/* Your post list here. */
                    postList.map(post => (
                        // <Link to={post.path} key={post.title}>
                        //   <h1>{post.title}</h1>
                        // </Link>
                        <Row key={post.title} className="my-5">
                            <Col>
                                <Card className="post w-100">
                                    {/* <Card.Img variant="top" src={} style={{ maxwidth: '300px' }} /> */}
                                    <Filler />
                                    <Card.Body>
                                        <Card.Title>
                                            {post.title}
                                        </Card.Title>
                                        <Card.Subtitle>
                                        {/* <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}> */}
                                            
                                        {/* </IconContext.Provider> */}
                                            <span className="text-info"><FaClock className="text-muted" /> {post.date}</span>
                                        </Card.Subtitle>
                                        <Card.Text>{post.excerpt}</Card.Text>
                                        <PostTags tags={post.tags} />
                                        <Link to={post.path} className="btn btn-primary float-right">Read more</Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    ))}
            </>
        );
    }
}

export default PostListing;
