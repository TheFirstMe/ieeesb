import React from "react";
import { Link } from "gatsby";
import { Row, Col, Card } from "react-bootstrap";

class PostListing extends React.Component {
    getPostList() {
        const postList = [];
        this.props.postEdges.forEach(postEdge => {
            postList.push({
                path: postEdge.node.fields.slug,
                tags: postEdge.node.frontmatter.tags,
                cover: postEdge.node.frontmatter.cover,
                title: postEdge.node.frontmatter.title,
                date: postEdge.node.fields.date,
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
                            <Card className="w-100">
                                <Card.Body>
                                    <Card.Title>
                                        {post.title}
                                    </Card.Title>
                                    <Card.Subtitle>
                                        <span className="text-info">{post.date}</span>
                                    </Card.Subtitle>
                                    <Card.Text>{post.excerpt}</Card.Text>
                                    <Link to={post.path} className="btn btn-primary float-right">Read more</Link>
                                </Card.Body>
                            </Card>
                        </Row>
                    ))}
            </>
        );
    }
}

export default PostListing;
