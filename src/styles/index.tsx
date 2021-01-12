import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    main: "#1d3557",
    lightBlue: "#f1faee",
    delete: '#e63946',
    edit: '#e9c46a',
    white: '#ffffff',
    glass: 'rgba(255, 255, 255, .15)'
  },

  radius: {
    normal: "6px",
    button: "12px",
  },
  shadow: {
    normal: "0 3px 1px -2px rgba(0,0,0,.2)"
  }
};

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;    
}
body {
    background-color: ${theme.colors.main}
}
`;
