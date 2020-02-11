import React from "react";
import Helmet from "react-helmet";
import { graphql, navigate } from "gatsby";
import ExecomMembers from "../components/ExecomMembers/ExecomMembers";
import config from "../../data/SiteConfig";
import Sidebar from "../components/Sidebar/Sidebar";
import { Row, Col, Form } from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumbs"
import { useExecom } from "../components/Hooks/Execom";
import styled from "styled-components"

const yearSelectProps = { isOpen: Boolean }

const YearSelect = styled('div', yearSelectProps)`
    margin-top: 5px;
    position: relative;
    .year-dropdown {
        display: ${props => props.isOpen ? 'block' : 'none'};
        position: absolute;
        left: 0;
        background: blue;
    }
`

export default ({ data, pageContext }) => {
    const {
        breadcrumb: { crumbs },
        year
    } = pageContext
    const yearEdges = data.allYears.edges
    const changeYear = e => {
        const year = Number(e.target.value)
        navigate(year ? `/execom-members/${year}-${year + 1}` : `/execom-members`)
    }
    return (
        <>
            <Helmet title={`Execom Members | ${config.siteTitle}`} />

            <Row>
                <Col md={12} lg={8} className="py-2 py-lg-0">
                    {/* <div className="d-flex justify-content-between"> */}
                    <Breadcrumb crumbs={crumbs.slice(0, 2)} crumbLabel={`Execom Members (${year} - ${Number(year) + 1})`}>
                        {/* <select onChange={changeYear} value={year}>
                            {years.map((y, key) => (
                                <option value={y} key={key}>{y}</option>
                            ))}
                        </select> */}
                        <Form>
                            <Form.Control as="select" size="sm" onChange={changeYear} defaultValue={year}>
                                {/* <option value="default" hidden>Select year</option> */}
                                {yearEdges.map(({ node }, index, key) => {
                                    return (
                                        <option value={index === 0 ? '' : node.year} key={key}>{`${node.year} - ${Number(node.year) + 1}`}</option>
                                    )
                                })}
                            </Form.Control>
                        </Form>
                        {/* <DropdownButton size="sm" drop="right" id="execom-year" title="Select year">
                            <Dropdown.Menu>
                                <Dropdown.Item href="/events">
                                    Action 1
                            </Dropdown.Item>
                                <Dropdown.Item href="/events">
                                    Action 2
                            </Dropdown.Item>
                            </Dropdown.Menu>
                        </DropdownButton> */}
                        {/* <DropdownButton id="aloy-setta" title="Click me" size="xs">
                            <Dropdown.Item href="/events">
                                Action 1
                            </Dropdown.Item>
                            <Dropdown.Item href="/events">
                                Action 2
                            </Dropdown.Item>
                        </DropdownButton> */}

                    </Breadcrumb>
                    {/* <Dropdown>
                            <Dropdown.Toggle id="execom-year">Select Year</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/events">
                                    Action 1
                            </Dropdown.Item>
                                <Dropdown.Item href="/events">
                                    Action 2
                            </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                    {/* </div> */}
                    <ExecomMembers members={data.execomMembersJson} />
                </Col>
                <Col md={12} lg={4} className="py-2 py-lg-0">
                    <Sidebar type="secondary" />
                </Col>
            </Row>
        </>
    );
}

/* eslint no-undef: "off" */

export const execomQuery = graphql`
    query ExecomByYear($year: Date!) {
        execomMembersJson(year: { eq: $year } ) {
            year
            execom {
                execomName
                execomColor
                chair {
                    name
                    designation
                    image{
                        childImageSharp {
                            fluid(maxWidth: 180, quality: 80){
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                    }
                }
                members {
                    name
                    designation
                    image {
                        childImageSharp{
                            fluid(maxWidth: 180, quality: 80){
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                    }
                }
            }
        }
        allYears: allExecomMembersJson(sort: {fields: year, order: DESC}) {
                    edges {
                        node {
                            year
                        }
                    }
                  }
    }
`