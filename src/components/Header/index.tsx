import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/logo.svg'
import SigninButton from '../SigninButton';

import { Container } from './styles';

const Header: React.FC = () => {

    let location = useLocation()
    return(
        <Container>
            <div>
                <img src={Logo} alt="Logo"/>
                <nav>
                    <Link to='/' className={location.pathname === '/'? 'active':''}>Home</Link>
                    <Link to='/posts' className={location.pathname === '/posts'? 'active':''}>Posts</Link>
                </nav>

                <SigninButton/>
            </div>
        </Container>
    );
}

export default Header;