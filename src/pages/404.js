import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Sidebar from "../components/Sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";

const PageNotFound = () => {
    return (
        <Layout>
            <Helmet title={`Page not found | ${config.siteTitle}`} />
            <Row>
                <Col>
                    <div>
                        <h1>Page not found</h1>
                        <h4 className="mt-5">
                            <span className="strong">We are sorry, the page you are looking for has been moved or removed.</span>
                        </h4>
                        <p>One of the following options may help in locating the page you requested:</p>
                        <ul>
                            <li>Search for the content you’re looking for to find related content.</li>
                            <li>Check the URL in the address bar of your browser for possible misspellings.</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Layout>
    );
}

export default PageNotFound;
