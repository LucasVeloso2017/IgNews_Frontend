import styled from 'styled-components';

export const Container = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    
    div{
        max-width: 720px;
        margin: 5rem auto 0;
        &:last-child {margin-bottom:3rem;}
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
`;
