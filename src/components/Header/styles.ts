import styled from 'styled-components';

export const Container = styled.header`
    height: 5rem;
    border-bottom: 1px solid var(--gray-800);

    div{
        max-width: 1120px;
        height: 5rem;
        margin:0 auto;
        padding: 0 2rem;

        display: flex;
        align-items: center;

        nav{
            margin-left: 5rem;
            height: 5rem;

            a{
                display: inline-block;
                position: relative;

                padding:0 0.5rem;
                height: 5rem;
                line-height: 5rem;
                color:var(--gray-300);
            
                transition: color 0.5s;
                cursor:pointer;
            }
            a:hover{
                color:var(--white);
            }
            a+a{
                margin-left:2rem;
            }
            
            
        }

        button{
            margin-left: auto;
        }
    }


    .active{
        color:var(--white);
        font-weight: bold;
    }
    .active::after{
        content:'';
        height: 3px;
        border-radius: 3px 3px 0 0 ;
        width: 100%;
        position: absolute;
        bottom:1px;
        left:0;
        background: var(--cyan-500);
    }   


`;
