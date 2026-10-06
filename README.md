# suamarca® — Landing Page

Landing page para agência de design/tecnologia. React + Vite + Tailwind CSS + Framer Motion.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Gitflow dos modelos

Cada site de cliente fica em uma branch própria. Assim, trocar de modelo troca
todo o conjunto de textos, imagens e identidade sem apagar o trabalho dos
outros sites. Este repositório usa um fluxo simples por modelo, sem branches
`develop` ou `release` compartilhadas.

### Branches

- `main`: branch padrão do GitHub e ponto estável do repositório. Ela ainda
  contém a versão de nails que existia antes desta organização; não comece novos
  nichos a partir dela.
- `template/base`: ponto de partida genérico para novos modelos. Contém textos,
  métricas, depoimentos e imagens de demonstração; não apresente esta branch a
  clientes antes de substituir o conteúdo de exemplo por informações e imagens
  reais e autorizadas.
- `feature/site-nail-designer-mohay`: versão preservada do modelo de nails do
  Studio Mohay.
- `feature/site-<nicho>-<cliente>`: uma branch independente para cada novo site,
  criada a partir de `template/base`. Use nomes curtos, minúsculos e sem acentos,
  por exemplo `feature/site-barbearia-alfa`.
- `fix/<assunto>`: correção ou melhoria reutilizável do template. Crie a partir
  de `template/base` e integre de volta nela por pull request.

Branches `feature/site-*` são prévias específicas de um cliente: não as mescle
em `main` ou `template/base`, pois isso mistura conteúdo e imagens de clientes
diferentes. Para trazer uma melhoria compartilhada a um site existente, atualize
sua branch com `template/base` somente quando fizer sentido e revise o resultado.

### Criar um modelo

Antes de trocar de branch, confira `git status`. Faça commit do trabalho atual
para mantê-lo salvo. Em seguida, atualize a base e crie a branch do novo site:

```bash
git fetch origin
git switch template/base
git pull --ff-only origin template/base
git switch -c feature/site-barbearia-alfa
```

Personalize `src/data/content.js`, o necessário em `src/components/` e os assets
do cliente em `public/images/`. A base usa conteúdo e imagens de demonstração:
substitua-os antes de enviar a prévia. Não reutilize fotos de outro cliente sem
autorização.

Valide e publique a branch para compartilhar com a equipe:

```bash
npm run build
git status --short
git add <arquivos-alterados>
git commit -m "feat: add barbearia alfa website model"
git push -u origin feature/site-barbearia-alfa
```

### Navegar entre modelos

Veja as branches disponíveis e troque para a que deseja abrir:

```bash
git branch --list
git switch feature/site-nail-designer-mohay
git switch feature/site-barbearia-alfa
git switch template/base
```

Para baixar branches que ainda não existem localmente, atualize as referências
e crie uma branch local rastreando a remota:

```bash
git fetch origin
git switch --track origin/feature/site-barbearia-alfa
```

Se `git status` mostrar arquivos modificados antes da troca, faça commit ou
guarde o trabalho temporário com `git stash push -u -m "trabalho em andamento"`.
Depois de voltar à branch original, recupere-o com `git stash pop` e confira
possíveis conflitos. Prefira commits quando o trabalho já estiver em um estado
coerente. Não use `git reset --hard`, `git clean` ou force push para trocar de
site.

## Estrutura

```
src/
  data/content.js       ← todo o texto, imagens e links do site (edite aqui)
  components/
    AnimatedSection.jsx ← wrapper de animação (fade + slide-up no scroll)
    Header.jsx           ← navbar fixa com blur no scroll + menu mobile
    Hero.jsx
    Portfolio.jsx
    Testimonial.jsx
    Services.jsx         ← lista interativa (acordeão) dos serviços
    Stats.jsx
    VideoSection.jsx     ← thumbnail com parallax e botão de play
    Pricing.jsx
    Awards.jsx
    Blog.jsx
    Contact.jsx          ← split screen: formulário + informações de contato
    Footer.jsx
  App.jsx                ← une todas as seções, nesta ordem
  index.css              ← Tailwind + fontes (Syne para títulos, Inter para texto)
tailwind.config.js        ← paleta de cores e fontes
```

## Editando o conteúdo

Praticamente tudo o que aparece na página vem de `src/data/content.js`. Troque
os textos, os arrays de projetos, depoimentos, serviços, planos, prêmios e
posts do blog diretamente ali — os componentes não precisam ser tocados.

Na branch `template/base`, as imagens de demonstração usam `picsum.photos`.
Substitua cada URL em `src/data/content.js` por uma imagem real e autorizada do
cliente, preferencialmente salva em `public/images/`, antes de apresentar o
modelo. As imagens locais podem ser referenciadas como `/images/nome-do-arquivo.jpg`.

## Personalizando cores e tipografia

- Cores: edite `theme.extend.colors` em `tailwind.config.js` (`ink`, `paper`,
  `mist`, `line`, `accent`).
- Fontes: trocadas em `src/index.css` (import do Google Fonts) e em
  `tailwind.config.js` (`fontFamily.display` / `fontFamily.body`).

## Formulário de contato

O formulário em `Contact.jsx` já previne o reload da página e mostra uma
mensagem de confirmação, mas não envia dados para nenhum lugar ainda. Ligue o
`handleSubmit` a um endpoint próprio, a um serviço como Formspree/Resend, ou a
uma função serverless.

## Dependências principais

- `react` / `react-dom`
- `framer-motion` — animações de entrada e parallax
- `lucide-react` — ícones
- `tailwindcss` — estilização utilitária
- `vite` — build tool
