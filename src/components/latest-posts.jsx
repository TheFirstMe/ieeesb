import React from "react";
import { Link } from "gatsby";
import { Row, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaCalendarAlt } from "react-icons/fa";
import { useLatestEvents } from "../hooks";

import styled from "styled-components";
const Post = styled.div`
  display: flex;
`;

const PostImage = styled.div`
  flex: 40%;
  margin-right: 1rem;
`;

const PostText = styled.div`
  flex: 60%;
`;

export default function LatestPosts() {
  const { edges: postEdges } = useLatestEvents();
  return (
    <>
      <h3 className="boxed">
        <span>Latest Posts</span>
      </h3>
      {postEdges.map(
        ({
          node: {
            frontmatter: post,
            fields: { path, date },
          },
        }) => (
          <Row key={post.title}>
            <Col>
              <Post className="my-3">
                <PostImage>
                  <Link style={{ textDecoration: "none" }} to={path}>
                    <GatsbyImage
                      image={getImage(post.featuredImage)}
                      title={post.title}
                      alt={post.title}
                    />
                  </Link>
                </PostImage>
                <PostText>
                  <Link style={{ textDecoration: "none" }} to={path}>
                    {post.title}
                  </Link>
                  <br />
                  <div
                    className="small"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "3px 0px",
                    }}
                  >
                    <FaCalendarAlt className="text-muted" />
                    <span
                      className="text-muted ml-1"
                      style={{ fontSize: "90%" }}
                    >
                      {date}
                    </span>
                  </div>
                </PostText>
              </Post>
            </Col>
          </Row>
        )
      )}
    </>
  );
}
