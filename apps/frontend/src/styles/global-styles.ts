import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { colors } from './colors';

const GlobalStyle = createGlobalStyle`
  ${normalize},
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;    
    color: ${colors.text.basic};
    background-color: ${colors.white};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    

    --border-color:  ${colors.border.darken};
    --white-text:  #fff;
    --balck-text:  #000;
    
    --vh: 1vh;
    --gnb-height: 56px;
  }

  html { font-size: 100%; }
  body {
    font-size: 16px;
    color: ${colors.text.basic};
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }
  

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(var(--vh, 1vh) * 100 - 56px);
    gap: 0.5rem;
  }

  a {
    font-weight: 500;
    color: ${colors.primaryDarken};
    text-decoration: inherit;
  }

  a:hover {
    color: ${colors.primaryDarkenHover};
  }


  
  :is(.select-none) {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-block-start: 0.8em;
    margin-block-end: 0.8em;
  }

  p {
    margin-bottom: 0.1em;
  }

  a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, header, hgroup, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin:0;
    padding:0;
    vertical-align:baseline;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display:block}
  
  ol, ul {list-style:none}
  blockquote, q {quotes:none}
  blockquote:after, blockquote:before, q:after, q:before {content:"";content:none}
  table {border-collapse:collapse;border-spacing:0}

  *, :after, :before  {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border-width: 0;
    border-style: solid;
    border-color: var(--border-color, currentColor)
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #dddddd;
    padding: 10px 15px;
    margin-bottom: 0;
    font-size: 14px;

  }

  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-top: 4px;
    color: black;
    font-size: 12px;
    font-weight: 200;
  }

  button[type="submit"]:active,
  input[type="button"]:active,
  input[type="submit"]:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }

  input:disabled {
    opacity: 0.4;
  }

  input[type="button"]:hover {
    transition: 0.3s all;
  }

  button[type="submit"],
  input[type="button"],
  input[type="submit"] {
    -webkit-appearance: none;
  }

`;

export default GlobalStyle;
