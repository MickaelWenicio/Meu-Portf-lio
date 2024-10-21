import styled from "styled-components";

export const Container = styled.div`
    min-height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div:first-child{
        width: var(--default-width);

        div:first-child{
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 2em;

            h1{
                font-size: 2.5em;
                font-weight: 500;

                span{
                    color: var(--emphasis);
                    font-size: 100%;
                }
            }

            p{
                color: var(--description);
            }

            button{
                width: 300px;
                height: 60px;
                background-color: var(--emphasis);
                color: #fff;
                border: none;
                border-radius: 5px;
                font-size: 18px;
                transition: all ease-in-out .3s;
                cursor: pointer;

                &:hover{
                    width: 325px;
                }
            }
        }
    }

    
` 