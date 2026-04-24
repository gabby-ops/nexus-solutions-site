Nexus Solutions é um site institucional moderno focado em IA, automação e desenvolvimento de soluções digitais escaláveis, com foco em performance, conversão e experiência do usuário.

# Nexus Solutions — Site institucional

Refatoração do site institucional com foco em **design moderno**, **performance**, **conversão (leads)** e **código componentizado**.

Conteúdo alinhado ao posicionamento oficial: [nexussolutions.com.br](https://nexussolutions.com.br/).

## Stack

| Área | Tecnologia |
|------|------------|
| UI | React 18, Tailwind CSS, componentes estilo shadcn (Radix UI) |
| Roteamento | React Router 6 |
| Build | Vite 6 |
| Animações | Framer Motion |
| Formulário | React Hook Form–friendly patterns + validação básica |
| Temas | Dark/light com `ThemeContext` + variáveis CSS |
| Idiomas | PT / EN com `LanguageContext` |

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173` (porta padrão do Vite).

### Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Preview do build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`jsconfig` + arquivos `.ts`) |

## Estrutura (resumo)

- `src/pages/` — rotas: Home (`/`), Serviços (`/servicos`), IA & Automação (`/ia-automacao`)
- `src/components/home/` — seções da home (hero, serviços, sobre, stats, CTA, contato)
- `src/data/servicesDetail.ts` — textos longos da página de serviços (descrição, benefícios, diferencial) em PT/EN
- `src/api/lead.ts` — **mock** de envio de lead (substituir por `fetch` real ao conectar backend)
- `src/lib/LanguageContext.jsx` / `ThemeContext.jsx` — i18n e tema

## Deploy

Gere o build e publique a pasta `dist/`:

```bash
npm run build
```

- **Vercel / Netlify:** conecte o repositório; framework preset **Vite**; build `npm run build`; output `dist`.
- **GitHub Pages:** defina `base` no `vite.config.js` como `'/nome-do-repo/'` e use um workflow de deploy (ou `gh-pages`) — veja [Vite static deploy](https://vitejs.dev/guide/static-deploy.html).

## 🤖 Uso de IA

- Revisão de acessibilidade
- Padronização de conteúdo PT/EN
- Apoio na estruturação de performance (Lighthouse)
- Otimização de documentação

## Licença

Projeto privado — Nexus Solutions.
