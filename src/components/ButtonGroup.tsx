import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

export default function ButtonGroup() {
    return (
        <Row>
            <Col md={3} sm={12}>
                <div className="d-grid m-2">
                    <Button className="nav-button glitch-style-1" size="lg">個人服務</Button>
                </div>
            </Col>
            <Col md={3} sm={12}>
                <div className="d-grid m-2">
                    <Button className="nav-button glitch-style-2" size="lg">公司服務</Button>
                </div>
            </Col>
            <Col md={3} sm={12}>
                <div className="d-grid m-2">
                    <Button className="nav-button glitch-style-3" size="lg">部落格</Button>
                </div>
            </Col>
            <Col md={3} sm={12}>
                <div className="d-grid m-2">
                    <Button className="nav-button glitch-style-4" size="lg">關於我們</Button>
                </div>
            </Col>
        </Row>
    );
}