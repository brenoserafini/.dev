# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
npm run dev       # inicia o servidor de desenvolvimento (Vite)
npm run build     # tsc + vite build + gera deploy.tar para o CapRover
npm run preview   # preview do build local
npx eslint src/   # lint manual
```

Não há testes automatizados neste projeto.

## Arquitetura

Site de página única (`index.html`) com React + TypeScript + Vite. Toda a interface vive em um único componente: `src/components/Cover/Cover.tsx`, renderizado por `src/Bs.tsx` e montado em `src/main.tsx`.

### Internacionalização (i18n)

Sem biblioteca — tradução manual via JSON:

- `src/locales/messages_pt.json` — português (padrão)
- `src/locales/messages_en.json` — inglês

O estado de locale fica em `Bs.tsx` (persistido em `localStorage`) e passado como prop `language` para `Cover`. Dentro de `Cover`, a função `t(key)` lê o objeto de mensagens correspondente.

### Estilo

Styled-components. A divisão é:

| Arquivo | Responsabilidade |
|---|---|
| `src/styles/GlobalStyles.ts` | reset, variáveis de fonte, body, animações CSS, classes utilitárias (`social-link`, `checkbox-wrapper-35`) |
| `src/components/Cover/styles.ts` | componentes styled: `Container`, `Content`, `TagContainer`, `Tag`, `Social` |

**Não usar CSS modules nem classes inline** — todo estilo vai em styled-components ou no GlobalStyles.

### Direção visual: Terminal Noir

O design segue a estética de terminal documentada em `docs/future-commits/design-terminal-noir.md`. Pontos críticos:

- Cor de acento: `#62F1F3` (cyan). Nunca substituir por outra cor sem revisão visual completa.
- Fontes: `FiraCode` (default/monospace), `Raleway` (headings), `SourceSansPro` (`p.about`).
- Prompts de terminal via CSS `::before` — nunca via conteúdo HTML:
  - `p.hello::before` → `❯_`
  - `p.about::before` → `//`
  - `p.cta-line::before` → `$`
- Tags prefixadas com `--` via `Tag::before` (imitando flags de CLI).
- Animações de entrada: `fadeInUp` em cascata nos filhos diretos de `Content` (staggered via `nth-child`). Adicionar novos filhos exige ajustar os delays.
- Animação de digitação no greeting: `typing` + `blink-cursor` — o número de steps em `typing` deve corresponder ao número de caracteres do texto.

### Deploy

`npm run build` gera `deploy.tar` com `captain-definition` + `dist/`. O arquivo é enviado manualmente ao CapRover. `captain-definition` instrui o CapRover a usar `socialengine/nginx-spa` como imagem base.
