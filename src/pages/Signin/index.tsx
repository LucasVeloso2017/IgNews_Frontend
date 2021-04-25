import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import {FiMail,FiLock} from 'react-icons/fi'
import { Container } from './styles';
import {Form} from '@unform/web'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useHistory } from 'react-router-dom';

import * as Yup from 'yup'
import { useAuth } from '../../hooks/AuthHook';
import { useToast } from '../../hooks/ToastContext';

type SignInFormData = {
    email: string;
    password: string;
} 
const Signin: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const history = useHistory()
    const{ addToast } = useToast()
    const{ signin } = useAuth()
    
    const handleSubmit=useCallback( async(data:SignInFormData)=>{
        try {
    
          formRef.current?.setErrors({})
          const schema = Yup.object().shape({
            email: Yup.string().required('O e-mail é obrigatorio').email('Digite um e-mail Valido'),
            password:Yup.string().required('A senha é obrigatoria')
          })
          await schema.validate(data, {
            abortEarly: false
          })
          await signin({
            email: data.email,
            password: data.password
          })
          history.push('/dashboard')
        } catch (e) {
          addToast({
            type: 'error',
            title: 'Erro na Autenticação',
            description: 'Oops ocorreu um erro ao fazer login'
          })
        }
    },[signin,addToast,history])
      
    return(
        <Container>
            <section>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu login</h1>
                        
                        <Input name="email" icon={FiMail} type="text" placeholder="Email" />
                        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                        <Button type="submit">Entrar</Button>
                        
                        <Link to='/signup'>Não tem uma conta? cadastre-se aqui</Link>
                    </Form>
            </section>
        </Container>
    );
}

export default Signin;