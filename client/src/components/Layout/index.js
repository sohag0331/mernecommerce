import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Header'
import { NavLink } from 'react-router-dom'
import './style.css'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <Header />
        {
          props.sidebar ?
          <Container fluid>
          <Row>
            <Col md={2} className='sidebar'>
              <ul>
                <li><NavLink exact to={'/'}>Home</NavLink></li>
                <li><NavLink  to={'/page'}>Page</NavLink></li>
                <li><NavLink to={'/category'}>Category</NavLink></li>
                <li><NavLink to={'/products'}>Products</NavLink></li>
                <li><NavLink to={'/orders'}>Orders</NavLink></li>             
              </ul>
            </Col>
            <Col md={10} className= 'container__'>
            {props.children}
            </Col>
          </Row>
        </Container>
        :
        props.children
        }
       
    </>
   )

 }

export default Layout