import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <Container fluid="md">
            <div style={{ marginTop: "100px", textAlign: "center", fontSize: "40px" }}>
                Welcome to our
            </div>
            <div style={{ marginTop: "0px", textAlign: "center", fontSize: "90px" }}>
                Tech Company
            </div>
            <div style={{ marginTop: "50px" }}>
                <Link to="/users">
                    <Button variant="outline-primary">Fetch Users</Button>
                </Link>
            </div>
        </Container>
    )
}

export default Welcome
