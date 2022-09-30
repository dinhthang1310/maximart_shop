import React from 'react';
import '../../style/footer.css'
import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <footer className="footer">
            <Container>
                <Row >
                    <Col lg='4'>
                        <div className="logo">
                            <div>
                                <h1 className="text-white">Maximart</h1>
                            </div>
                        </div>
                        <p className="footer__text mt-4">
                            Lorem ipsum dolor sit amet consectetur adipicicing elit.
                            Cumque
                            dolor labore eveniet vitate nulla itaque soluta sit  provident
                            consectetur laboriosam?
                        </p>
                    </Col>

                    <Col lg='3'>
                        <div className="footer__quick-link">
                            <h4 className="quick__link-title">Top Categories</h4>
                            <ListGroup >
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Mobile Phones</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Modern Sofa</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Arm Chair</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Smart Watch</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="footer__quick-link">
                            <h4 className="quick__link-title">Useful Links</h4>
                            <ListGroup >
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='3'>
                        <div className="footer__quick-link">
                            <h4 className="quick__link-title">Contact</h4>
                            <ListGroup className="footer__contact">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p>Bạch Liêu, Tp Vinh, Nghệ An</p>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className="footer__contact">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-phone-line"></i></span>
                                    <p>098956789</p>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className="footer__contact">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-mail-line"></i></span>
                                    <p>coder@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>

                        </div>
                    </Col>

                    <Col lg='12'>
                        <p className="footer__copyright">Copyright 2022 developed by TT</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;