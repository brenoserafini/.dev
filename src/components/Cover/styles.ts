import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 576px) {
    height: auto;
    padding-bottom: 50px;
    padding-top: 10px;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 20px 15px;

  .hello {
    font-family: FiraCode, sans-serif;
    color: #62F1F3;
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    span {
      font-size: 2.4rem;
    }
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
    margin-bottom: .65rem;
    color: rgba(255, 248, 251,.75);
    line-height: 1.7rem;
    a {
      color: rgba(255, 248, 251,1);
      font-weight: inherit;
    }
  }

  @media (max-width: 992px) {
    p.about {
      max-width: 90%;
    }
  }
`;

export const TagContainer = styled.div`
  max-width: 630px;
  margin: 1rem 0 3rem;
`;

export const Tag = styled.div`
  margin-top: .775rem;
  margin-right: .575rem;
  display: inline-block;
  color: rgba(98, 241, 243,.9);
  /* color: rgb(94, 234, 212, 1); */
  background-color: rgba(98, 241, 243,.1);
  border: 1px solid rgba(98, 241, 243,.1);
  /* color: rgb(94, 234, 212, .8);
  background-color: rgb(94, 234, 212, .1);
  border: 1px solid rgb(94, 234, 212, .1); */
  padding: .375rem .6rem;
  border-radius: 6px;
`;

export const Social = styled.div`
  margin-top: 4rem;

  @media (max-width: 578px) {
    margin-top: 1rem;
    display: inline-flex;
    flex-direction: column;
  }

`;
