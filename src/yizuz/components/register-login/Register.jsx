import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Checkbox, Form, Input, Select, Space } from 'antd';

import { useForm } from '../../../hooks';
import { startCreatingUserWithEmailPassword } from '../../../store/slices/auth';
import "./Register.css"

const { Option } = Select;

const formDate = {
    email: '',
    password: '',
    displayName: ''
  }
  
  const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
    password: [ (value) => value.length >= 6, 'La contraseña debe tener minimo 6 caracteres'],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],
  }

export const Register = (props) => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector( state => state.auth )
    const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

    const {
        displayName, email, password, onInputChange, formState,
        isFormValid, emailValid, passwordValid, displayNameValid,
    } = useForm(formDate, formValidations ); 

    
    const onSubmit = () => {

        setFormSubmitted(true);

        if ( !isFormValid ) return;

        dispatch( startCreatingUserWithEmailPassword( formState ) );

    }

    const [form] = Form.useForm();

    const handleClick = () => {
        props.onRegisterChange('login');
    };
  
    return (
        <>
            <p className='title-register'>INFORMACION DE REGISTRO</p>
            <Form
                form={form}
                name="register"
                scrollToFirstError
                size='large'
                onFinish={ onSubmit }
                >
                <Form.Item
                    name="Nombre Completo"
                    rules={[
                    {
                        required: true,
                        message: 'Favor ingrese su nombre completo!',
                        whitespace: true,
                    },
                    ]}
                >
                    <Input 
                        placeholder='Nombre Completo' 
                        className='formInput'
                        name="displayName"
                        value={ displayName }
                        onChange={ onInputChange }
                        error={ !!displayNameValid && formSubmitted }
                    />
                </Form.Item>
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
                        placeholder='Correo' 
                        className='formInput'
                        name='email'
                        value={ email }
                        onChange={onInputChange }
                        error={ !!emailValid && formSubmitted }
                    />
                </Form.Item>
            
                <Form.Item
                    name="Contraseña"
                    rules={[
                    {
                        required: true,
                        message: 'Favor ingrese su contraseña!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password 
                        placeholder='Contraseña' 
                        className='formInput'
                        name="password"
                        value={ password }
                        onChange={onInputChange }
                        error={ !!passwordValid && formSubmitted }    
                    />
                </Form.Item>
            
                <Form.Item
                    name="Confirmar contraseña"
                    dependencies={['Contraseña']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Favor confirmar contraseña!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('Contraseña') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('Las contraseñas que ingreso no coinciden!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password 
                        placeholder='Confirmar contraseña' 
                        className='formInput'
                    />
                </Form.Item>
            

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Debe aceptar terminos y condiciones')),
                    },
                    ]}
                >
                    <Checkbox>
                    He leído <a href="">Terminos y Condiciones</a>
                    </Checkbox>
                </Form.Item>
                <Space
                    direction="vertical"
                    style={{ width: '100%', display: !!errorMessage ? '' : 'none', marginBottom: '15px'}}
                >
                    <Alert message={ errorMessage } type="error" showIcon />
                </Space>
                <Form.Item>
                    <Button htmlType="submit" className='btn-register' disabled={ isCheckingAuthentication }>
                        CREAR CUENTA
                    </Button>
                    ¿Ya tiene cuenta? <a className='link' onClick={handleClick}>Iniciar sesion</a>
                </Form.Item>
            </Form>
        </>
    )
}
