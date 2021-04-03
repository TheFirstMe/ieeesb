import React from "react";
import { Link } from "gatsby";
import { Badge, Row, Col, Card } from "react-bootstrap";
import PostTags from "../PostTags/PostTags";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaCalendarAlt } from "react-icons/fa";
import styled from "styled-components";
import "./PostListing.scss";

const Post = styled.div`
  display: flex;
`;

const PostImage = styled.div`
  flex: 25%;
  margin-right: 1rem;
`;

const PostText = styled.div`
  flex: 75%;
`;

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        featuredImage: postEdge.node.frontmatter.featuredImage,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <Row>
        {
          /* Your post list here. */
          postList.map((post, key) => (
            // <Link to={post.path} key={post.title}>
            //   <h1>{post.title}</h1>
            // </Link>
            // <Row key={post.slug} className="my-5">
            <Col
              sm={12}
              md={6}
              lg={12}
              xl={6}
              key={key}
              className="d-flex py-3"
            >
              <Card className="post w-100 flex-fill">
                <Link to={post.path} className="stretched-link">
                  <GatsbyImage
                    image={getImage(post.featuredImage)}
                    className="card-img-top"
                    title={post.title}
                    alt={post.title}
                  />
                </Link>

                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "3px 0px",
                      fontSize: "70%",
                    }}
                  >
                    <FaCalendarAlt className="text-muted" />
                    <span className="text-muted" style={{ marginLeft: "5px" }}>
                      {post.date}
                    </span>
                  </div>
                  <Card.Text className="mt-3 small">{post.excerpt}</Card.Text>
                  <PostTags isStretched tags={post.tags} />
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
