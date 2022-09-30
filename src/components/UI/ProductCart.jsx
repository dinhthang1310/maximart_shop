import React from 'react';
import {motion} from "framer-motion";

import '../../style/productCart.css';
import {Col} from "reactstrap";
import {Link} from "react-router-dom";
import { toast } from 'react-toastify';

import {useDispatch} from "react-redux";
import {cartActions} from "../../redux/slice/cartSlice";

function ProductCart({item}) {
    const dispatch = useDispatch()

    const addToCart = ()=>{
        dispatch(
            cartActions.addItem({
                id : item.id,
                productName : item.productName,
                imgUrl : item.imgUrl,
                price : item.price,
            })
        )
        toast.success( "products added to success")

    }

    return (
       <Col lg='3' md='4'>
           <div className="product__item">
               <div className="product__img">
                   <Link to={`/shop/${item.id}`}><motion.img whileHover={{scale:1.1}} src={item.imgUrl} alt="" className="w-100"/>
                   </Link>
               </div>
               <div className='p-2 product__info'>
                   <h3 className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                   <span>{item.category}</span>
               </div>
               <div className="product__cart-bottom d-flex align-items-center justify-content-between p-3">
                   <span className="price ">${item.price}</span>
                   <motion.span whileTap={{scale:1.2}} onClick={addToCart}><i className="ri-add-line"></i></motion.span>
               </div>
           </div>
       </Col>
    );
}

export default ProductCart;