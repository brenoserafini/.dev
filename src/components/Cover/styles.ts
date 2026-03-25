import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 80px 2rem;

  @media (max-width: 576px) {
    padding: 60px 1.5rem 80px;
    align-items: flex-start;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 860px;
  padding-left: 2.5rem;
  border-left: 1px solid rgba(98, 241, 243, 0.12);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  > * {
    animation: fadeInUp 0.5s ease both;
  }
  > :nth-child(1) { animation-delay: 0.05s; }
  > :nth-child(2) { animation-delay: 0.2s; }
  > :nth-child(3) { animation-delay: 0.35s; }
  > :nth-child(4) { animation-delay: 0.46s; }
  > :nth-child(5) { animation-delay: 0.57s; }
  > :nth-child(6) { animation-delay: 0.67s; }
  > :nth-child(7) { animation-delay: 0.77s; }
  > :nth-child(8) { animation-delay: 0.87s; }
  > :nth-child(9) { animation-delay: 0.96s; }
  > :nth-child(10) { animation-delay: 1.05s; }
  > :nth-child(11) { animation-delay: 1.14s; }

  .hello {
    font-family: FiraCode, monospace;
    font-size: 0.8125rem;
    color: rgba(98, 241, 243, 0.45);
    margin-bottom: 1.75rem;
    letter-spacing: 0.06em;

    &::before {
      content: '> ';
      color: rgba(98, 241, 243, 0.22);
    }

    span {
      font-size: 0.875rem;
      margin-right: 0.2rem;
    }
  }

  h1 {
    font-size: clamp(2rem, 4.5vw, 3.75rem);
    font-weight: 700;
    line-height: 1.1;
    color: rgba(240, 248, 255, 0.96);
    margin-bottom: 2.25rem;
    letter-spacing: -0.025em;
  }

  p.about {
    position: relative;
    max-width: 76ch;
    font-family: SourceSansPro, sans-serif;
    font-size: 0.9375rem;
    font-weight: 300;
    line-height: 1.85;
    margin-bottom: 0.6rem;
    color: rgba(170, 192, 214, 0.72);
    padding-left: 2.25rem;

    &::before {
      content: '//';
      position: absolute;
      left: 0;
      top: 0.18em;
      font-family: FiraCode, monospace;
      font-size: 0.7rem;
      font-weight: 400;
      color: rgba(98, 241, 243, 0.16);
      line-height: 1;
    }

    a {
      color: rgba(220, 236, 250, 0.82);
      border-bottom: 1px solid rgba(98, 241, 243, 0.18);
      transition: color 0.15s, border-color 0.15s;

      &:hover {
        color: #62F1F3;
        border-bottom-color: rgba(98, 241, 243, 0.5);
      }
    }
  }

  .section-label {
    margin-top: 2rem;
    margin-bottom: 0.25rem;
    font-family: FiraCode, monospace;
    font-size: 0.65rem;
    font-weight: 400;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(98, 241, 243, 0.28);
    padding-left: 0;
  }

  .cta-line {
    position: relative;
    margin-top: 0.25rem;
    padding-left: 1.5rem;
    font-family: FiraCode, monospace;
    font-size: 0.8125rem;
    color: rgba(98, 241, 243, 0.5);

    &::before {
      content: '$ ';
      position: absolute;
      left: 0;
      color: rgba(98, 241, 243, 0.22);
      font-family: FiraCode, monospace;
    }

    a {
      color: rgba(98, 241, 243, 0.55);
      transition: color 0.15s;

      &:hover {
        color: rgba(98, 241, 243, 0.95);
      }
    }
  }

  @media (max-width: 992px) {
    p.about {
      max-width: 100%;
    }
  }

  @media (max-width: 576px) {
    padding-left: 1.5rem;
    border-left-color: rgba(98, 241, 243, 0.08);
  }
`;

export const TagContainer = styled.div`
  max-width: 680px;
  margin: 0.5rem 0 1.75rem;
`;

export const Tag = styled.div`
  display: inline-block;
  margin: 0.3rem 0.3rem 0 0;
  padding: 0.2rem 0.55rem;
  font-family: FiraCode, monospace;
  font-size: 0.6875rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: rgba(98, 241, 243, 0.58);
  background: rgba(98, 241, 243, 0.04);
  border: 1px solid rgba(98, 241, 243, 0.1);
  border-radius: 2px;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  cursor: default;

  &::before {
    content: '--';
    color: rgba(98, 241, 243, 0.22);
    margin-right: 0.15rem;
  }

  &:hover {
    background: rgba(98, 241, 243, 0.08);
    border-color: rgba(98, 241, 243, 0.22);
    color: rgba(98, 241, 243, 0.9);
  }
`;

export const Social = styled.div`
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(98, 241, 243, 0.07);

  @media (max-width: 578px) {
    display: flex;
    flex-direction: column;
  }
`;
