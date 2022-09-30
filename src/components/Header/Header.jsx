import React, {useEffect, useRef} from 'react';
import '../../style/header.css'

import {motion} from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import {Container, Row} from 'reactstrap';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


const nav__links = [
    {
        path : 'home',
        display : 'Home'
    },
    {
        path : 'shop',
        display : 'Shop'
    },
    {
        path : 'cart',
        display : 'Cart'
    },
]
function Header(props) {
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const navigate = useNavigate();
    const profileActionRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const stickyHeader = ()=> {
        window.addEventListener('scroll',()=> {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            }else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(()=> {
        stickyHeader()

        return()=> window.removeEventListener('scoll',stickyHeader)
    })
    const menuToggle = ()=> menuRef.current.classList.toggle('action__menu')
    const navigateToCart = ()=> {
        navigate('/Cart')
    }
    const toggleProfileAction = ()=> profileActionRef.current.classList.toggle('show__ProfileAction')
    return (
        <header className='header' ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo__img"/>
                            <div>
                                <h1><Link to='/home'>Maximart</Link></h1>
                            </div>
                        </div>

                            <div className='navigation' ref={menuRef} onClick={menuToggle}>
                               <div className="menu">
                                   {
                                       nav__links.map((item,index) => (
                                           <span className='nav__item' key={index}>
                                              <NavLink
                                                  to={item.path}
                                                  className={(navClass)=>
                                                      navClass.isActive ? "nav__active" : ""
                                              }>
                                                  {item.display}
                                              </NavLink>
                                           </span>
                                       ))
                                   }

                             </div>
                            </div>
                        <div className="nav__icon">
                        <span className='fav__icon'>
                            <i className="ri-heart-line"></i>
                            <span className="badge">1</span>
                        </span>

                            <span className='cart__icon'  onClick={navigateToCart}>
                            <i className="ri-shopping-bag-line"></i>
                                <span className="badge">{totalQuantity}</span>
                        </span>

                            <div className="profile"  >
                                <motion.img
                                    whileTap={{scale : 1.2}}
                                    src={userIcon} alt="user__img"
                                    ref={profileActionRef}
                                    onClick={toggleProfileAction}/>
                                <div
                                    className="profile__action"
                                    ref={profileActionRef}
                                    onClick={toggleProfileAction}
                                     >
                                    <div>
                                        <Link to='/signup'>Signup</Link>
                                        <Link to='/login'>Login</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="mobi__menu">
                            <span onClick={menuToggle}>
                                <i className="ri-menu-line"></i>
                            </span>
                            </div>
                        </div>

                    </div>
                </Row>
            </Container>
        </header>
    );
}

export default Header;