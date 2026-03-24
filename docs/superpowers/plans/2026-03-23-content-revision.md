# Content Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reescrever o conteúdo do site para reposicionar Breno de "designer & frontend dev" para "Product Engineer com foco em Frontend", adicionando CTA e reorganizando a stack.

**Architecture:** Mudanças puramente de conteúdo em 3 arquivos. Os dois arquivos de locale recebem novos valores de string. O componente Cover.tsx recebe o array de tags atualizado, a interface Messages expandida e um novo elemento JSX de CTA. Sem novas dependências, sem mudanças de CSS.

**Tech Stack:** React, TypeScript, JSON (i18n manual via objeto de mensagens)

> **Nota sobre TDD:** Este plano não inclui testes unitários pois as mudanças são exclusivamente de conteúdo (strings JSON) e um único elemento JSX declarativo. A verificação é feita via compilação TypeScript (`tsc`) e inspeção visual no browser.

**Spec:** `docs/superpowers/specs/2026-03-23-content-revision-design.md`

---

## File Map

| Arquivo | Ação | Responsabilidade |
|---|---|---|
| `src/locales/messages_pt.json` | Modificar | Strings em português: about_me, current_job, experience, curious, technologies + novo cta |
| `src/locales/messages_en.json` | Modificar | Strings em inglês: about_me, current_job, experience, curious, technologies + novo cta |
| `src/components/Cover/Cover.tsx` | Modificar | Array tags, interface Messages (+ cta), render do CTA acima de Social |

---

## Task 1: Atualizar messages_pt.json

**Files:**
- Modify: `src/locales/messages_pt.json`

- [ ] **Step 1: Substituir conteúdo completo do arquivo**

```json
{
  "hello": "olá_",
  "about_me": "me chamo Breno, sou<br/>Product Engineer_",
  "current_job": "desenvolvedor com foco em frontend e produto, atuando há mais de 10 anos em ambientes de startup. Atualmente construindo um SaaS no modelo PLG na <a href='https://www.persora.com.br' target='_blank' rel='noreferrer'>Persora</a>, onde participo de todo o ciclo do produto — da definição à entrega em produção._",
  "experience": "frontend com React é minha principal atuação, com forte colaboração em decisões de produto, integração com backend e infraestrutura cloud (AWS). Coordeno ciclos de desenvolvimento com Shape Up e cuido de deploy contínuo com GitHub Actions._",
  "curious": "formado em Design pela UFES, uso esse background para antecipar problemas de implementação e reduzir atrito entre UX e engenharia — entregando com mais velocidade e consistência._",
  "technologies": "stack com que tenho trabalhado_",
  "cta": "aberto a oportunidades em times orientados a produto →"
}
```

- [ ] **Step 2: Verificar JSON válido**

```bash
node -e "JSON.parse(require('fs').readFileSync('src/locales/messages_pt.json','utf8')); console.log('valid')"
```

Saída esperada: `valid`

- [ ] **Step 3: Commit**

```bash
git add src/locales/messages_pt.json
git commit -m "Reescrever conteúdo PT para posicionamento Product Engineer"
```

---

## Task 2: Atualizar messages_en.json

**Files:**
- Modify: `src/locales/messages_en.json`

- [ ] **Step 1: Substituir conteúdo completo do arquivo**

```json
{
  "hello": "hello_",
  "about_me": "I'm Breno —<br/>a Product Engineer_",
  "current_job": "developer focused on frontend and product, with 10+ years building in startup environments. Currently building a PLG SaaS at <a href='https://www.persora.com.br' target='_blank' rel='noreferrer'>Persora</a>, actively involved in the full product cycle — from definition to production._",
  "experience": "frontend with React is my main focus, with strong collaboration on product decisions, backend integration and cloud infrastructure (AWS). I coordinate development cycles with Shape Up and manage continuous deployments with GitHub Actions._",
  "curious": "Design degree from UFES. I use that background to anticipate implementation problems and reduce friction between UX and engineering — shipping faster and more consistently._",
  "technologies": "stack I've been working with_",
  "cta": "open to opportunities in product-driven teams →"
}
```

- [ ] **Step 2: Verificar JSON válido**

```bash
node -e "JSON.parse(require('fs').readFileSync('src/locales/messages_en.json','utf8')); console.log('valid')"
```

Saída esperada: `valid`

- [ ] **Step 3: Commit**

```bash
git add src/locales/messages_en.json
git commit -m "Reescrever conteúdo EN para posicionamento Product Engineer"
```

---

## Task 3: Atualizar Cover.tsx

**Files:**
- Modify: `src/components/Cover/Cover.tsx`

- [ ] **Step 1: Substituir o array `tags` (linhas 20–31)**

Substituir o bloco atual:
```tsx
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
```

Pelo novo bloco:
```tsx
const tags = [
  'TypeScript',
  'JavaScript',
  'React',
  'Styled Components',
  'Bootstrap',
  'Node.js + Express',
  'PHP',
  'WordPress',
  'MongoDB',
  'MySQL',
  'AWS EC2 & Amplify',
  'Docker',
  'GitHub Actions / CI-CD',
  'GitFlow & GitHub',
  'CapRover',
];
```

- [ ] **Step 2: Atualizar a interface `Messages` (linhas 33–50) — adicionar `cta: string`**

Substituir:
```typescript
interface Messages {
  pt: {
    hello: string;
    about_me: string;
    current_job: string;
    experience: string;
    curious: string;
    technologies: string;
  };
  en: {
    hello: string;
    about_me: string;
    current_job: string;
    experience: string;
    curious: string;
    technologies: string;
  };
}
```

Por:
```typescript
interface Messages {
  pt: {
    hello: string;
    about_me: string;
    current_job: string;
    experience: string;
    curious: string;
    technologies: string;
    cta: string;
  };
  en: {
    hello: string;
    about_me: string;
    current_job: string;
    experience: string;
    curious: string;
    technologies: string;
    cta: string;
  };
}
```

- [ ] **Step 3: Adicionar CTA entre `<TagContainer>` e `<Social>`**

Localizar o trecho:
```tsx
        </TagContainer>
        <Social>
```

Substituir por:
```tsx
        </TagContainer>
        <p className='about'>
          <a
            href='https://www.linkedin.com/in/brenoserafini/'
            target='_blank'
            rel='noreferrer'>
            {t('cta')}
          </a>
        </p>
        <Social>
```

- [ ] **Step 4: Verificar compilação TypeScript**

```bash
npm run build 2>&1 | grep -E "error|✓"
```

Saída esperada: `✓ N modules transformed.` sem linhas de `error TS`.

Se aparecer erro TypeScript: verificar se `cta: string` foi adicionado à interface `Messages` em ambos os sub-objetos (`pt` e `en`).

- [ ] **Step 5: Verificar visualmente no browser**

```bash
npm run dev
```

Abrir `http://localhost:5173` e confirmar:
- h1 exibe "me chamo Breno, sou Product Engineer_"
- Três parágrafos com novo conteúdo
- Tags em nova ordem (TypeScript primeiro, CapRover por último)
- CTA aparece entre as tags e os botões sociais, linkando para LinkedIn
- Toggle PT/EN funciona corretamente em todos os campos

- [ ] **Step 6: Commit**

```bash
git add src/components/Cover/Cover.tsx
git commit -m "Atualizar tags, interface Messages e adicionar CTA no Cover"
```
