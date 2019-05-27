import { createGlobalStyle } from 'styled-components';

import mixins from '../../assets/styles/mixins';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const General = createGlobalStyle`
  * { ${mixins().bbox} }
  html, body { -webkit-font-smoothing: antialiased; }
  html {
    font-size: 62.5%;
  }
  body {
    background-color: ${colors.greyIconBkgd};
    margin: ${sizes.margin * 1.8}px ${sizes.margin * 2}px;
    padding: ${sizes.margin * 1.8}px;
    margin: 20px 18px;
  }
  h1 {
  }
  h2 {
  }
  p {
    margin: 0;
  }
  a, button {
    cursor: pointer;
    outline: 0;
  }
  h1, h2, h3, p, input, label, button {
    font-family: 'Lato';
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, 
    background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  // Storybook
  .story {
    section {
      padding-bottom: ${sizes.margin * 0.9}px;
    }
    section div {
      &.row {
        margin-bottom: ${sizes.margin * 1.8}px;
      }
      &.btn-wrapper {
        display: inline-block;
        width: fit-content;
        margin-bottom: ${sizes.margin * 1.8}px;
        margin-right: ${sizes.margin * 2}px;
        height: ${sizes.button.height.large};
      }
    }
    pre {
      background-color: #f6f8fa;
      border-radius: 3px;
      font-size: 85%;
      line-height: 1.45;
      overflow: auto;
      padding: 16px;
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    }
  }
`;

export default General;
