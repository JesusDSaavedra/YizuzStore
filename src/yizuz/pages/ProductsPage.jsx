import { useEffect, useState } from 'react'
import { Card, Col, Row, Segmented } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'

import { products } from "../../data/products";

import './ProductsPage.css'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useFilterProducts } from '../../hooks';






export const ProductsPage = () => {

    const { typeProductStore } = useSelector( state => state.yizuz )

    const [productos, setProductos] = useState(products);
    const [type, setType] = useState(typeProductStore);
    const [subType, setSubType] = useState('TODO');
    const [loading, setLoading] = useState(true)
    
    const types = [
        {
            'type': 'ROPA',
            'subType': ['TODO','BUZOS', 'CAZADORAS', 'PANTALONES', 'CAMISETAS']
        },
        {
            'type': 'CALZADO',
            'subType': ['TODO','ZAPATILLAS','SANDALIAS', 'ZAPATOS']
        },
        {
            'type': 'ACCESORIOS',
            'subType': ['TODO','BOLSOS','GAFAS']
        },
    ];
    
    const changeSubType = (typeProduct) => {
        const found = types.find( type => type.type === typeProduct)
        return found.subType
    }
    
    const filterProducts = (typeProduct, subTypeProduct) => {
        const filterType = productos.filter( product => product.type === typeProduct );
        const filterSubType = filterType.filter( product => product.subType === subTypeProduct );
        
        const filter = ( subType === 'TODO' ) ? filterType : filterSubType;
        return filter
    };

    const toggleFavorite = (id) => {
        const newProductos = productos.map((producto) => {
          if (producto.id === id) {
            return { ...producto, favorite: !producto.favorite };
          } else {
            return producto;
          }
        });
    
        setProductos(newProductos);
    };

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 800);
    }, [type, subType])

    useEffect(() => {
        setSubType('TODO')
    }, [type])

    
    const articles = filterProducts(type,subType)

  return (
    <>
        <Content style={{ minHeight: 'calc(95vh)', marginTop: '8%'}}>
            <Row  className='conatiner-type' style={{ margin: '0 5% 4%'}}>
                <Col span={12} >
                    <Segmented 
                        options={['ROPA', 'CALZADO', 'ACCESORIOS']} 
                        value={type}
                        onChange={setType} 
                    />
                </Col>
                <Col span={12} style={{ textAlign: 'end' }}>
                    <Segmented 
                        options={changeSubType(type)} 
                        value={subType}
                        onChange={setSubType}
                    />
                </Col>
            </Row>
            <Row gutter={[8, 28]} style={{ marginBottom: '5%', paddingLeft: '5%', paddingRight: '5%', width:'100%', height: 'auto' }}>
                {
                    articles.map( product => (
                        <Col span={6} key={product.id}>
                            <Card loading={loading}>
                                <div className="card">
                                    <NavLink to={`${product.id}`}>
                                        <div className="card-img">
                                                <img src={`/assets/Products/${(Number(product.id) + 0)}.jpg`} alt="" />
                                        </div>
                                        <div className="card-info">
                                            <p className="text-body">{product.name}</p>
                                        </div>
                                    </NavLink>
                                    <div className="card-footer">
                                        <span className="text-title">COP {product.price}</span>
                                        <div
                                            className='card-button' 
                                            onClick={() => toggleFavorite(product.id)}
                                        >
                                        {
                                            (product.favorite) ?
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
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))
                }
                
            </Row>
        </Content>
    </>
  )
}
