import { GoogleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Form, Input, Space } from 'antd';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../../store/slices/auth'

import './Login.css'

const formData = {
    email: '',
    password: ''
}

export const Login = (props) => {

    const { status, errorMessage } = useSelector( state => state.auth );
    
    const dispatch = useDispatch();
    
    const { email, password, onInputChange, formState } = useForm( formData );

    const isAuthenticating = useMemo( () => status === 'checking', [status] );

    const onSubmit = () => {

        dispatch( startLoginWithEmailPassword({ email, password }));
    }

    const onGoogleSignIn = () => {
        dispatch( startGoogleSignIn() );
    }
    
    const handleClick = () => {
        props.onRegisterChange('register');
    };


  return (
    <>
        <p className='title-login'>INGRESAR</p>
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish= { onSubmit }
        >
            <Form.Item
                name="Correo"
                rules={[
                {
                    type: 'email',
                    message: 'Correo no valido!!',
                },
                {
                    required: true,
                    message: 'Favor ingrese su correo!',
                },
                ]}
            >
                <Input 
                    prefix={<UserOutlined 
                    className="site-form-item-icon" />} 
                    placeholder="Correo" 
                    className='form-input' 
                    name='email'
                    value={ email }
                    onChange={ onInputChange }
                />
            </Form.Item>
            <Form.Item
                name="Contraseña"
                rules={[{ 
                    required: true, 
                    message: 'Por favor ingrese su contraseña!'
                }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Contraseña"
                    className='form-input'
                    name='password'
                    value={ password }
                    onChange={ onInputChange }
                />
            </Form.Item>
            <Form.Item>
                <a className="link login-form-forgot" href="">
                ¿Olvidaste tu contraseña?
                </a>
            </Form.Item>

            <Space
                    direction="vertical"
                    style={{ width: '100%', display: !!errorMessage ? '' : 'none', marginBottom: '15px'}}
                >
                    <Alert message={ errorMessage } type="error" showIcon />
            </Space>

            <Form.Item>
                <Button htmlType="submit" className="login-form-button" disabled={ isAuthenticating }>
                    INICIAR SESION
                </Button>
                <Button htmlType="" className="login-form-button" disabled={ isAuthenticating } onClick={ onGoogleSignIn }>
                    <GoogleOutlined />
                    GOOGLE 
                </Button>
                ¿No tienes cuenta? <a className='link' onClick={handleClick}>Registrarse</a>
            </Form.Item>
        </Form>
    </>
  )
}
