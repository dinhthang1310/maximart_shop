import React, {useEffect, useState} from 'react';
import Helmet from "../components/Helmet/Helmet";
import {Col, Container, Row} from "reactstrap";
import {motion} from "framer-motion";
import Services from "../Services/Services";
import products from "../assets/data/products";


import '../style/home.css'

import heroImg from '../assets/images/hero-img.png';
import counterImg from '../assets/images/counter-timer-img.png'
import {Link} from "react-router-dom";

import Clock from "../components/UI/Clock";
import ProductsList from "../components/UI/ProductsList";



function Home(props) {
    const [data,setData] = useState([]);
    const [bestSaleProducts,setBestSaleProducts] = useState([]);
    const [mobileProduct,setMobileProduct] = useState([]);
    const [wirelessProduct,setWirelessProduct] = useState([]);
    const [popularProduct,setPopularProduct] = useState([]);

    const year = new Date().getFullYear();

    useEffect(()=> {
        const filterProducts = products.filter(item=> item.category === 'chair');

        const filterBestSaleProducts = products.filter(item=> item.category === 'sofa');

        const filterMobileProducts = products.filter(item=> item.category === 'mobile');

        const filterWirelessProducts = products.filter(item=> item.category === 'wireless');

        const filterPopularProducts = products.filter(item=> item.category === 'watch');

        setData(filterProducts);
        setBestSaleProducts(filterBestSaleProducts)
        setMobileProduct(filterMobileProducts)
        setWirelessProduct(filterWirelessProducts)
        setPopularProduct(filterPopularProducts)
    },[])
    return (
        <Helmet title={"Home"}>
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero__content">
                                <p className="hero__subTitle">Trending product in {year}</p>
                                <h2>Make Your Interior More Minimalist & Modern</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                <motion.button whiletap={{scale :1.2}} className="shop__btn"><Link to='/shop'>Shop Now</Link></motion.button>
                            </div>
                        </Col>

                        <Col lg='6' md='6'>
                            <div className="hero__img">
                                <img src={heroImg} alt="hero"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Services/>

            <section className="trending__products">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section__title">Best Sales</h2>
                        </Col>
                        <ProductsList data={data} />
                    </Row>
                </Container>
            </section>

            <section className="best__sales">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section__title">Trending Products</h2>
                        </Col>
                        <ProductsList data={bestSaleProducts} />
                    </Row>
                </Container>
            </section>

            <section className="timer__count">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>

                            <div className="clock__top-content">
                                <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                                <h3 className="text-white fs-5 mb-2">Quality Armchair</h3>
                            </div>
                            <Clock/>
                            <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop'>Visit Store</Link></motion.button>
                        </Col>

                        <Col lg='6' md='6' className="text-end">
                            <img src={counterImg} alt=""/>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="new__arrival">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section__title mb-5">New Arrival</h2>
                        </Col>
                        <ProductsList data={mobileProduct} />
                        <ProductsList data={wirelessProduct} />
                    </Row>
                </Container>
            </section>

            <section className="popular__category">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section__title mb-5">Popular In Category</h2>
                        </Col>
                        <ProductsList data={popularProduct} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}

export default Home;