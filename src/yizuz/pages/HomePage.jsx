import { useDispatch } from 'react-redux'; 
import { Content } from 'antd/lib/layout/layout';
import { NavLink } from 'react-router-dom';
import  imagehome from './assets/images/imagehome.jpg'

import './HomePage.css'
import { setType } from '../../store/slices/yizuz/yizuzSlice';



export const HomePage = () => {

  const dispatch = useDispatch()

  return (
    <>
      <Content style={{ marginTop: '5%', padding: '0', width:'100%', height: 'calc(95vh)', backgroundImage: `url(${ imagehome })` }}>
        <div style={{ padding: '35px', position: 'relative' }}>
          <div  style={{ transform: 'translate( 0%, calc(50% + 64px )'}}>
            <button className="cta"
              onClick={() => dispatch( setType('ROPA') )}
            >
              <NavLink to={'/products'}>
                <span 
                  style={{ color: '#272932', fontSize: '40px', fontFamily:'fantasy', fontStyle: 'oblique'}}
                  className="hover-underline-animation"
                >
                  ROPA
                </span>
                <svg viewBox="0 0 46 16" height="35" width="45" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" dataName="Path 10" id="Path_10"></path>
                </svg>
              </NavLink>
            </button>      
            <button className="cta" style={{ margin: '20px 0px' }} 
              onClick={() => dispatch( setType('CALZADO') )}
            >
              <NavLink to={'/products'}>
                <span 
                  style={{ color: '#272932', fontSize: '40px', fontFamily:'fantasy', fontStyle: 'oblique'}}
                  className="hover-underline-animation"
                >
                  CALZADO
                </span>
                <svg viewBox="0 0 46 16" height="35" width="45" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" dataName="Path 10" id="Path_10"></path>
                </svg>
              </NavLink>
            </button>
            <button className="cta"
              onClick={() => dispatch( setType('ACCESORIOS') )}
            >
              <NavLink to={'/products'}>
                <span 
                  style={{ color: '#272932', fontSize: '40px', fontFamily:'fantasy', fontStyle: 'oblique'}}
                  className="hover-underline-animation"
                >
                  ACCESORIOS
                </span>
                <svg viewBox="0 0 46 16" height="35" width="45" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" dataName="Path 10" id="Path_10"></path>
                </svg>
              </NavLink>
            </button>
          </div>
        </div>
      </Content>
    </>
  )
};