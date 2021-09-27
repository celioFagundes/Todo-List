import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    *{
        margin:0;
        padding:0;
        box-sizing:border-box; 
        
    }
    body{
        background-color: hsl(230, 17%, 14%);
        font-family: 'Inter', sans-serif;
        font-size:16px;
        font-weight: 700;

    }
    .container{
        max-width: 1024px;
        margin: 0 auto
    }
    
`;