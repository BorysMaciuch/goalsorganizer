import { createGlobalStyle } from "styled-components";

export const theme = {

    bg: "#1d3557",
    white: '#f1faee',
    radius: {
        normal: '10px   '
    }
  }

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
}
body {
    background-color: ${theme.bg}
}
`;

