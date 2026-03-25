import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Content, Social, Tag, TagContainer } from './styles';


import messagesPt from '../../locales/messages_pt.json';
import messagesEn from '../../locales/messages_en.json';

const messages = {
  'pt': messagesPt,
  'en': messagesEn
};

interface CoverProps {
  language: 'pt' | 'en';
}

export function Cover({ language }: CoverProps ) {

  const tags = [
    // Frontend
    'JavaScript',
    'TypeScript',
    'React',
    'Styled Components',
    'Bootstrap',
    // Backend
    'Node.js + Express',
    'PHP',
    'WordPress',
    // Data
    'MongoDB',
    'MySQL',
    // Infra
    'AWS EC2 & Amplify',
    'Docker',
    'GitHub Actions / CI-CD',
    'GitFlow & GitHub',
    'CapRover',
    // Design
    'Figma',
    // AI
    'Claude Code',
    'IA',
    // Método
    'Notion',
    'Shape Up',
  ];

  interface Messages {
    pt: {
      hello: string;
      about_me: string;
      current_job: string;
      experience: string;
      curious: string;
      what_i_do_label: string;
      what_i_do: string;
      technologies: string;
      cta: string;
    };
    en: {
      hello: string;
      about_me: string;
      current_job: string;
      experience: string;
      curious: string;
      what_i_do_label: string;
      what_i_do: string;
      technologies: string;
      cta: string;
    };
  }

  const t = (key: keyof Messages['pt'] | keyof Messages['en']) => messages[language][key];


  return (
    <Container>
      <Content>
        <p className='hello'><span>🧔🏻</span> {t('hello')}</p>
        {/* <p className='hello'><img src='/images/brenoByTitsay-shortpixel.png'alt='by Titsay' /> olá_</p> */}
        <h1 dangerouslySetInnerHTML={{__html: t('about_me')}} />
        <p className='about' dangerouslySetInnerHTML={{ __html: t('current_job') }} />
        <p className='about'>{t('experience')}</p>
        <p className='about'>{t('curious')}</p>
        <p className='section-label'>{t('what_i_do_label')}</p>
        <p className='about'>{t('what_i_do')}</p>
        <p className='section-label'>{t('technologies')}</p>
        <TagContainer>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
        <p className='cta-line'>
          <a
            href='https://www.linkedin.com/in/brenoserafini/'
            target='_blank'
            rel='noreferrer'>
            {t('cta')}
          </a>
        </p>
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
