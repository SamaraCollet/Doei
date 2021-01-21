import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');
    *{
        margin:0;
        padding:0;
        outline: none;
    }

    body , input , button{
        font-family: 'Nunito', sans-serif;
        color: #1a1a1a;
    }

    button, a{
        cursor: pointer;
    }
`;
