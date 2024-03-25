import { useState } from 'react';
import { Cover } from './components/Cover/Cover';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';

const LocalesContainer = styled.div`
  position: absolute;
  top: 70px;
  right: 70px;
  z-index: 10;
  @media (max-width: 578px) {
    /* top: 50px; */
    right: 20px;
  }
`;

export function Bs() {
  const initialLocale = localStorage.getItem('locale') as 'pt' | 'en';
  const [locale, setLocale] = useState<'pt' | 'en'>(initialLocale || 'en'); // Se o valor inicial for null, vamos assumir 'en'

  const handleLocale = (locale: 'pt' | 'en'): void => {
    setLocale(locale);
    localStorage.setItem('locale', locale);
  };

  return (
    <>
      <GlobalStyles/>
      <LocalesContainer>
        <div className="checkbox-wrapper-35">
          <input
            value="private"
            name="switch"
            id="switch"
            type="checkbox"
            className="switch"
            checked={locale === 'en' ? true : false}
            onClick={() => handleLocale(locale === 'en' ? 'pt' : 'en')}
          />
          <label htmlFor="switch">
            <span className="switch-x-toggletext">
              <span className="switch-x-unchecked">pt-BR</span>
              <span className="switch-x-checked">en-US</span>
            </span>
          </label>
        </div>
      </LocalesContainer>
      <Cover language={locale}/>
    </>
  );
}
