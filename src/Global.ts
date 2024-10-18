import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Open Sans", sans-serif;
    }

    :root{
        --default-width: 80%;
        --emphasis: #986DFF;
        --description: #9CA3AF;
    }

    h1, h2, h3, h4, h5, h6, p, span, strong, div {
        color: #FFFFFF;
        font-family: "Archivo", sans-serif;
        line-height: 1.5em;
    }

    li {
        font-size: 18px;
    }

    p, span{
        font-size: 20px;
    }

    #root {
        width: 100%;
        height: 100%;
        background-color: #111111;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    body {
        width: 100vw;
        height: 100vh;
    }

    .card {
        background-color: #151515;
    }

    .defaultBtn {
        background-color:#986DFF;
        height: 3.3em;
        padding: 0 2em;
        font-size: 1.1em;
        color: #fff;
        border-radius: 5px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            padding: 0 2.5em;
        }
    }
`

export default GlobalStyle;