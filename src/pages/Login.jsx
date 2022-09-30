import React, {useState} from 'react';
import Helmet from "../components/Helmet/Helmet";
import {Col, Container, Form, FormGroup, Row} from "reactstrap";
import {Link} from "react-router-dom";
import '../style/login.css'

function Login(props) {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return (
        <Helmet title="Login">
            <Container>
                <Row>
                    <Col className="m-auto  text-center ">
                        <h3 className="fw-bold fs-4 mb-3">Login</h3>

                        <Form className="auth__form ">
                            <FormGroup className="form__group">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}

                                />
                            </FormGroup>
                            <button type="submit" className=" auth__btn">Login</button>
                            <p>
                                Don't have an account?{" "}
                                <Link to="/signup">Create an account</Link>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    );
}

export default Login;