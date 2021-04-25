import styled from 'styled-components'
import { shade } from 'polished'

export const Container= styled.button`
    background:var(--cyan-500);
    height:56px;
    border-radius:10px;
    border:0;
    padding:0 16px;

    color:var(--gray-900);
    font-weight:500;

    width:100%;
    margin-top:16px;
    transition: background-color 0.2s;
    font-size:20px;
    font-family:'Roboto Slab', sans-serif!important;
    letter-spacing:0.2px;
    margin-bottom:30px;
    outline:none;

    &:hover{
        background:${shade(0.2,'#61dafb')};
    }

`