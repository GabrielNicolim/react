import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
  }

  body {
    width: 100vw;
    min-height: 100vh;
    padding: 0 1em;
    background: ${props => props.theme.white};
  }

  .app {
    max-width: 1440px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1030px) {
    body {
      padding: 0;
    }
  }
`;
