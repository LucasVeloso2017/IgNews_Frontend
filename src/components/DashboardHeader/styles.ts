import styled, { css } from 'styled-components';
interface containerProps{
    isVisible:boolean
}
export const Container = styled.nav<containerProps>`
    width:calc(100% - 64px);
    height:7vh;
    margin-left:auto;
    background-color:var(--gray-700);

    transition: width 0.2s;

    ${props => props.isVisible && css`
        width:calc(100% - 240px);
    ` }

    display:flex;
    justify-content:flex-end;
    align-items:center;

    section{
        width:300px;
        height:7vh;
        display:flex;
        justify-content:center;
        align-items:center;

        display:flex;
        justify-content:space-evenly;
        align-items:center;
        button{
            width:50px;
            background-color:transparent;
            border:0;
            outline:none;
        }
        
    }
`;
