import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Content, Social, Tag, TagContainer } from './styles';

export function Cover() {

  const tags = [
    'Javascript',
    'React',
    'Styled Components',
    'Bootstrap',
    'Wordpress',
    'MongoDB',
    'Node.js + Express',
    'GitFlow & GitHub',
    'AWS EC2 & Amplify',
    'CapRover',
  ];
  return (
    <Container>
      <Content>
        <p className='hello'><span>🧔🏻</span> olá_</p>
        {/* <p className='hello'><img src='/images/brenoByTitsay-shortpixel.png'alt='by Titsay' /> olá_</p> */}
        <h1>
          me chamo Breno, sou designer<br/>
          & desenvolvedor frontend_
        </h1>
        <p className='about'>formado em design pela Ufes, atualmente sou responsável pelo desenvolvimento de um produto digital apaixonante na <a href='https://www.persora.com.br' target="_blank" rel="noreferrer">Persora</a>_</p>
        <p className='about'>desde 2010 construo coisas para a internet e mais recentemente tenho buscado experiências para me tornar um dev full stack_</p>
        <p className='about'>naturalmente curioso, estou sempre experimentando novas tecnologias e ferramentas para impulsionar os projetos em que atuo_</p>
        <p className='about '>aqui estão algumas com as quais tenho trabalhado nos últimos meses_</p>
        <TagContainer>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
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
