import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import {FiMail,FiLock, FiUser} from 'react-icons/fi'
import { Container } from './styles';
import {Form} from '@unform/web'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useHistory } from 'react-router-dom';

import * as Yup from 'yup'
import { useAuth } from '../../hooks/AuthHook';
import { useToast } from '../../hooks/ToastContext';

type SignInFormData = {
    name:string
    email: string;
    password: string;
} 
const Singup: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const{ addToast } = useToast()
    const{ signup } = useAuth()
    const history = useHistory()

    const handleSubmit=useCallback( async(data:SignInFormData)=>{
        try {
    
          formRef.current?.setErrors({})
          const schema = Yup.object().shape({
            name:Yup.string().required('O Nome é obrigatorio'),
            email: Yup.string().required('O e-mail é obrigatorio').email('Digite um e-mail Valido'),
            password:Yup.string().required('A senha é obrigatoria')
          })
          await schema.validate(data, {
            abortEarly: false
          })
          await signup({
            name:data.name,
            email: data.email,
            password: data.password
          })

          history.push('/signin')
        } catch (e) {
          addToast({
            type: 'error',
            title: 'Erro na Autenticação',
            description: 'Oops ocorreu um erro ao fazer login'
          })
        }
    },[signup,addToast,history])
    return(
        <Container>
            <section>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Inscreva-se</h1>
                        <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
                        <Input name="email" icon={FiMail} type="text" placeholder="Email" />
                        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                        <Button type="submit">Entrar</Button>
                        
                        <Link to='/signin'>Possui uma conta? faça o login aqui</Link>
                    </Form>
            </section>
        </Container>
    );
}

export default Singup;