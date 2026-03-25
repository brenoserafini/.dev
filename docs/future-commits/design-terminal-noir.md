# Design: Terminal Noir

Revisão visual do site com direção estética de terminal de alta qualidade.
Sem mudanças de estrutura ou conteúdo — apenas CSS e um ajuste mínimo de classes JSX.

---

## Arquivos modificados

| Arquivo | Tipo de mudança |
|---|---|
| `src/styles/GlobalStyles.ts` | Fundo, fontes, animações, social links |
| `src/components/Cover/styles.ts` | Redesign completo dos componentes styled |
| `src/components/Cover/Cover.tsx` | Troca de dois `className` (sem mudança de conteúdo) |

---

## GlobalStyles.ts

### Background do body

```css
background-color: #080d14;
background-image:
  radial-gradient(ellipse 65% 45% at 0% 0%, rgba(98, 241, 243, 0.055) 0%, transparent 55%),
  repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.09) 3px, rgba(0,0,0,0.09) 4px);
```

- `#080d14` — near-black com leve tint azul (mais escuro que o antigo `#0B253E`)
- `radial-gradient` — glow cyan sutil no canto superior esquerdo, simula o terminal "ativo"
- `repeating-linear-gradient` — linhas horizontais a cada 4px com opacidade 9%, efeito CRT scanlines

### Grain overlay (body::after)

```css
body::after {
  content: '';
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background-image: url("data:image/svg+xml, [SVG com feTurbulence fractalNoise]");
  opacity: 0.028;
  pointer-events: none;
  z-index: 9999;
}
```

SVG com filtro `feTurbulence` (fractalNoise, baseFrequency 0.85) renderizado como textura de grain/película por cima de toda a página. Opacity 2.8% — quase imperceptível, mas adiciona profundidade. `pointer-events: none` garante que não interfere em cliques.

### Animação de entrada

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

Usada em cascata nos filhos diretos do `Content` via `animation-delay` crescente.

### Fontes

| Contexto | Fonte | Motivo |
|---|---|---|
| `*` (default) | FiraCode | tudo que não é sobrescrito vira monospace |
| `h1–h6` | Raleway 700 | contraste tipográfico com o monospace |
| `p.about` (sobrescrito em styles.ts) | SourceSansPro | legibilidade em parágrafos longos |

### Social links

Removido o efeito de bolha (pseudo-elemento `::before` que expandia). Substituído por:

```css
.social-link span {
  color: rgba(98, 241, 243, 0.38);
  transition: color 0.15s ease;
}
.social-link:hover span {
  color: rgba(98, 241, 243, 0.9);
}
```

Hover simples de cor — de muted para full cyan.

---

## Cover/styles.ts

### Container

```css
min-height: 100vh;
padding: 80px 2rem;
```

Substituído `height: 100vh` por `min-height` para evitar overflow em viewports pequenas. Padding vertical garante espaço em telas altas.

### Content — borda esquerda

```css
padding-left: 2.5rem;
border-left: 1px solid rgba(98, 241, 243, 0.12);
```

Linha vertical de 1px em cyan muted âncora o conteúdo e cria a ilusão de "cursor column" de terminal.

### Content — staggered animation

```css
> * { animation: fadeInUp 0.5s ease both; }
> :nth-child(1)  { animation-delay: 0.05s; }
> :nth-child(2)  { animation-delay: 0.2s;  }
/* ... até :nth-child(11) com delay 1.14s */
```

`animation-fill-mode: both` mantém o elemento invisível (`opacity: 0`) antes da animação começar, sem precisar de `opacity: 0` explícito. Cada filho do Content entra com ~100ms de diferença, simulando texto sendo impresso no terminal.

Ordem dos filhos no JSX:
1. `p.hello`
2. `h1`
3. `p.about` (current_job)
4. `p.about` (experience)
5. `p.about` (current_role)
6. `p.about` (ai_workflow)
7. `p.about` (curious)
8. `p.section-label` (technologies)
9. `TagContainer`
10. `p.cta-line`
11. `Social`

### Prompts via CSS ::before

**Greeting (`p.hello`)**
```css
.hello::before { content: '> '; color: rgba(98, 241, 243, 0.22); }
```

**Parágrafos about (`p.about`)**
```css
p.about {
  padding-left: 2.25rem;
  position: relative;
}
p.about::before {
  content: '//';
  position: absolute;
  left: 0; top: 0.18em;
  font-size: 0.7rem;
  color: rgba(98, 241, 243, 0.16);
}
```

**CTA (`p.cta-line`)**
```css
.cta-line { padding-left: 1.5rem; position: relative; }
.cta-line::before { content: '$ '; position: absolute; left: 0; }
```

Todos os prompts (`>`, `//`, `$`) são puramente visuais via CSS — o HTML/conteúdo não foi alterado.

### Tags (`Tag`)

```css
Tag {
  font-size: 0.6875rem;
  border-radius: 2px; /* quase quadrado, não arredondado */
  background: rgba(98, 241, 243, 0.04);
  border: 1px solid rgba(98, 241, 243, 0.1);
}
Tag::before {
  content: '--';
  color: rgba(98, 241, 243, 0.22);
  margin-right: 0.15rem;
}
```

O prefixo `--` imita flags de CLI (ex: `--react`, `--typescript`). Aplicado via `::before` — o array `tags` no componente não foi alterado.

### Section label (`.section-label`)

```css
.section-label {
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(98, 241, 243, 0.28);
}
```

Label de seção discreto acima das tags — substitui o parágrafo `p.about` que introduzia a stack.

### Social separator

```css
Social {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(98, 241, 243, 0.07);
}
```

Linha separadora muito sutil entre o CTA e os links sociais.

---

## Cover.tsx — mudanças de className

Dois elementos tiveram o `className` trocado para ativar os estilos específicos acima. Sem mudança de conteúdo ou estrutura:

```tsx
// antes
<p className='about'>{t('technologies')}</p>
// depois
<p className='section-label'>{t('technologies')}</p>

// antes
<p className='about'><a ...>{t('cta')}</a></p>
// depois
<p className='cta-line'><a ...>{t('cta')}</a></p>
```

---

## Paleta de cores de referência

| Token | Valor | Uso |
|---|---|---|
| Background | `#080d14` | fundo base |
| Cyan principal | `#62F1F3` | cor de acento (herdada do design anterior) |
| Cyan 90% | `rgba(98,241,243,0.9)` | hover nos social links |
| Cyan 55–60% | `rgba(98,241,243,0.55–0.6)` | tags, CTA |
| Cyan 38–45% | `rgba(98,241,243,0.38–0.45)` | hello, social links idle |
| Cyan 16–22% | `rgba(98,241,243,0.16–0.22)` | prompts `//` `>` `$`, decorativo |
| Cyan 7–12% | `rgba(98,241,243,0.07–0.12)` | bordas, separadores |
| Texto principal | `rgba(240,248,255,0.96)` | h1 |
| Texto corpo | `rgba(170,192,214,0.72)` | parágrafos about |
| Texto UI | `rgba(200,218,236,0.88)` | body default |
