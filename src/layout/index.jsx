import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../scss/index.scss"
import { Container } from 'react-bootstrap';
import "./index.scss";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import PostTags from "components/PostTags/PostTags";

export default class MainLayout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <>
                <Helmet>
                    <meta name="description" content={config.siteDescription} />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:700" rel="stylesheet" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/holder/2.9.6/holder.js"></script>
                </Helmet>
                <div className="site">
                    <Header />
                    <div className="site-content pt-lg-3">
                        <Container>
                            {children}
                        </Container>
                    </div>
                    <Footer config={config} />
                </div>
            </>
        );
    }
}
