import styled, { css } from 'styled-components';

interface containerProps{
    isVisible:boolean
}

export const Container = styled.div<containerProps>`
    width:calc(100% - 64px);
    height:calc(100vh - 7vh);
    max-height:calc(100vh - 7vh);
    margin-left:auto;

    transition: width 0.2s;

    ${props => props.isVisible && css`
        width:calc(100% - 240px);
    ` }
    header{
        padding:50px;
    }

    section{
        width:100%;
        height:calc(100% - 140px);
        padding:40px;
        background:var(--gray-700);

    }

    .ck-content{
        color:black;
    }
`;
