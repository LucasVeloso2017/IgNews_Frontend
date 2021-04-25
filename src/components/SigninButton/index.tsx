import React from 'react';
import { FaSignInAlt } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthHook';
import { Container } from './styles';

const SigninButton: React.FC = () => {

  const{user} = useAuth()
  const history = useHistory()

  const handleSignin = ()=>{
    history.push('/signin')
    user ? history.push('/dashboard') :history.push('/signin')
  }


  return(
    <Container
      type="button"
      onClick={handleSignin}
    >
      <FaSignInAlt color="#61dafb"/>
      {user ? 'Dashboard' :'Inscrever-se'}
    </Container>
  );
}

export default SigninButton;