import React from "react";
import Helmet from "react-helmet";
import ExecomMembers from "../components/ExecomMembers/ExecomMembers";
import config from "../../data/SiteConfig";
import Sidebar from "../components/Sidebar/Sidebar";
import { Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumbs"
import { useExecom } from "../components/Hooks/Execom";

export default ({ pageContext }) => {
    const {
        breadcrumb: { crumbs },
    } = pageContext
    const data = useExecom();
    return (
        <>
            <Helmet title={`Execom Members | ${config.siteTitle}`} />

            <Row>
                <Col md={12} lg={8} className="py-2 py-lg-0">
                    {/* <div className="d-flex justify-content-between"> */}
                    <Breadcrumb crumbs={crumbs} crumbLabel="Execom Members">
                        <DropdownButton size="sm" drop="right" id="execom-year" title="Select year">
                            {/* <Dropdown.Menu> */}
                                <Dropdown.Item href="/events">
                                    Action 1
                            </Dropdown.Item>
                                <Dropdown.Item href="/events">
                                    Action 2
                            </Dropdown.Item>
                            {/* </Dropdown.Menu> */}
                        </DropdownButton>
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
                    <ExecomMembers members={data.edges[0]} />
                </Col>
                <Col md={12} lg={4} className="py-2 py-lg-0">
                    <Sidebar type="secondary" />
                </Col>
            </Row>
        </>
    );
}