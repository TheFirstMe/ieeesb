import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { Badge } from 'react-bootstrap';
import "./PostTags.scss";
class PostTags extends Component {
  render() {
    const { tags, isPost } = this.props;
    return (
      <>
        { isPost && tags && <p className="text-muted">Tags:</p>}
        <ul className="post-tags mt-3">
          {tags &&
            tags.map(tag => {
              const variants = {
                "sb": "primary",
                "ias": "success",
                "pels": "danger",
                "wie": "purple"
              }
              const variant = variants[tag] ? variants[tag] : "dark"
              return (
                <li key={tag}>
                  <Link
                    to={`/tags/${_.kebabCase(tag)}`}
                  >
                    <Badge variant={variant} className="text-lowercase rounded-sm">{tag}</Badge>
                  </Link>
                </li>
            )})}
        </ul>
      </>
    );
  }
}

export default PostTags;
