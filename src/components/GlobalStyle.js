import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: url(https://wallpaperset.com/w/full/0/8/2/30116.jpg); 
    background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  color: #f8edeb;
  width: 100%;

  letter-spacing: 0.02em;
  font-size: 14px;
  line-height: 1.85;
  overflow-x: hidden;
  margin: 0 auto;
  transition: 1.5s;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul{
    list-style: none;
  }
`;
