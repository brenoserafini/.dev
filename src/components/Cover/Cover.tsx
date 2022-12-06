import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Content, Social } from './styles';

export function Cover() {
  return (
    <Container>
      <Content>
        <p className='hello'>olá_ 🙋🏻‍♂️</p>
        <h1>
          eu sou o Breno, sou designer<br/>
          & desenvolvedor frontend_
        </h1>
        <p className='about'>formado em design pela Ufes, atualmente trabalho no desenvolvimento de um SaaS na Persora_</p>
        <p className='about'>desde 2010 construo coisas para a web e mais recentemente venho buscando experiências para me tornar um desenvolvedor full-stack_</p>
        <Social>
          <a
            className="social-link"
            href='https://www.linkedin.com/in/brenoserafini/'
            target={'_blank'}
            rel="noreferrer"
            style={{marginRight: 20}} >
            <span>linkedin <FontAwesomeIcon icon={faLinkedin} /></span>
          </a>
          <a
            className="social-link"
            href='https://github.com/brenoserafini'
            target={'_blank'}
            rel="noreferrer" >
            <span>github <FontAwesomeIcon icon={faGithub} /></span>
          </a>
        </Social>
      </Content>
    </Container>
  );
}
