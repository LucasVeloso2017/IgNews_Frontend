import styled,{css} from 'styled-components'
import Tooltip from '../Tooltip'


interface ContainerFocused{
    isFocused:boolean
    isFiled:boolean
    isErrored:boolean
}

export const Container= styled.div<ContainerFocused>`
    
    background:var(--gray-900);
    border-radius:10px;
    padding:16px;
    width:100%;
    display:flex;
    align-items:center;

    color:white;
    border:2px solid var(--gray-900);
    transition:border,color 0.2s;

    ${props => props.isErrored && css`
        
        border:2px solid red;
    ` }

    ${props => props.isFocused && css`
        color:var(--cyan-500);
        border:2px solid var(--cyan-500);
    ` }

    ${props => props.isFiled && css`
        color:var(--cyan-500);
    ` }
    

    & + div{
        margin-top:8px;
    }
    input{
        color:white;
        flex:1;
        border:0;
        background:transparent;  
        outline:none;      
    }   

    svg{
        margin-right:16px;
    }

`

export const Error = styled(Tooltip)`
    height:20px;
    margin-left:16px;
    svg{
        margin:0;
    }

    span{
        background:#c53030;
        color:#fff;
    }

    &::before{
        content:'';
        border-color:#c53030 transparent;
    }

`