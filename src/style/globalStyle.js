import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
        border:none;
    }
    html,body,#root{
        height:100%;
    }
    body{
        font-family: sans-serif;
        font-size: 16px;
        background-color:#ddd;
    }
`;
