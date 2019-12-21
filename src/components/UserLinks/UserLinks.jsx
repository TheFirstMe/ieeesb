import React, { Component } from "react";
import "./UserLinks.scss";
import { SocialIcon } from "react-social-icons";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <SocialIcon key={link.label} url={link.url} fgColor="#ffffff" rel="noopener noreferrer" target="_blank" style={{ height: 35, width: 35, margin: "0 0 0 22px" }} />
    ));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links" aria-hidden="true">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
