import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ::-moz-selection {
    background: rgba(98, 241, 243, .7);
    color: #080d14;
    text-shadow: none;
  }

  ::selection {
    background: rgba(98, 241, 243, .7);
    color: #080d14;
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
    font-family: FiraCode, monospace;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    background-color: #080d14;
    background-image:
      radial-gradient(ellipse 65% 45% at 0% 0%, rgba(98, 241, 243, 0.055) 0%, transparent 55%),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 3px,
        rgba(0, 0, 0, 0.09) 3px,
        rgba(0, 0, 0, 0.09) 4px
      );
    color: rgba(200, 218, 236, 0.88);
    font-size: 15px;
    min-height: 100vh;
  }

  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.028;
    pointer-events: none;
    z-index: 9999;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Raleway, sans-serif;
    font-weight: 700;
  }

  button {
    font-family: FiraCode, monospace;
    cursor: pointer;
    font-size: 0.875rem;
    color: #62F1F3;
  }

  p {
    font-family: FiraCode, monospace;
    font-weight: 400;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    padding: 8px 2.5rem 8px 0;
    transition: all 0.15s ease;
    border: none;
    background: none;
    cursor: pointer;
    @media (max-width: 578px) {
      margin-left: 0;
      margin-bottom: .5rem;
      width: fit-content;
      padding-right: 0;
      display: block;
    }
  }
  .social-link::before {
    display: none;
  }
  .social-link span {
    position: relative;
    font-size: 0.8125rem;
    font-family: FiraCode, monospace;
    font-weight: 400;
    color: rgba(98, 241, 243, 0.38);
    letter-spacing: 0.04em;
    transition: color 0.15s ease;
  }
  .social-link:hover span {
    color: rgba(98, 241, 243, 0.9);
  }
  .social-link:active {
    transform: none;
  }

  .checkbox-wrapper-35 .switch {
    display: none;
  }

  .checkbox-wrapper-35 .switch + label {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #ccc;
    cursor: pointer;
    display: flex;
    font-size: 12px;
    line-height: 15px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .checkbox-wrapper-35 .switch + label::before,
  .checkbox-wrapper-35 .switch + label::after {
    content: '';
    display: block;
  }

  .checkbox-wrapper-35 .switch + label::before {
    background-color: #3de5a5;
    border-radius: 500px;
    height: 15px;
    margin-right: 8px;
    -webkit-transition: background-color 0.325s ease-out;
    transition: background-color 0.325s ease-out;
    width: 25px;
  }

  .checkbox-wrapper-35 .switch + label::after {
    background-color: #fff;
    border-radius: 13px;
    box-shadow: 0 3px 1px 0 rgba(37, 34, 71, 0.05), 0 2px 2px 0 rgba(37, 34, 71, 0.1), 0 3px 3px 0 rgba(37, 34, 71, 0.05);
    height: 13px;
    left: 1px;
    position: absolute;
    top: 1px;
    -webkit-transition: -webkit-transform 0.125s ease-out;
    transition: -webkit-transform 0.125s ease-out;
    transition: transform 0.325s ease-out;
    transition: transform 0.325s ease-out, -webkit-transform 0.325s ease-out;
    width: 13px;
  }

  .checkbox-wrapper-35 .switch + label .switch-x-toggletext {
    display: block;
    font-weight: bold;
    height: 15px;
    overflow: hidden;
    position: relative;
    width: 35px;
  }

  .checkbox-wrapper-35 .switch + label .switch-x-unchecked,
  .checkbox-wrapper-35 .switch + label .switch-x-checked {
    left: 0;
    position: absolute;
    top: 0;
    -webkit-transition: opacity 0.325s ease-out, -webkit-transform 0.325s ease-out;
    transition: opacity 0.325s ease-out, -webkit-transform 0.125s ease-out;
    transition: transform 0.325s ease-out, opacity 0.325s ease-out;
    transition: transform 0.325s ease-out, opacity 0.325s ease-out, -webkit-transform 0.325s ease-out;
  }

  .checkbox-wrapper-35 .switch + label .switch-x-unchecked {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }

  .checkbox-wrapper-35 .switch + label .switch-x-checked {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  .checkbox-wrapper-35 .switch:checked + label::before {
    background-color: #f22e55;
  }

  .checkbox-wrapper-35 .switch:checked + label::after {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  .checkbox-wrapper-35 .switch:checked + label .switch-x-unchecked {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  .checkbox-wrapper-35 .switch:checked + label .switch-x-checked {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }

`;
