import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import { FaCalendarAlt } from "react-icons/fa";
import { Row, Col, Card } from "react-bootstrap";
import PrevAndNext from "../components/prev-and-next";
import styled from "styled-components";
import Breadcrumb from "../components/Breadcrumbs"

const PaginationDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding: 2rem 0.3rem;
  //border-top: 1.5px solid rgba(231, 233, 238,0.5);
  //border-bottom: 1.5px solid rgba(231, 233, 238,0.5);
  @media (min-width: 768px) { 
    padding: 2.5rem 1.8rem;
  }
`



const PostTemplate = ({ data, pageContext }) => {
  const { slug, nextslug, prevslug, prevtitle, nexttitle, breadcrumb: { crumbs } } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  const title = post.title
  if (!post.id) {
    post.id = slug;
  }
  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID;
  }
  return (
    <>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Breadcrumb crumbs={crumbs} crumbLabel={post.title} />
      <Row>
        <Col lg={8} md={12}>
          <h1 className="mb-3">{post.title}</h1>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "3px 0px",
              fontSize: "80%"
            }}>
            <FaCalendarAlt className="text-muted" />
            <span className="text-muted" style={{ marginTop: "1px", marginLeft: "6px" }}>
              {post.date}
            </span>
          </div>
          <PostTags tags={post.tags} />
          <Card className="mt-4 border-0">
            <Img
              fluid={post.featuredImage.childImageSharp.fluid}
              placeholderStyle={{ filter: "blur(20px)" }}
              className="card-img-top"
              title={post.title}
              alt={post.title} />
            <Card.Body>
              {post.venue && <div className="mt-2"> <strong>Venue: </strong>{post.venue} </div>}
              <div className="post-content mt-3" dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </Card.Body>
            <Card.Footer className="border" style={{
              backgroundColor: "white"
            }}>
              <SocialLinks postPath={slug} postNode={postNode} mobile />
            </Card.Footer>
          </Card>
          <PaginationDiv className="mb-5">
            <PrevAndNext
              prev={
                prevtitle && {
                  title: prevtitle,
                  link: prevslug
                }
              }
              next={
                nexttitle && {
                  title: nexttitle,
                  link: nextslug
                }
              }
            >
            </PrevAndNext>
          </PaginationDiv>
          {/* <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta mt-5">
              
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
            */}
          {/* <UserInfo config={config} /> */}
          {/* <LazyLoad width="100%" onContentVisible={() => console.log('look ma I have been lazyloaded!')}>
            <DiscussionEmbed {...disqusConfig({ slug, title })} />
          </LazyLoad> */}
          {/* <Disqus slug={slug} title={title} /> */}
        </Col>
        <Col md={12} lg={4} className="py-2 py-lg-0">
          <Sidebar type="secondary" />
        </Col>
      </Row>
    </>
  );
}

export default PostTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt(
        pruneLength: 50,
        truncate:true
      )
      frontmatter {
        title
        date(formatString: "MMM Do YYYY")
        category
        tags
        venue
        featuredImage{
          childImageSharp{
            fluid(maxWidth: 800, quality: 80){
                ...GatsbyImageSharpFluid_withWebp
                
            }
          }
        }
      }
      fields {
        slug
        date
      }
    }
  }
`;
