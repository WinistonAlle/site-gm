# Gostinho Mineiro - Site Institucional

Aplicação frontend construída com **Vite + React + TypeScript** para o site institucional da **Gostinho Mineiro**.

O projeto atual entrega:

- uma **home page institucional** com foco comercial;
- uma **página dedicada à linha de broas**;
- navegação SPA com `react-router-dom`;
- assets estáticos locais em `public/`;
- suporte a **PWA** via `vite-plugin-pwa`.

## Visão Geral

O site foi estruturado para apresentar a marca, destacar linhas de produto e direcionar o usuário para contato comercial, principalmente via **WhatsApp**.

As duas rotas existentes hoje são:

- `/` -> página inicial institucional;
- `/broa` -> página detalhada da linha de broas.

O projeto está organizado como uma SPA React, mas com conteúdo predominantemente estático e foco em performance, apresentação visual e navegação simples.

## Stack

Principais tecnologias utilizadas:

- **Vite 5** como bundler e servidor de desenvolvimento;
- **React 18** com **TypeScript**;
- **React Router DOM** para roteamento;
- **CSS customizado** em `src/index.css`;
- **Tailwind CSS** configurado no projeto, embora o layout atual use majoritariamente classes e estilos próprios;
- **vite-plugin-pwa** para manifesto, ícones e service worker;
- **ESLint** para lint do código.

## Estrutura do Projeto

```text
copia-para-site/
├── public/
│   ├── gm-assets/                # imagens institucionais e identidade visual
│   ├── products/                 # imagens adicionais
│   ├── apple-touch-icon.png
│   ├── favicon_gm.ico
│   └── pwa-*.png                 # ícones do PWA
├── src/
│   ├── components/
│   │   └── SiteChrome.tsx        # navegação, rodapé e botão flutuante do WhatsApp
│   ├── pages/
│   │   ├── HomePage.tsx          # página inicial
│   │   └── BroaPage.tsx          # página de produto / broa
│   ├── App.tsx                   # rotas principais
│   ├── index.css                 # estilos globais e layout
│   └── main.tsx                  # bootstrap React
├── index.html                    # HTML base
├── vite.config.ts                # configuração do Vite e PWA
├── tailwind.config.ts            # configuração do Tailwind
├── supabase-delivery-offers.sql  # script SQL auxiliar
├── package.json
└── startcatalogo.bat             # atalho simples para ambiente Windows
```

## Funcionalidades Atuais

### Home (`/`)

A página inicial entrega:

- hero principal com CTA para WhatsApp;
- navegação com âncoras;
- blocos visuais de destaque da marca;
- grid de linhas de produtos;
- números institucionais animados;
- rodapé com dados de contato e redes sociais;
- botão flutuante de WhatsApp.

### Página de Broa (`/broa`)

A página de broa entrega:

- hero específico do produto;
- cards com duas variações de broa;
- imagens do produto e da tabela nutricional;
- lista de ingredientes;
- especificações em accordion nativo com `details/summary`;
- modo de preparo em etapas;
- vídeo incorporado do YouTube;
- CTA para contato comercial.

## Roteamento

O roteamento está centralizado em `src/App.tsx`:

```tsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/broa" element={<BroaPage />} />
</Routes>
```

Se novas páginas forem adicionadas, esse é o ponto principal de extensão.

## Como Rodar Localmente

### Pré-requisitos

- **Node.js 18+** recomendado;
- **npm** instalado.

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O Vite está configurado para subir localmente em:

