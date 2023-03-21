import { useState } from 'react';
import { Col, Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { HeartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';

import './NavBar.css'
import { DrawerBasket } from '../drawer/DrawerBasket';



export const NavBar = () => {

  const [openShopping, setOpenShopping] = useState(false);

  const showDrawerShopping = () => {
      setOpenShopping(true);
  };

  const onCloseShopping = () => {
      setOpenShopping(false);
  };

  return (
    <Header className="site-layout-background" style={{ zIndex: '200', paddingTop: '0.5%', width: '100%', height: '10vh', background: '#FBFBFB', position: 'fixed', borderBottom: '1px solid #000000' }}>
      <Row>
        <Col
          span={6}
          style={{ textAlign: 'center', display: 'block', margin: 'auto' }}
          >
            <NavLink to={"/"}>
              <div style={{ maxWidth: '140px', display: 'inline-block', verticalAlign: 'middle'}}>
                <svg width="63.05" height="17.65" viewBox="0 0 126.1 35.3" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" strokeLinecap="round" fillRule="nonzero" stroke="#0000000c" strokeWidth="2" fill="#303030" style={{ position: 'absolute', top: '50%', stroke: '#0000000c', strokeWidth: '2', fill: '#303030'}}><path d="M 98.15 0 L 94.9 23.35 A 14.973 14.973 0 0 1 93.498 28.014 A 12.897 12.897 0 0 1 90.375 32.025 A 13.101 13.101 0 0 1 84.215 34.964 A 18.564 18.564 0 0 1 80.6 35.3 A 18.117 18.117 0 0 1 77.419 35.039 Q 75.659 34.724 74.271 34.032 A 8.649 8.649 0 0 1 72.225 32.625 A 8.836 8.836 0 0 1 69.519 27.465 A 12.729 12.729 0 0 1 69.35 25.35 Q 69.35 24.25 69.5 23.15 L 72.75 0 L 79.3 0 L 76.05 23.05 Q 75.9 24.15 75.9 25.1 A 8.296 8.296 0 0 0 76.01 26.499 Q 76.271 28.021 77.15 28.9 A 3.851 3.851 0 0 0 78.619 29.797 Q 79.619 30.15 81 30.15 A 9.158 9.158 0 0 0 83.063 29.931 Q 84.869 29.514 86.05 28.3 A 7.286 7.286 0 0 0 87.42 26.264 Q 87.844 25.351 88.121 24.226 A 15.853 15.853 0 0 0 88.4 22.8 L 91.6 0 L 98.15 0 Z M 62 34.55 L 39.2 34.55 L 39.9 29.5 L 59.2 5.25 L 45 5.25 L 45.7 0 L 67.4 0 L 66.7 5.1 L 47.55 29.15 L 63.45 29.15 L 62 34.55 Z M 120.7 34.55 L 97.9 34.55 L 98.6 29.5 L 117.9 5.25 L 103.7 5.25 L 104.4 0 L 126.1 0 L 125.4 5.1 L 106.25 29.15 L 122.15 29.15 L 120.7 34.55 Z M 21.45 0 L 28.5 0 L 14.55 21.45 L 12.7 34.55 L 6.1 34.55 L 7.95 21.5 L 0 0 L 6.95 0 L 11.95 16.05 L 21.45 0 Z M 32.4 0 L 38.95 0 L 34.1 34.55 L 27.55 34.55 L 32.4 0 Z" vectorEffect="non-scaling-stroke"/></g></svg>
              </div>
            </NavLink>
        </Col>
        <Col
          span={ 12 }
          style={{ textAlign: 'center'}}
          >
        </Col>
        <Col
          span={6}
          style={{ textAlign: 'center', display: 'block', margin: 'auto' }}
        >
          <NavLink to={"/user"}>
            <HeartOutlined style={{ fontSize: '25px', marginRight: '25px', color: '#30363f' }}/>
          </NavLink>
          <NavLink to={"/user"}>
            <UserOutlined style={{ fontSize: '25px', marginRight: '25px', color: '#30363f' }} /> 
          </NavLink>
            <ShoppingOutlined style={{ fontSize: '25px', color: '#30363f' }} onClick={ showDrawerShopping }/>
        </Col>
      </Row>
      <DrawerBasket onCloseShopping={ onCloseShopping } openShopping={ openShopping }/>
    </Header>
  )
}
