import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Content, Social } from './styles';

export function Cover() {
  return (
    <Container>
      <Content>
        {/* <p className='hello'>olá_ 🙋🏻‍♂️</p> */}
        <p className='hello'>olá_ <img src='/images/brenoByTitsay-shortpixel.png'alt='by Titsay' /></p>
        <h1>
          me chamo Breno, sou designer<br/>
          & desenvolvedor frontend_
        </h1>
        <p className='about'>sou formado em design pela Ufes e atualmente dedico a maior parte do meu tempo no desenvolvimento de um SaaS na Persora_</p>
        <p className='about'>desde 2010 construo coisas para a web e mais recentemente venho buscando experiências para me tornar um desenvolvedor full-stack_</p>
        <p className='about'>sempre que possível, busco contruir pequenos projetos que me permitam explorar novas tecnologias, linguagens de programação e frameworks_</p>
        <Social>
          <a
            className="social-link"
            href='https://www.linkedin.com/in/brenoserafini/'
            target={'_blank'}
            rel="noreferrer"
            style={{marginRight: 20}} >
            <span>linkedin_ <FontAwesomeIcon icon={faLinkedin} /></span>
          </a>
          <a
            className="social-link"
            href='https://github.com/brenoserafini'
            target={'_blank'}
            rel="noreferrer"
            style={{marginRight: 20}} >
            <span>github_ <FontAwesomeIcon icon={faGithub} /></span>
          </a>
          <a
            className="social-link"
            href='https://instagram.com/brenoserafini_'
            target={'_blank'}
            rel="noreferrer"
            style={{marginRight: 20}} >
            <span>instagram_ <FontAwesomeIcon icon={faInstagram} /></span>
          </a>
        </Social>
      </Content>
    </Container>
  );
}
