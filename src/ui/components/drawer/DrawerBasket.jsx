import { Col, Drawer, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export const DrawerBasket = ({ onCloseShopping, openShopping }) => {


  return (
    <Drawer title="" placement="right" onClose={ onCloseShopping } open={ openShopping } >
        <div>
            <div>
                <span className='title'>
                    Mi cesta <span>(5)</span>
                </span>
            </div>
            <div className='container-card-process'>
                <div className='card-process'>
                    <Row>
                    <Col span={9} >
                        <div className='container-img-process'>
                        <img src="https://static.bershka.net/4/photos2/2022/I/0/2/p/6904/644/800/c520875353384d04b9826f971c97bd1f-6904644800_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh&imformat=chrome" alt="" />
                        </div>
                    </Col>
                    <Col span={15} >
                        <div className='container-description-process'>
                        <Row>
                            <Col span={18}>
                            <p>COP 287000</p>
                            </Col>
                            <Col span={6} style={{ textAlign: 'end', paddingRight: '10px' }}>
                                <DeleteOutlined style={{ fontSize: '20px' }}/>
                            </Col>
                        </Row>
                        <span>Cazadora Teddy Capucha</span>
                        <small>M</small>
                        </div>
                        <div className='container-favorite'>
                        <button className='favorite'>Añadir a favoritos</button>
                        </div>
                    </Col>
                    </Row>
                </div>
            </div>
            <div className='container-footer'>
                <div className='footer-process'>
                    <Row>
                        <Col span={9} >
                            <span className='total'>TOTAL:</span>
                        </Col>
                        <Col span={15} style={{ textAlign: 'end'}}>
                            <span className='price-total'>COP 1.705.000.00</span>
                        </Col>
                    </Row>
                </div>
                <button className='process'>TRAMITAR PEDIDO</button>
            </div>
        </div>
    </Drawer>
  )
}
