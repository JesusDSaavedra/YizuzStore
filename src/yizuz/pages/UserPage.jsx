import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useCheckAuth } from "../../hooks"

import { startLogout } from "../../store/slices/auth"

import { Login, Register } from "../components"
import { Col, Empty, Row, Tabs } from "antd"
import { Content } from "antd/lib/layout/layout"
import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons"

import './UserPage.css'

export const UserPage = () => {

  const status = useCheckAuth();
  const dispatch = useDispatch();

  const [typeUser, setTypeUser] = useState('login')
  const { email, displayName } = useSelector( state => state.auth )

  const onLogout = () => {
      dispatch( startLogout() )
  }

  const handleRegisterChange = (typeRegisterLogin) => {
    setTypeUser(typeRegisterLogin);
  }
  

  return (
    <Content style={{ minHeight: 'calc(95vh)', marginTop: '10vh', marginBottom: '-35px' }}>
        <Row style={{ width:'100%', height: '90vh' }}>
            <Col span={7} style={{ borderRight: '1px solid #00000065' }}>
              {
                status === 'authenticated' 
                ? 
                  <div className="container-user">
                  <div className="container-data">
                    <h4 className="name-user">Bienvenido/a, { displayName }</h4>
                    <small className="mail">{email}</small>
                  </div>
                  <div className="container-btn">
                    <a>Mis pedidos</a>
                    <a>Mis devoluciones</a>
                  </div>
                  <div >
                    <button 
                      className="btn-cerrarSesion"
                      onClick={ onLogout }
                    >
                      Cerrar Sesion
                    </button>
                  </div>
                </div> 
                : 
                <div style={{ padding: '15%', position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center', minWidth: '100%' }}>
                  {
                    typeUser === 'login' ? <Login onRegisterChange={handleRegisterChange}/> : <Register onRegisterChange={handleRegisterChange}/>
                  }
                </div>
              }
            </Col>
            <Col span={17} >
              <div style={{ padding: '10px' }}>
                <Tabs
                  defaultActiveKey="1"
                  type="card"
                  size='large'
                >
                   <Tabs.TabPane tabBarStyle={{ color: '#000000' }} tab="Mis favoritos" key="1" style={{ color: '#000000'}}>
                    <div className="container-vacio">
                      <Empty
                        image={ <HeartOutlined style={{ fontSize: '80px', color: '#00000035' }}/> }
                        imageStyle={{
                          marginTop: '10%'
                        }}
                        description={
                          <span className="description">
                            Su lista de favoritos esta vacia.
                          </span>
                        }
                      />
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Mi Bolsa" key="2">
                    <div style={{ overflowY: 'scroll', height: '60vh' }}>
                      <Row gutter={[8, 28]} style={{ padding: '10px 0', width:'100%' }}>
                        <Col span={6} >
                            <div className="card">
                                <div className="card-img">
                                    <img src="https://static.bershka.net/4/photos2/2022/I/0/2/p/6884/551/400/6fa1d5f628f2d62a26c88706281b6f2f-6884551400_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh&imformat=chrome" alt="" />
                                </div>
                                    <div className="card-info">
                                        <p className="text-body">Cazadora puffy oversize</p>
                                    </div>
                                <div className="card-footer">
                                    <span className="text-title">299000 COP</span>
                                    <div>
                                        <HeartOutlined className='card-button' style={{ fontSize: '20px' }}/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={6} >
                            <div className="card">
                                <div className="card-img"></div>
                                    <div className="card-info">
                                        <p className="text-body">Product description and details</p>
                                    </div>
                                <div className="card-footer">
                                    <span className="text-title">$499.49</span>
                                    <div>

                                        <HeartOutlined className='card-button' style={{ fontSize: '20px' }}/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={6} >
                            <div className="card">
                                <div className="card-img"></div>
                                    <div className="card-info">
                                        <p className="text-body">Product description and details</p>
                                    </div>
                                <div className="card-footer">
                                    <span className="text-title">$499.49</span>
                                    <div>

                                        <HeartOutlined className='card-button' style={{ fontSize: '20px' }}/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={6} >
                            <div className="card">
                                <div className="card-img"></div>
                                    <div className="card-info">
                                        <p className="text-body">Product description and details</p>
                                    </div>
                                <div className="card-footer">
                                    <span className="text-title">$499.49</span>
                                    <div>

                                        <HeartOutlined className='card-button' style={{ fontSize: '20px' }}/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={6} >
                            <div className="card">
                                <div className="card-img"></div>
                                    <div className="card-info">
                                        <p className="text-body">Product description and details</p>
                                    </div>
                                <div className="card-footer">
                                    <span className="text-title">$499.49</span>
                                    <div>

                                        <HeartOutlined className='card-button' style={{ fontSize: '20px' }}/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={6} >
                            <div className="card">
                                <div className="card-img"></div>
                                    <div className="card-info">
                                        <p className="text-body">Product description and details</p>
                                    </div>
                                <div className="card-footer">
                                    <span className="text-title">$499.49</span>
                                    <div>
                                        <HeartOutlined className='card-button' style={{ fontSize: '20px' }}/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="container-footer-user">
                      <div className='footer-process-user'>
                        <Row>
                            <Col span={9} >
                                <span className='total-user'>TOTAL:</span>
                            </Col>
                            <Col span={15} style={{ textAlign: 'end'}}>
                                <span className='price-total-user'>COP 1.705.000.00</span>
                            </Col>
                        </Row>
                      </div>
                      <button className='process-user'>TRAMITAR PEDIDO</button>
                    </div>
                    {/* <div className="container-vacio">
                      <Empty
                        image={ <ShoppingOutlined style={{ fontSize: '80px', color: '#00000035' }}/> }
                        imageStyle={{
                          marginTop: '10%'
                        }}
                        description={
                          <span className="description">
                            Bolsa de compras vacia.
                          </span>
                        }
                      >
                        <button className="btn-tabBolsa">Continuar comprando</button>
                      </Empty>
                    </div> */}
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </Col>
        </Row>
    </Content>
  )
}
