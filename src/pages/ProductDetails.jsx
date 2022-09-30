import React from 'react';
import {useParams} from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import {Col, Container, Row} from "reactstrap";
import {motion} from "framer-motion";
import {toast} from "react-toastify";

import '../style/productDetail.css'
import ProductsList from "../components/UI/ProductsList";
import {useDispatch} from "react-redux";
import {cartActions} from "../redux/slice/cartSlice";

function ProductDetails(props) {

    const {id} = useParams()
    const product = products.find(item=> item.id === id)
    const {imgUrl, productName, price, avgRating, review, description, shortDesc,category} = product
    const relatedProducts = products.filter(item => item.category === category)

    const dispatch = useDispatch()
    const addToCart = ()=> {
        dispatch(cartActions.addItem({
            id,
            image : imgUrl,
            productName,
            price,
        }))
        toast.success("Products added to Cart success")
    }
    return (
        <Helmet title={productName}>
            <CommonSection title={productName}/>
                <section className="pt-0">
                    <Container>
                        <Row>
                            <Col lg='6'>
                                <img src={imgUrl} alt="" className="w-100"/>
                            </Col>

                            <Col lg='6'>
                                <div className="product__details">
                                    <h2>{productName}</h2>
                                    <div className="product__rating d-flex align-items-center gap-4 mb-3">
                                        <div>
                                            <span><i className="ri-star-fill"></i></span>
                                            <span><i className="ri-star-fill"></i></span>
                                            <span><i className="ri-star-fill"></i></span>
                                            <span><i className="ri-star-fill"></i></span>
                                            <span><i className="ri-star-half-line"></i></span>
                                        </div>
                                        <p>(<span>{avgRating}</span> rating)</p>
                                    </div>

                                    <span className="product__price">${price}</span>
                                    <p className="mt-3">{shortDesc}</p>

                                    <motion.button whileTap={{scale:1.2}} className="buy__btn" onClick={addToCart}>Add to Cart</motion.button>
                                </div>
                            </Col>

                            <Col lg='12' className="mt-5">
                                <h2 className="related__title">You might also like</h2>
                            </Col>
                            <ProductsList data={relatedProducts}/>
                        </Row>
                    </Container>
                </section>
        </Helmet>
    );
}

export default ProductDetails;