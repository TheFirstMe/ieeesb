import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";
import { Row, Col } from "react-bootstrap";

const $404Page = () => {
  return (
    <>
      <Helmet title={`Page not found | ${config.siteTitle}`} />
      <Row>
        <Col>
          <div>
            <h2>Page not found</h2>
            <h4 className="mt-4">
              <span className="strong">
                We are sorry, the page you are looking for has been moved or
                removed.
              </span>
            </h4>
            <p>
              One of the following options may help in locating the page you
              requested:
            </p>
            <ul>
              <li>
                Search for the content you’re looking for to find related
                content.
              </li>
              <li>
                Check the URL in the address bar of your browser for possible
                misspellings.
              </li>
              <li>
                Return to the previous page you were on and click the link
                again.
              </li>
              <li>Try searching for your page using the search box above.</li>
            </ul>
            <p>
              If you continue to have difficulty finding or accessing the page,
              please use the <Link to="/contact">contact form</Link> to report a
              problem and someone will get back to you as soon as possible.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default $404Page;
