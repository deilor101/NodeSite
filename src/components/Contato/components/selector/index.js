import React from 'react';
import { Tab, Row, Col, Nav, Sonnet } from 'react-bootstrap';
import Window from '../window';
import './style.css';

export default function Seletor() {
    return(
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col md={4}>
                <Nav variant="pills" className="flex-column teste-tab mr-6">
                    <Nav.Item>
                    <Nav.Link eventKey="first">TELEFONE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">EMAIL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">INSTAGRAM</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="fourth">BEHANCE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="fifth">LINKEDIN</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={7}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Window title="Telefone"></Window>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Window title="Email"></Window>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Window title="Instagram"></Window>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <Window title="Behance"></Window>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                    <Window title="Linkedin"></Window>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
</Tab.Container>
    )
}