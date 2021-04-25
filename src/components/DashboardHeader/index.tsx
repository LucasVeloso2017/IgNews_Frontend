import React from 'react';
import {FiPower} from 'react-icons/fi'
import { useAuth } from '../../hooks/AuthHook';
import { Container } from './styles';

interface headerProps{
    visible:boolean
}

const DashboardHeader: React.FC<headerProps> = ({visible}) => {
    
    const{user,signout} = useAuth()
    
    return(
        <>
        <Container isVisible={visible}>
            <section>
                <label>Olá, {user.name}</label>
                <button onClick={signout}>
                    <FiPower color='#c53030' size={25}/>
                </button>
            </section>

        </Container>
        </>
    );
}

{
    /*
    <label>Olá, {user.name}</label>
                <button onClick={signout}>
                    <FiPower color='#c53030' size={25}/>
                </button>
    */
}
export default DashboardHeader;