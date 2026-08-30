# Jonas Cunha — Portfólio

Portfólio pessoal com tema de painel de monitoramento de infraestrutura (NOC/status dashboard) — a mesma linguagem visual usada no dia a dia de quem trabalha com infra, aplicada à apresentação de projetos, experiência e competências.

## 🖥️ Sobre

Site estático (HTML, CSS e JavaScript puros, sem frameworks) desenvolvido para reunir em um só lugar: quem sou eu, minhas competências técnicas, experiência profissional, projetos pessoais e certificações — pensado como material de apoio ao currículo para processos seletivos em TI.

## ✨ Funcionalidades

- Hero com efeito de terminal digitando (typing effect)
- Painel de competências organizado por área técnica
- Seção de experiência profissional com resultados por cargo
- Projetos organizados em abas: **Completados** e **Em Andamento**
- Carrossel de screenshots por projeto (setas, bolinhas indicadoras e swipe no celular)
- Seção de certificações (incluindo status acadêmico do curso)
- Botão de download do currículo
- Menu responsivo com abertura em hambúrguer no celular
- Barra de progresso de leitura, menu com destaque automático da seção atual (scroll-spy) e animações de entrada ao rolar a página

## 🛠️ Tecnologias

- **HTML5**
- **CSS3** — variáveis CSS, Grid e Flexbox, sem pré-processadores
- **JavaScript** vanilla — sem frameworks ou bibliotecas externas
- **Fontes** (Google Fonts): Space Grotesk, JetBrains Mono, Inter

## 📁 Estrutura de pastas

```
portfolio/
├── pages/
│   └── index.html
├── Css/
│   ├── index.css        # estilos gerais do site
│   └── carousel.css     # estilos do carrossel de imagens dos projetos
├── Script/
│   ├── index.js         # menu, tabs, scroll-spy, typing effect, etc.
│   └── carousel.js      # lógica do carrossel (genérica, aceita N imagens)
├── images/
│   ├── (foto de perfil)
│   └── flash-card/      # screenshots do projeto Flash-Card com IA
└── Curriculo/
    └── (arquivo do currículo em .docx)
```

## ⚠️ Nota sobre hospedagem

O `index.html` fica dentro de `pages/`, mas os caminhos de CSS, JS e imagens usados nele são **absolutos a partir da raiz do domínio** (ex: `/Css/index.css`, não `../Css/index.css`). Isso funciona bem em serviços como Vercel ou Netlify, mas é preciso configurar `pages/index.html` como a página inicial do site.

**Para testar localmente:** abrir o arquivo direto no navegador (`file://`) não carrega o CSS/JS, porque caminhos absolutos exigem um servidor. Rode um servidor local a partir da raiz do projeto:

```bash
python3 -m http.server 8000
```

E acesse `http://localhost:8000/pages/index.html`.

## 🚀 Deploy

- **Vercel**: ao importar o repositório, configure um rewrite de `/` para `/pages/index.html` (Settings → Rewrites), ou adicione um `vercel.json` com essa regra.
- **Netlify**: crie um arquivo `_redirects` na raiz com a linha `/  /pages/index.html  200`.
- **GitHub Pages**: mais simples copiar/mover o `index.html` para a raiz do repositório (ajustando os caminhos de `/Css/`, `/Script/` e `/images/` para relativos, se necessário).

## ✏️ Como personalizar

- **Trocar cores**: edite as variáveis dentro de `:root` no topo do `index.css` (ex: `--cyan`, `--bg-void`).
- **Adicionar projeto**: duplique um bloco `.proj-card` dentro da aba correspondente (`tab-completados` ou `tab-andamento`) em `index.html`.
- **Adicionar imagem a um carrossel**: acrescente um novo `.carousel-slide` na `.carousel-track` e uma `.carousel-dot` correspondente — o CSS e o JS do carrossel já são genéricos e não precisam de alteração.
- **Trocar foto de perfil**: substitua o arquivo em `images/` (mantendo o nome) ou atualize o `src` da tag `<img>` no hero.
- **Atualizar currículo**: substitua o arquivo em `Curriculo/` e ajuste o `href` do botão "Baixar currículo" se o nome do arquivo mudar.

## 📬 Contato

- LinkedIn: [linkedin.com/in/jonas-cunha-12b3192ab](https://www.linkedin.com/in/jonas-cunha-12b3192ab/)
- GitHub: [github.com/jonaass](https://github.com/jonaass)
- E-mail: *(atualizar no `index.html`, seção de contato, antes de publicar)*

## 👤 Autor

**Jonas Cunha** — Estagiário de Infraestrutura & Help Desk (Suporte N1/N2) na Mtrix, uma empresa NIQ. Estudante de Análise e Desenvolvimento de Sistemas (ADS) na UNIBTA.

---

*Projeto pessoal — sinta-se à vontade para se inspirar na estrutura, mas fotos, textos e projetos aqui descritos são conteúdo pessoal.*