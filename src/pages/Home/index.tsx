import React from 'react';
import Header from '../../components/Header';
import Hero from '../../assets/avatar.svg'
import { Container } from './styles';

const Home: React.FC = () => {


  return(
    <>
      <Header/>
      <Container>
        <section>
          <span>Bem vindo</span>
          <h1>As novidades sobre o mundo do <span>ReactJs</span></h1>
          <p>
            Inscreva-se para contribuir com a comunidade !
          </p>
        </section>
        <img src={Hero} alt="HeroImage"/>
      </Container>

    </>
  )
}

export default Home;