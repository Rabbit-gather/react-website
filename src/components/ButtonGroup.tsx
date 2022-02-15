import React, {ReactNode} from 'react';
import {Button, Col, Row} from "react-bootstrap";

interface ButtonGroupProps {
    navButtons?: Array<Link>
}

export default function ButtonGroup(
    {
        navButtons = [],
    } : ButtonGroupProps
){
    return (
        <Row>
            {navButtons.map((link, i)=>
                <Col key={i} md={Math.ceil(12 / navButtons.length)} sm={12}>
                    <div className="d-grid m-2">
                        <Button className="nav-button" size="lg" href={link.href}>
                            {link.text}
                        </Button>
                    </div>
                </Col>
            )}
        </Row>
    );
}