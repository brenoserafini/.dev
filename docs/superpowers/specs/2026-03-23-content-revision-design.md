# Content Revision — brenoserafini.dev

**Date:** 2026-03-23
**Scope:** Expansão moderada — reescrita de conteúdo existente + reorganização de stack + adição de CTA
**Files affected:** `src/locales/messages_pt.json`, `src/locales/messages_en.json`, `src/components/Cover/Cover.tsx`

---

## Objective

Reposicionar o site de "designer & desenvolvedor frontend genérico" para "Product Engineer com foco em Frontend", alinhando com o perfil profissional real e eliminando frases que posicionam abaixo do nível real (ex: "buscando me tornar fullstack").

---

## Changes

### 1. Headline — `about_me` (h1)

| | Antes | Depois |
|---|---|---|
| PT | `me chamo Breno, sou designer<br/> & desenvolvedor frontend_` | `me chamo Breno, sou<br/>Product Engineer_` |
| EN | `my name is Breno, I'm a designer<br/> & frontend developer_` | `I'm Breno —<br/>a Product Engineer_` |

---

### 2. Parágrafo 1 — `current_job` (identidade + posicionamento)

**PT:**
```
desenvolvedor com foco em frontend e produto, atuando há mais de 10 anos em ambientes de startup. Atualmente construindo um SaaS no modelo PLG na <a href='https://www.persora.com.br' target='_blank' rel='noreferrer'>Persora</a>, onde participo de todo o ciclo do produto — da definição à entrega em produção._
```

**EN:**
```
developer focused on frontend and product, with 10+ years building in startup environments. Currently building a PLG SaaS at <a href='https://www.persora.com.br' target='_blank' rel='noreferrer'>Persora</a>, actively involved in the full product cycle — from definition to production._
```

---

### 3. Parágrafo 2 — `experience` (o que faço hoje)

**PT:**
```
frontend com React é minha principal atuação, com forte colaboração em decisões de produto, integração com backend e infraestrutura cloud (AWS). Coordeno ciclos de desenvolvimento com Shape Up e cuido de deploy contínuo com GitHub Actions._
```

**EN:**
```
frontend with React is my main focus, with strong collaboration on product decisions, backend integration and cloud infrastructure (AWS). I coordinate development cycles with Shape Up and manage continuous deployments with GitHub Actions._
```

---

### 4. Parágrafo 3 — `curious` (diferencial)

**PT:**
```
formado em Design pela UFES, uso esse background para antecipar problemas de implementação e reduzir atrito entre UX e engenharia — entregando com mais velocidade e consistência._
```

**EN:**
```
Design degree from UFES. I use that background to anticipate implementation problems and reduce friction between UX and engineering — shipping faster and more consistently._
```

---

### 5. Intro das tags — `technologies`

| | Antes | Depois |
|---|---|---|
| PT | `aqui estão algumas com as quais tenho trabalhado nos últimos meses_` | `stack com que tenho trabalhado_` |
| EN | `here are some I've been working with in recent months_` | `stack I've been working with_` |

---

### 6. Tags — reorganização e adições

Ordenadas por área de similaridade (flat, sem labels visíveis na UI).

```javascript
const tags = [
  // Frontend
  'TypeScript',
  'JavaScript',
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
  // Infra & DevOps
  'AWS EC2 & Amplify',
  'Docker',
  'GitHub Actions / CI-CD',
  'GitFlow & GitHub',
  'CapRover',
];
```

**Adicionados:** TypeScript, PHP, MySQL, Docker, GitHub Actions / CI-CD
**Removidos:** nenhum
**Reordenados:** todos, por proximidade de área
**Correções de casing:** `'Javascript'` → `'JavaScript'` · `'Wordpress'` → `'WordPress'` (brand names corretos)

---

### 7. CTA — novo campo `cta`

Novo elemento adicionado em `Cover.tsx` entre `<TagContainer>` e `<Social>`. Linka para LinkedIn (`target="_blank"`).

| | Valor |
|---|---|
| PT | `aberto a oportunidades em times orientados a produto →` |
| EN | `open to opportunities in product-driven teams →` |

Os botões sociais existentes (LinkedIn, GitHub, Instagram) são mantidos abaixo do CTA.

**JSX exato a adicionar:**
```tsx
<p className='about'>
  <a
    href='https://www.linkedin.com/in/brenoserafini/'
    target='_blank'
    rel='noreferrer'>
    {t('cta')}
  </a>
</p>
```

Usa `className='about'` (mesmo das demais frases) para manter tipografia consistente sem nenhuma mudança de CSS. O `<a>` envolve todo o texto do CTA, incluindo a seta `→` que faz parte da string do locale.

**Atualização obrigatória da interface `Messages` em `Cover.tsx`** (linhas 33–50):
```typescript
interface Messages {
  pt: {
    hello: string;
    about_me: string;
    current_job: string;
    experience: string;
    curious: string;
    technologies: string;
    cta: string; // <-- adicionar
  };
  en: {
    hello: string;
    about_me: string;
    current_job: string;
    experience: string;
    curious: string;
    technologies: string;
    cta: string; // <-- adicionar
  };
}
```

Sem essa adição, `t('cta')` causará erro de compilação TypeScript.

---

## Implementation notes

- `current_job` em ambos os locales deve continuar como **raw HTML string** com a tag `<a>` embutida no valor JSON (ex: `"texto <a href='...'>Persora</a> texto_"`), pois o componente renderiza via `dangerouslySetInnerHTML`. Não mover o link para JSX.
- O campo `hello` (`"olá_"` / `"hello_"`) **não é alterado**.
- A headline EN (`"I'm Breno —<br/>a Product Engineer_"`) é uma reescrita estrutural intencional — não apenas substituição de palavras. O PT mantém "me chamo Breno, sou..."; o EN adota estilo mais direto. Ambos estão corretos.

## Files to edit

1. `src/locales/messages_pt.json` — atualizar `about_me`, `current_job`, `experience`, `curious`, `technologies` + adicionar `cta`
2. `src/locales/messages_en.json` — atualizar `about_me`, `current_job`, `experience`, `curious`, `technologies` + adicionar `cta`
3. `src/components/Cover/Cover.tsx` — atualizar array `tags` (reordenar + adicionar + corrigir casing), atualizar interface `Messages` (adicionar `cta`), renderizar CTA `<p>` acima do `<Social>`

---

## Out of scope

- Nenhuma mudança visual/CSS
- Nenhuma mudança de estrutura de componentes
- Nenhuma nova seção além do CTA
