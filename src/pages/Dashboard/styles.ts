import { shade } from 'polished';
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

    overflow-y:scroll;

    ${props => props.isVisible && css`
        width:calc(100% - 240px);
    ` }

    header{
        padding:50px;
    }

    section{
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 2rem;

        display:flex;
        justify-content:center;
        align-items:center;    


        &:last-child {margin-bottom:3rem;}

        div{
            max-width: 720px;
            margin: 5rem auto 0;

            .content{
                display: block;


                & + .content{
                    margin-top: 2rem;
                    padding-top: 2rem;
                    border-top: 1px solid var(--gray-700);
                }

                time{
                    svg{
                        margin-right:5px;
                    }
                    font-size: 1rem;
                    display: flex;
                    align-items: center;
                    color: var(--gray-300);
                }
                label{
                    svg{
                        margin-right:5px;
                    }
                    font-size: 1.2rem;
                    display: flex;
                    align-items: center;
                    color: var(--gray-300);
                }


                .title{
                    display: block;
                    font-size: 1.5rem;
                    margin-top:1rem;
                    line-height: 2rem;
                    transition: color 0.2s;
                }

                .describe{
                    color: var(--gray-300);
                    margin-top: 0.5rem;
                    line-height: 1.625rem;
                }

                &:hover .title{
                    color:var(--cyan-500);
                }

                .show{
                    color: var(--gray-300);
                    margin-top: 0.5rem;
                    line-height: 1.625rem;
                    cursor:pointer;
                }

            }
        }

        .controls{
            button{
                width:100px;
                height:100px;
                background:var(--gray-800);
                border:0;
                border-radius:10px;
                outline:none;
            }

            button + button{
                margin-left:10px;
            }

            button:hover{
                background:${shade(0.2,'#29292e')};
            }
        }
    }
`;
