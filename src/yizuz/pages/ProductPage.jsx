import { ColumnHeightOutlined, ColumnWidthOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Col, Descriptions, Image, Row, Select } from "antd"
import { Content } from "antd/lib/layout/layout"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { startAddProduct } from "../../store/slices/yizuz/thunks";


import './ProductPage.css'

const onChange = (value) => {
    console.log(`selected ${value}`);
};

export const ProductPage = () => {

    const [visible, setVisible] = useState(false);
    const [favorite, setFavorite] = useState(false)

    const { id } = useParams()
    const dispatch = useDispatch();

    const product = products.find( product => product.id === id )
    
    const onClickAddProduct = () => {

        dispatch( startAddProduct(product) )
        
    }

  return (
    <Content style={{ minHeight: 'calc(95vh)', marginTop: '10vh'}}>
        <Row>
            <Col   
                span={11}
                style={{ padding: '0' }}
            >
                <Image
                    preview={{
                    visible: false,
                    }}
                    width={'100%'}
                    src={`/assets/Products/${product.id}.jpg`}
                    onClick={() => setVisible(true)}
                />
                <div
                    style={{
                    display: 'none',
                    }}
                >
                    <Image.PreviewGroup
                    preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                    }}
                    >
                    <Image src={`/assets/Products/${product.id}.jpg`} />
                    <Image src={`/assets/Products/${Number(product.id) + 1 }.jpg`} />
                    <Image src={`/assets/Products/${Number(product.id) + 2 }.jpg`} />
                    <Image src={`/assets/Products/${Number(product.id) + 3 }.jpg`} />
                    </Image.PreviewGroup>
                </div>
            </Col>
            <Col 
                span={13}
                style={{ padding: '5% 15% 0 15%'  }}
            >
                <div className="container" style={{ minHeight: "90vh" }}>
                    <Row style={{ marginBottom: '5px'}}>
                        <Col span={12} >
                            <small className="id">REF/{ product.id }</small>
                        </Col>
                        <Col span={12} >
                            <div className="favorite" onClick={ (e) => setFavorite(!favorite)}>
                                {
                                    (favorite) ?
                                    <HeartFilled
                                        className="icon" 
                                        style={{ fontSize: '20px'}}
                                    /> 
                                    :
                                    <HeartOutlined
                                        className="icon"
                                        style={{ fontSize: '20px'}}
                                    />
                                }
                            </div>
                        </Col>
                    </Row>
                    <p className="name">{ product.name }</p>
                    <div className="container-size">
                        <div className="container-select">
                            <Select
                                className="select"
                                bordered={false}
                                size="large"
                                placeholder="Seleccione talla"
                                optionFilterProp="children"
                                onChange={onChange}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={ product.size }
                            />
                        </div>
                        <div className="help-size">
                            <button>
                                <ColumnWidthOutlined style={{ fontSize: '15px',margin: '0 5px'}}/>
                                Guía de tallas
                            </button>
                        </div>
                        <div className="container-price">
                            <h4 className="price"><span>COP </span>{ product.price }</h4>
                        </div>
                        <div className="container-basket">
                            <button
                                onClick={onClickAddProduct}
                            >
                                AÑADIR A LA CESTA
                            </button>
                        </div>
                        <div className="info">
                            <button>Envio</button>
                            <span>|</span>
                            <button>Devoluciones</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                {/* <div>
                    <div>
                        <div><h4>Composición</h4></div>
                        <div>
                            <h5>Principal</h5>
                            <p>62% algodón</p>
                        </div>
                        <div>
                            <h5>Principal</h5>
                            <p>38% poliéster</p>
                        </div>
                        <div>
                            <h5>Principal</h5>
                            <p>59% algodón</p>
                        </div>
                        <div>
                            <h5>Detalles</h5>
                            <p>38% poliéster</p>
                        </div>
                        <div>
                            <h5>Detalles</h5>
                            <p>3% elastano</p>
                        </div>
                        <div>
                            <h5>Forro</h5>
                            <p>62% algodón</p>
                            <p>38% poliéster</p>
                        </div>
                        <div>
                            <h4>Cuidados</h4>
                            <p>Lavar a maquina max. 30ºc. centrifugado corto</p>
                            <p>No usar lejía / blanqueador</p>
                            <p>Planchar maximo 110 º c</p>
                            <p>No limpieza en seco</p>
                            <p>No usar secadora</p>
                        </div>
                    </div> 
                </div> */}
            </Col>
        </Row>
    </Content>
  )
}
