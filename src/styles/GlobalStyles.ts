// import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

// FiraCode
import FiraCodeRegularTTF from '../assets/fonts/FiraCode-Regular.ttf';
import FiraCodeRegularWOFF from '../assets/fonts/FiraCode-Regular.woff';
import FiraCodeRegularWOFF2 from '../assets/fonts/FiraCode-Regular.woff2';
import FiraCodeMediumTTF from '../assets/fonts/FiraCode-Medium.ttf';
import FiraCodeMediumWOFF from '../assets/fonts/FiraCode-Medium.woff';
import FiraCodeMediumWOFF2 from '../assets/fonts/FiraCode-Medium.woff2';

// Raleway
import RalewayRegularTTF from '../assets/fonts/Raleway-Regular.ttf';
import RalewayRegularWOFF from '../assets/fonts/Raleway-Regular.woff';
import RalewayRegularWOFF2 from '../assets/fonts/Raleway-Regular.woff2';
import RalewayExtraBoldTTF from '../assets/fonts/Raleway-ExtraBold.ttf';
import RalewayExtraBoldWOFF from '../assets/fonts/Raleway-ExtraBold.woff';
import RalewayExtraBoldWOFF2 from '../assets/fonts/Raleway-ExtraBold.woff2';

// SourceSansPro
import SourceSansProLightTTF from '../assets/fonts/SourceSansPro-Light.ttf';
import SourceSansProLightWOFF from '../assets/fonts/SourceSansPro-Light.woff';
import SourceSansProLightWOFF2 from '../assets/fonts/SourceSansPro-Light.woff2';
import SourceSansProRegularTTF from '../assets/fonts/SourceSansPro-Regular.ttf';
import SourceSansProRegularWOFF from '../assets/fonts/SourceSansPro-Regular.woff';
import SourceSansProRegularWOFF2 from '../assets/fonts/SourceSansPro-Regular.woff2';
import SourceSansProBoldTTF from '../assets/fonts/SourceSansPro-Bold.ttf';
import SourceSansProBoldWOFF from '../assets/fonts/SourceSansPro-Bold.woff';
import SourceSansProBoldWOFF2 from '../assets/fonts/SourceSansPro-Bold.woff2';

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'FiraCode';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src:  url('${FiraCodeRegularTTF}') format('truetype'),
          url('${FiraCodeRegularWOFF}') format('woff'),
          url('${FiraCodeRegularWOFF2}') format('woff2');
  }
  @font-face {
    font-family: 'FiraCode';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src:  url('${FiraCodeMediumTTF}') format('truetype'),
          url('${FiraCodeMediumWOFF}') format('woff'),
          url('${FiraCodeMediumWOFF2}') format('woff2');
  }

  @font-face {
    font-family: 'Raleway';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src:  url('${RalewayRegularTTF}') format('truetype'),
          url('${RalewayRegularWOFF}') format('woff'),
          url('${RalewayRegularWOFF2}') format('woff2');
  }
  @font-face {
    font-family: 'Raleway';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src:  url('${RalewayExtraBoldTTF}') format('truetype'),
          url('${RalewayExtraBoldWOFF}') format('woff'),
          url('${RalewayExtraBoldWOFF2}') format('woff2');
  }

  @font-face {
    font-family: 'SourceSansPro';
    font-weight: 300;
    font-display: 'swap';
    font-style: 'normal';
    src:  url('${SourceSansProLightTTF}') format('truetype'),
          url('${SourceSansProLightWOFF}') format('woff'),
          url('${SourceSansProLightWOFF2}') format('woff2');
  }
  @font-face {
    font-family: 'SourceSansPro';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src:  url('${SourceSansProRegularTTF}') format('truetype'),
          url('${SourceSansProRegularWOFF}') format('woff'),
          url('${SourceSansProRegularWOFF2}') format('woff2');
  }
  @font-face {
    font-family: 'SourceSansPro';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src:  url('${SourceSansProBoldTTF}') format('truetype'),
          url('${SourceSansProBoldWOFF}') format('woff'),
          url('${SourceSansProBoldWOFF2}') format('woff2');
  }



  /* text selection color must be red */
  ::-moz-selection {
    /* background: #FFEEDD; */
    background: rgba(98, 241, 243,.7);
    color: #0B253E;
    text-shadow: none;
  }

  ::selection {
    /* background: #FFEEDD; */
    background: rgba(98, 241, 243,.7);
    color: #0B253E;
    text-shadow: none;
  }

  .link-link {
    cursor: url('/images/link.png'), pointer;
    color: inherit;
    font-weight: inherit;
    color: lime;
  }
  .link-killua {
    cursor: url('/images/killua.png'), pointer;
    color: inherit;
    font-weight: inherit;
    color: pink;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: SourceSansPro, sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    background: #0B253E;
    color: rgba(255, 238, 221,1);
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Raleway, sans-serif;
    font-weight: 600;
  }

  button {
    font-family: FiraCode, monospace;
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }

  p {
    font-family: SourceSansPro, sans-serif;
    font-weight: 300;
  }

  .social-link {
    position: relative;
    margin: auto;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
    @media (max-width: 578px) {
      margin-left: 0;
      margin-bottom: .75rem;
      width: fit-content;
    }
  }
  .social-link:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 60px;
    background: rgba(98, 241, 243, 0.2);
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }
  .social-link span {
    position: relative;
    font-size: 1rem;
    font-family: FiraCode, monospace;
    font-weight: 400;
    color: #62F1F3;
  }
  .social-link:hover:before {
    width: 100%;
  }
  .social-link:active {
    transform: scale(0.75);
  }
`;
