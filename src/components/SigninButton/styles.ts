import styled from 'styled-components';

export const Container = styled.button`
    height: 3rem;
    border-radius: 3rem;
    background-color: var(--gray-850);
    border: 0;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    color:var(--white);
    font-weight: bold;
    outline: none;

    svg{
        width: 20px;
        height: 20px;
    }

    svg.closeIcon{
        margin-left: 1rem;
    }

    svg:first-child{
        margin-right: 1rem;
    }

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.8);
    }
`;