- [http://localhost:4174](http://localhost:4174)

Configurações relevantes do servidor em `vite.config.ts`:

- `host: "0.0.0.0"`
- `port: 4174`
- `strictPort: true`

### Preview de produção

```bash
npm run build
npm run preview
```

O preview também usa a porta `4174`.

## Scripts Disponíveis

No `package.json`, os scripts atuais são:

```bash
npm run dev
npm run build
npm run build:dev
npm run lint
npm run preview
```

Resumo:

- `dev`: inicia o servidor Vite em modo desenvolvimento;
- `build`: gera o bundle de produção;
- `build:dev`: gera build usando modo `development`;
- `lint`: roda ESLint no projeto;
- `preview`: sobe o build gerado localmente.

## PWA

O projeto possui configuração de Progressive Web App em `vite.config.ts`.

Hoje estão definidos:

- registro automático do service worker;
- `registerType: "autoUpdate"`;
- `devOptions.enabled: true`;
- manifesto com nome, descrição, tema e ícones;
- fallback de navegação para `/index.html`.

Manifest atual:

- `name`: `Catálogo de Funcionários`
- `short_name`: `Catálogo`
- `theme_color`: `#9E0F14`
- `display`: `standalone`

Observação importante:

- o nome e a descrição do manifesto ainda refletem um contexto anterior de catálogo interno, e não o site institucional atual. Se o objetivo for alinhar a instalação do app com a marca do site, vale ajustar esses campos.

## Assets e Conteúdo

### Assets locais

Os arquivos visuais principais usados pelo site estão em:

- `public/gm-assets/`
- `public/products/`

Como o `public/` é servido de forma estática pelo Vite, os assets são referenciados no código com caminhos absolutos, por exemplo:

```tsx
<img src="/gm-assets/Logo-site-Gostinho-Mineiro.png" alt="Gostinho Mineiro" />
```

### Assets externos

A página `/broa` usa algumas imagens hospedadas externamente em `https://gostinhomineiro.com.br/...`.

Isso significa que:

- a renderização completa da página depende da disponibilidade desses arquivos externos;
- se as URLs mudarem no site oficial, a página local pode quebrar visualmente;
- se o objetivo for maior estabilidade, o ideal é internalizar essas imagens em `public/`.

## Estilo e Identidade Visual

O estilo principal do projeto está concentrado em `src/index.css`.

O arquivo define:

- variáveis CSS da identidade visual;
- tipografia base;
- sistema visual com efeito glass;
- hero, cards, navegação, footer e animações;
- comportamento responsivo da interface.

Cores principais já expostas em `:root`:

- `--brand: #f6ba00`
- `--brand-strong: #ef2c14`
- `--brand-deep: #bf2f16`
- `--ink: #26140f`

## Componentes Principais

### `src/components/SiteChrome.tsx`

Responsável por componentes compartilhados:

- `SiteNav`
- `SiteFooter`
- `FloatingWhatsapp`

Esse arquivo concentra os elementos globais de navegação e contato.

### `src/pages/HomePage.tsx`

Responsável por:

- composição da home;
- listas de painéis e produtos;
- animações de entrada com `IntersectionObserver`;
- animação de números;
- pequenos efeitos de parallax e destaque visual.

### `src/pages/BroaPage.tsx`

Responsável por:

- conteúdo detalhado da linha de broas;
- dados estáticos do produto;
- cards, imagens, ingredientes e especificações;
- modo de preparo e vídeo incorporado.

## Banco de Dados / Backend

No estado atual do código:

- **não há uso ativo de backend no frontend**;
- **não encontrei uso atual de variáveis `import.meta.env` ou `process.env` no código fonte principal**;
- o diretório `api/` está presente, mas sem arquivos ativos;
- existe o arquivo `supabase-delivery-offers.sql`, que parece ser um artefato auxiliar separado da renderização atual do site.

Em outras palavras: o site atual funciona essencialmente como **frontend estático com roteamento client-side**.

## Variáveis de Ambiente

Atualmente, o código carregado pelo app não depende de variáveis de ambiente para funcionar.

Mesmo existindo um arquivo `.env` no repositório local, não há referência ativa a essas variáveis no `src/` analisado.

Se no futuro forem adicionadas integrações, o padrão recomendado para frontend Vite é usar variáveis com prefixo:

```env
VITE_EXEMPLO=valor
```

E acessar no código por:

```ts
import.meta.env.VITE_EXEMPLO
```

## Build e Deploy

Para gerar build de produção:

```bash
npm run build
```

Os artefatos serão gerados em:

```text
dist/
```

Esse diretório pode ser publicado em hospedagens estáticas ou plataformas compatíveis com SPA, como por exemplo:

- Vercel
- Netlify
- Cloudflare Pages
- servidor Nginx/Apache configurado para fallback do `index.html`

Para deploy de SPA, garanta reescrita/fallback para `index.html` nas rotas client-side, como `/broa`.

## Ajustes Recomendados

Alguns pontos que valem atenção na evolução do projeto:

- alinhar o manifesto PWA com a identidade real do site institucional;
- internalizar as imagens externas da página `/broa`;
- remover dependências do `package.json` que não estão sendo usadas no produto atual;
- revisar o `allowedHosts` do Vite se o domínio de desenvolvimento mudar;
- adicionar um `README` operacional de deploy, caso o projeto vá para produção com frequência.

## Comandos Rápidos

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Licença / Uso

Este repositório aparenta ser um projeto proprietário da marca **Gostinho Mineiro**. Se o uso for interno ou comercial, recomenda-se adicionar uma política explícita de licença e propriedade intelectual conforme a necessidade do negócio.
