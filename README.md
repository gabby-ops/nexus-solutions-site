# Nexus Solutions — Site Institucional

> Refatoração completa do site institucional com foco em **design moderno**, **performance**, **conversão de leads** e **código componentizado**.  
> Conteúdo alinhado ao posicionamento oficial: [nexussolutions.com.br](https://nexussolutions.com.br/)

---

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Stack Tecnológica](#stack-tecnológica)
- [Arquitetura e Estrutura](#arquitetura-e-estrutura)
- [Funcionalidades](#funcionalidades)
- [Como Rodar](#como-rodar)
- [Scripts](#scripts)
- [Deploy](#deploy)
- [Qualidade de Código](#qualidade-de-código)
- [Uso de IA](#uso-de-ia)
- [Licença](#licença)

---

## Sobre o Projeto

O **nexus-solutions-site** é o site institucional da Nexus Solutions, empresa posicionada no mercado de Inteligência Artificial, automação e desenvolvimento de soluções digitais escaláveis.

A aplicação foi construída como **Single Page Application (SPA)** utilizando React 18 com Vite como bundler, Tailwind CSS para estilização e o ecossistema Radix UI (padrão shadcn/ui) para componentes acessíveis. O projeto está publicado em produção via Vercel, com suporte a **internacionalização (PT/EN)** e **alternância de tema (dark/light)**.

| Atributo | Valor |
|----------|-------|
| Repositório | `gabby-ops/nexus-solutions-site` |
| Versão | `0.0.0` |
| Tipo de módulo | ESM (`type: module`) |
| Branch principal | `main` |
| URL de produção | [nexus-solutions-site.vercel.app](https://nexus-solutions-site.vercel.app) |
| Licença | Privado — Nexus Solutions |

Os pilares da refatoração são:

- **Design moderno** — interface visual contemporânea, alinhada ao mercado de tecnologia premium.
- **Performance** — tempo de carregamento otimizado, builds via Vite e foco em métricas Lighthouse.
- **Conversão** — jornada orientada à geração de leads, com formulários integrados e CTAs estratégicos.
- **Componentização** — arquitetura modular que favorece manutenção, reuso e escalabilidade.

---

## Stack Tecnológica

### Distribuição de linguagens

| Linguagem | % | Uso principal |
|-----------|----|---------------|
| JavaScript | 74,8% | Componentes React e lógica |
| TypeScript | 22,9% | Dados tipados e contratos de interface |
| CSS | 1,6% | Estilos customizados |
| HTML | 0,7% | Entry point (`index.html`) |

### Dependências principais

| Categoria | Versão | Tecnologias |
|-----------|--------|-------------|
| Framework UI | React 18.2 | `react`, `react-dom`, `react-router-dom` 6.30 |
| Build tool | Vite 6.4 | `@vitejs/plugin-react` |
| Estilização | Tailwind 3.4 | `tailwindcss-animate`, `tailwind-merge`, `clsx`, `class-variance-authority` |
| Componentes | Radix UI | 23 pacotes `@radix-ui/*` (dialog, dropdown, tabs, tooltip…) |
| Animações | Framer Motion 11.16 | `framer-motion` |
| 3D / WebGL | Three.js 0.171 | `three` |
| Formulários | React Hook Form 7.54 | `react-hook-form`, `@hookform/resolvers`, `zod` |
| Data fetching | TanStack Query 5.84 | `@tanstack/react-query` |
| Pagamentos | Stripe 3.0 / 5.2 | `@stripe/react-stripe-js`, `@stripe/stripe-js` |
| Gráficos | Recharts 2.15 | `recharts` |
| Mapas | React Leaflet 4.2 | `react-leaflet` |
| Notificações | Sonner 2.0 / Toast 2.6 | `sonner`, `react-hot-toast` |
| Rich text | React Quill 2.0 | `react-quill`, `react-markdown` |
| Exportação | jsPDF 4.0 / html2canvas 1.4 | `jspdf`, `html2canvas` |
| Utilitários | — | `lodash`, `date-fns`, `canvas-confetti` |

### Ferramentas de desenvolvimento

- **ESLint 9.19** com plugins para React, React Hooks, React Refresh e detecção de imports não utilizados.
- **TypeScript 5.9** configurado via `jsconfig.json` para verificação de tipos em projeto JS.
- **PostCSS 8.5 + Autoprefixer** para processamento de CSS e compatibilidade cross-browser.
- **Vite 6.4** como bundler, provendo HMR e builds otimizados para produção.

---

## Arquitetura e Estrutura

### Arquivos de configuração

| Arquivo | Função |
|---------|--------|
| `vite.config.js` | Bundler Vite (aliases, plugins, build) |
| `tailwind.config.js` | Design tokens, tema, breakpoints e paths de conteúdo |
| `postcss.config.js` | Pipeline PostCSS (Tailwind + Autoprefixer) |
| `eslint.config.js` | Regras de linting (flat config, ESLint 9) |
| `jsconfig.json` | Path aliases e checagem de tipos em JS |
| `components.json` | Configuração shadcn/ui (paths, estilo, ícones) |
| `manifest.json` | Web App Manifest (PWA / metadados) |
| `vercel.json` | Configuração de deploy e rewrites na Vercel |

### Organização de pastas (`src/`)

```
src/
├── pages/                  # Rotas da aplicação
│   ├── Home.jsx            # / — Página inicial
│   ├── Servicos.jsx        # /servicos — Página de serviços
│   └── IaAutomacao.jsx     # /ia-automacao — IA & Automação
│
├── components/
│   └── home/               # Seções modulares da home
│       ├── Hero
│       ├── Servicos
│       ├── Sobre
│       ├── Stats
│       ├── CTA
│       └── Contato
│
├── data/
│   └── servicesDetail.ts   # Conteúdo bilíngue PT/EN (descrições, benefícios, diferenciais)
│
├── api/
│   └── lead.ts             # Mock de envio de lead (substituir por fetch real ao conectar backend)
│
└── lib/
    ├── LanguageContext.jsx  # Contexto de i18n com suporte a PT/EN
    └── ThemeContext.jsx     # Gerenciamento de tema claro/escuro via variáveis CSS
```

---

## Funcionalidades

### Institucional e marketing
- Página inicial com hero, estatísticas, seção sobre e chamada para ação.
- Página dedicada a serviços com conteúdo detalhado bilíngue (PT/EN).
- Página especializada em **IA e Automação** — diferencial de posicionamento.
- Formulário de captação de leads com validação via **Zod + React Hook Form**.

### Experiência do usuário
- Tema claro/escuro com persistência via `ThemeContext`.
- Internacionalização PT/EN via `LanguageContext`.
- Animações fluidas com **Framer Motion**.
- Elementos 3D via **Three.js** (hero / background).
- Componentes acessíveis com cobertura **WAI-ARIA** via Radix UI.

### Recursos avançados
- Integração de pagamentos via **Stripe** (planos/checkout).
- Mapas interativos com **React Leaflet**.
- Exportação de documentos via **jsPDF + html2canvas**.
- Visualização de dados com **Recharts**.
- Editor rich text com **React Quill** e renderização Markdown.
- Drag-and-drop via `@hello-pangea/dnd`.

---

## Como Rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173` (porta padrão do Vite).

---

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento com HMR (porta 5173) |
| `npm run build` | Build otimizado de produção em `dist/` |
| `npm run preview` | Serve localmente o build de produção para validação |
| `npm run lint` | ESLint em modo quiet |
| `npm run lint:fix` | Corrige automaticamente problemas de lint |
| `npm run typecheck` | Verificação de tipos via `tsc` com `jsconfig.json` |

---

## Deploy

```bash
npm run build
```

A pasta `dist/` contém o build estático pronto para publicação.

### Vercel (recomendado)
Conecte o repositório; framework preset **Vite**; build `npm run build`; output `dist`.  
O arquivo `vercel.json` já configura os rewrites necessários para o roteamento SPA.

### Netlify
Conecte o repositório; build `npm run build`; publish directory `dist`.  
Adicione um arquivo `_redirects` com `/* /index.html 200` para garantir o roteamento client-side.

### GitHub Pages
Defina `base` no `vite.config.js` como `'/nome-do-repo/'` e use um workflow de deploy ou `gh-pages`.  
Consulte: [Vite — Static Deploy](https://vitejs.dev/guide/static-deploy.html)

---

## Qualidade de Código

O projeto adota as seguintes práticas de qualidade:

- **ESLint** com configuração flat config (ESLint 9), cobrindo React, Hooks e imports não utilizados.
- **TypeScript** via `jsconfig.json` para checagem estática sem migração completa.
- **Zod** para validação de esquemas em formulários e contratos de dados.
- **Radix UI** garantindo acessibilidade WAI-ARIA em componentes interativos.
- **React Query** para gerenciamento de estado assíncrono e cache de dados.

> **Nota:** o endpoint de envio de leads (`src/api/lead.ts`) está em modo *mock*. Substituir por `fetch` real ao conectar o backend de produção (ex.: função serverless na Vercel ou integração com Supabase/CRM).

---

## Uso de IA

- Revisão de acessibilidade nos componentes.
- Padronização e revisão do conteúdo PT/EN.
- Apoio na estruturação de performance (Lighthouse).
- Análise e otimização de documentação técnica.
- Relatório técnico completo de avaliação de arquitetura e recomendações de evolução.

---

## Referências

- Repositório: [github.com/gabby-ops/nexus-solutions-site](https://github.com/gabby-ops/nexus-solutions-site)
- Deploy: [nexus-solutions-site.vercel.app](https://nexus-solutions-site.vercel.app)
- Site oficial: [nexussolutions.com.br](https://nexussolutions.com.br)
- [Documentação Vite](https://vitejs.dev)
- [Documentação React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://radix-ui.com)

---

## Licença

Projeto privado — **Nexus Solutions**. Todos os direitos reservados.  
Uso, cópia ou distribuição não autorizados são expressamente proibidos.

---

*Relatório técnico elaborado por **Gabrielly Moitinho** — Análise e Desenvolvimento de Sistemas, UNIGRANDE. Cândido Sales – BA | Abril de 2026.*
