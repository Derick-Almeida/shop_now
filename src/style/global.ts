import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    :root {
        --white: #FFFFFF;
        --grey-1: #F1F3F5;
        --grey-2: #515252;  
        --grey-3: #868E96;
        --black-1: #212529;
        --black-2: #00000040;
        --green-1: #72bd2a;
        --green-2: #72bd2a0d;
        --red: #FF0000
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        outline: none;
    }
    
    input {
        outline: none;
    }

    ul, ol, li{
        list-style: none;
    }

    body{
        background: var(--white);
        min-width: 100%;
        min-height: 100vh;
    }
`;
