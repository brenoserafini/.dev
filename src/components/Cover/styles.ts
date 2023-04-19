import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-height: 540px) {
    height: auto;
    padding-bottom: 50px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 20px 15px;
  /* background: red; */

  .hello {
    font-family: FiraCode, sans-serif;
    color: #62F1F3;
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    img {
      width: 2.4rem;
      margin-bottom: -.5rem;
    }
  }

  h1 {
    font-size: 2.6rem;
    margin-bottom: 1.2rem;
  }

  p.about {
    max-width: 56%;
    font-size: 1.16rem;
    margin-bottom: .4rem;
    opacity: .6;
  }

  @media (max-width: 992px) {
    p.about {
      max-width: 90%;
    }
  }
`;

export const Social = styled.div`
  margin-top: 2.6rem;

  @media (max-width: 578px) {
    display: inline-flex;
    flex-direction: column;
  }

`;
