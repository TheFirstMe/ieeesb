import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../scss/index.scss"
import { Container, Row, Col } from 'react-bootstrap';
import "./index.scss";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Calendar from "../components/Calendar/Calendar";
import { graphql, StaticQuery, Link } from "gatsby";
// import PostTags from "components/PostTags/PostTags";

const Filler = () => (
    <div
        className="hehe"
        style={{
            width: "218px",
            height: "60px",
            backgroundColor: "grey"
        }}
    />
);

export default class MainLayout extends React.Component {
    LatestPosts() {
        return (
            <StaticQuery
                query={graphql`
              query MainLayoutQuery {
                allMarkdownRemark(
                  limit: 3
                  sort: { fields: [fields___date], order: DESC }
                ) {
                  edges {
                    node {
                      fields {
                        slug
                        date
                      }
                      excerpt
                      timeToRead
                      frontmatter {
                        title
                        tags
                        cover
                        date
                      }
                    }
                  }
                }
              }
            `}
                render={data => {
                    const postEdges = data.allMarkdownRemark.edges;
                    const postList = [];
                    postEdges.forEach(postEdge => {
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
                    return (
                        <>
                            <h3 className="boxed">
                                <span>Latest Posts</span>
                            </h3>
                            {postList.map(post => (
                                <Row key={post.title}>
                                    <Col>
                                        <div className="mt-4" style={{ position: "relative", minHeight: "55px" }}>
                                            <div className="hello">
                                                <Filler />
                                            </div>
                                            <h6 style={{ marginLeft: "90px" }}>
                                                <Link to={post.path}>
                                                    {post.title}
                                                </Link>
                                            </h6>
                                        </div>
                                        <p className="text-muted mt-3" >
                                            {
                                                post.excerpt.length > 51 ?
                                                    `${post.excerpt.substring(0, 50)}...` :
                                                    `${post.excerpt}`
                                            }
                                        </p>
                                    </Col>
                                </Row>
                            ))}
                        </>
                    );
                }}
            />
        );
    }
    SignUpComponent() {
        return (
            <>
                <h3 className="boxed">
                    <span>Membership</span>
                </h3>

                <div className="banner-wrapper mt-4">
                    <h4>
                        <span>Become a Member</span>
                    </h4>
                    <div className="banner-wrapper small">
                        <p>Sign up today to get involved in IEEE SB GCEK.</p>
                    </div>
                    <a className="btn btn-yellow"
                        href="https://www.ieee.org/go/join_student/"
                        title="Join IEEE"
                        target="_blank"
                        style={{ marginBottom: "45px" }}
                    >
                        Join IEEE
                    </a>
                </div>
            </>
        );
    }

    // LatestPosts() {
    //     return (
    //         <>
    //             <h3 className="boxed">
    //                 <span>Latest Posts</span>
    //             </h3>

    //             {/* <div className="banner-wrapper mt-4">
    //                 <h4 className>
    //                     <span>Become a Member</span>
    //                 </h4>
    //                 <div className="banner-wrapper small">
    //                     <p>Sign up today to get involved in IEEE SB GCEK.</p>
    //                 </div>
    //                 <a className="btn btn-yellow"
    //                     href="https://www.ieee.org/go/join_student/"
    //                     title="Join IEEE"
    //                     target="_blank"
    //                     style={{ marginBottom: "45px" }}
    //                 >
    //                     Join IEEE
    //                 </a>
    //             </div> */}
    //         </>
    //     )
    // }

    render() {
        const { children, isHome } = this.props;
        console.log(isHome);
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
                        {/* {children} */}
                        <Container>
                            <Row>
                                <Col md={12} lg={8} className="py-2 py-lg-0">
                                    {children}
                                </Col>
                                <Col md={12} lg={4} className="py-2 py-lg-0">
                                    <Row className="ml-lg-1">
                                        <Col xs={12}>
                                            {isHome && <this.SignUpComponent />}
                                            {!isHome && <this.LatestPosts />}
                                        </Col>
                                        <Col className="pt-4 pt-lg-0">
                                            <h3 className="boxed mb-4">
                                                <span>Calendar</span>
                                            </h3>
                                            <Calendar />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <Footer config={config} />
                </div>
            </>
        );
    }
}
