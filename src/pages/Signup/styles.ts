import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1120px;
    height:100vh;
    margin:0 auto;

    display:flex;
    justify-content:center;
    align-items:center;

    section{
        background-color:#1F2029;
        width:60%;
        height:50vh;
        border-radius:10px;
        padding:30px;

        h1{
            padding:10px;
            margin-bottom:2rem;
        }
        a{
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
`;
