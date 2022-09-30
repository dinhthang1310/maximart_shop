import React from 'react';
import '../style/cart.css';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import {Col, Container, Row} from "reactstrap";
import {motion} from "framer-motion";
import {cartActions} from "../redux/slice/cartSlice";

import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Cart(props) {

    const cartItem = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    return (
        <Helmet title='Cart'>
            <CommonSection title='Shopping Cart'/>
            <Container>
                <Row>
                    <Col>
                        {
                            cartItem.length === 0 ? (<h2  className="fs-4 text-center mt-4 mb-4">No item added to the Cart !!!</h2>) : (
                                <table className=" table bordered ">
                                    <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        cartItem.map((item,index)=> (
                                            <Tr item={item} key={index}/>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            )
                        }

                    </Col>

                    <Col >
                        <div className="checkout">
                            <div >
                                <h6 className="d-flex align-items-center justify-content-between mt-5">
                                    SubTotal :
                                    <span className="fs-4 fw-bold">${totalAmount}</span>

                                </h6>
                            </div>
                            <p className="fs-6 mt2">Taxes and shipping will calculate in checkout</p>
                            <div className="mb-3">
                                <button className="buy__btn w-100"><Link to="/checkout">Checkout</Link></button>
                                <button className="buy__btn w-100"><Link to="/shop">Continue Shopping</Link></button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    );
}
const Tr = ({item})=> {
    const dispatch = useDispatch()
    const deleteProduct = ()=> {
        dispatch(cartActions.deleteItem(item.id))
    }
    return  <tr>
        <td><img src={item.imgUrl} alt="" className="w-100"/></td>
        <td>{item.productName}</td>
        <td>${item.price}</td>
        <td>{item.quantity}</td>
        <td><motion.i whileTap={{scale:1.1}} className="ri-delete-bin-line" onClick={deleteProduct}></motion.i></td>
    </tr>
}

export default Cart;