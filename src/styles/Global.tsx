import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, p, span, strong {
        color: #FFFFFF;
        font-family: "Open Sans", sans-serif;
    }

    body{
        background-color: #111111;
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        
    }

    .card{
        background-color: #151515;
    }

    .emphasisText{
        color: #986DFF,
    }

    .descriptionText{
        color: #9CA3AF,
    }

    .defaultBtn{
        background-color:#986DFF;
        height: 3.3em;
        padding: 0 2em;
        font-size: 1.1em;
        color: #fff;
        border-radius: 5px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover{
            padding: 0 2.5em;
        }
    }
`

export default globalStyle;