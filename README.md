## 🌐 [English Version of README](README_EN.md)

# Webpack — Do Básico ao Avançado

Repositório oficial com **todo o código-fonte, arquivos de configuração e exemplos práticos** utilizados no curso *Webpack do Básico ao Avançado* ministrado por Matheus Battisti.  
Cada pasta representa um módulo do treinamento, indo de conceitos fundamentais a **Module Federation** e micro-frontends completos.

## 🔨 Funcionalidades do Projeto

- Demonstração passo a passo da configuração do **Webpack 5** em modo *development* e *production*.  
- Exemplos de **loaders** (CSS, SASS, imagens, fontes, raw, HTML, JSON).  
- Uso de **plugins** essenciais: MiniCssExtractPlugin, CleanWebpackPlugin, HtmlWebpackPlugin, TerserPlugin, DefinePlugin e mais.  
- Separação de ambientes e *Hot Module Replacement* com **webpack-dev-server**.  
- Integração pronta com **React 18**, **Vue 3**, **TypeScript 5**, **Express**, **Bootstrap 5**, **Bulma**, **Font Awesome** e jQuery.  
- Projetos completos de **micro-frontend** usando **Module Federation** (apps Home, Contact e Shell).  
- Exemplos avançados: *code-splitting*, *lazy load*, análise de bundle, *shimming*, *runtime chunk* e otimizações de performance.

### 📸 Exemplo Visual do Projeto

<div align="center" style="margin: 16px 0;">
  <img 
    src="https://github.com/user-attachments/assets/281423e0-12db-43a4-9f7c-0795217cd40c" 
    alt="Screenshot 2025-07-15 205023" 
    width="80%" 
    style="border-radius: 10px; margin-bottom: 16px;"
  />
  <img 
    src="https://github.com/user-attachments/assets/caf6c949-1da3-4e09-bfa8-3342a9e8bad5" 
    alt="Screenshot 2025-07-15 205014" 
    width="80%" 
    style="border-radius: 10px; margin-bottom: 16px;"
  />
  <img 
    src="https://github.com/user-attachments/assets/fca321c9-2334-44d0-82a9-c0c8390d1895" 
    alt="Screenshot 2025-07-15 205002" 
    width="80%" 
    style="border-radius: 10px; margin-bottom: 16px;"
  />
  <img 
    src="https://github.com/user-attachments/assets/cfd0d2ee-3875-4d32-a40a-310a1a402233" 
    alt="Screenshot 2025-07-15 204944" 
    width="80%" 
    style="border-radius: 10px; margin-bottom: 16px;"
  />
  <img 
    src="https://github.com/user-attachments/assets/faa4b7d8-4d5a-4603-9661-5407567f3f0f" 
    alt="Screenshot 2025-07-15 204928" 
    width="80%" 
    style="border-radius: 10px;"
  />
</div>

## ✔️ Técnicas e Tecnologias Utilizadas

- **Node.js 20 LTS**  
- **Webpack 5** e **webpack-cli**  
- **Babel 7**, *Dart Sass*, **TypeScript**  
- **React**, **Vue**, **Express**, **Bootstrap**, **Bulma**  
- **Module Federation** para micro-frontends  
- *ESLint*, *Prettier* (opcional)  
- Padrões modernos de *asset modules* para imagens, fontes e arquivos estáticos.

## 📁 Estrutura do Projeto

```
root/
│
├─ 1_intro/
├─ 2_loaders/
├─ 3_plugins/
├─ 4_modes/
├─ 5_integracoes/
├─ 6_integracao_bulma/
├─ 7_integracao_react/
├─ 8_integracao_vue/
├─ 9_integracao_ts/
├─ 10_integracao_express/
├─ 11_recursos_webpack/
└─ 12_projeto_module_federation/
   ├─ app/      # Shell
   ├─ home/     # Remote HomeApp
   └─ contact/  # Remote ContactApp
```

## 🛠️ Abrir e rodar qualquer módulo

1. **Verifique o Node.js**

   ```bash
   node -v      # recomendado ≥ 16 LTS
   ```

2. **Clone o repositório**

   ```bash
   git clone https://github.com//Webpack-from-Basic-to-Advanced.git
   cd Webpack-from-Basic-to-Advanced
   ```

3. **Entre na pasta desejada**, instale dependências e execute o script apropriado:

   ```bash
   cd 2_loaders
   npm install
   npm run build   # ou: npm run dev
   ```

4. **Abra** `http://localhost:` no navegador (a porta aparece no terminal).

> Cada pasta é **autônoma**: instalar dependências em um módulo não afeta os demais.

## 🚀 Rodando o **Projeto 12 – Module Federation**

### 1. Visão geral desta pasta

| Pacote          | Função                         | Porta padrão |
|-----------------|--------------------------------|--------------|
| `home/`         | Micro-frontend **HomeApp**     | 9002 |
| `contact/`      | Micro-frontend **ContactApp**  | 9003 |
| `app/` (shell)  | Host que carrega os remotes    | 9001 |

### 2. Pré-requisitos

- Node.js ≥ 16 (v20 LTS recomendado).  
- npm, yarn ou pnpm atualizados.

> Usando Node ≥ 17 e Webpack antigo? Defina `NODE_OPTIONS=--openssl-legacy-provider` ou atualize o Webpack de todos os pacotes.

### 3. Passo a passo (três terminais)

```bash
# Terminal 1 – HomeApp
cd 12_projeto_module_federation/packages/home
npm install
npm run dev           # http://localhost:9002

# Terminal 2 – ContactApp
cd ../contact
npm install
npm run dev           # http://localhost:9003

# Terminal 3 – Shell
cd ../app
npm install
npm run dev           # http://localhost:9001
```

Abra **http://localhost:9001**:  
o Shell renderiza a página *Home* vinda de `HomeApp` e, ao navegar para */contact*, carrega dinamicamente `ContactApp`, tudo sem recarregar o site.

#### Rodar tudo em um comando (opcional)

```bash
npm install -g concurrently   # se ainda não tiver
concurrently -n "home,contact,app" \
  "npm --prefix 12_projeto_module_federation/packages/home run dev" \
  "npm --prefix 12_projeto_module_federation/packages/contact run dev" \
  "npm --prefix 12_projeto_module_federation/packages/app run dev"
```

### 4. Build + servidor estático (produção local)

Dentro de **cada** pacote:

```bash
npm run build                 # gera dist/
npx serve dist -l 900X --single   # X=1,2,3  → SPA fallback
```

Garanta que `publicPath` nos três `webpack.config.js` aponte para a URL definitiva (local ou hospedagem).

### 5. Checklist rápido

- [ ] Servidores ativos nas portas **9001 / 9002 / 9003**  
- [ ] `remoteEntry.js` abre sem 404 em `home` e `contact`  
- [ ] `historyApiFallback` ou `--single` habilitado para rotas SPA  
- [ ] React e React-DOM na **mesma versão** em todos os pacotes  
- [ ] Sem erros de CORS ou `Module not found` no console

Quando todos os itens estiverem ok, seu micro-frontend estará pronto para ser desenvolvido ou publicado 🚀

## 🌐 Deploy

1. **Build de produção** em cada pacote (`npm run build`).  
2. Publique o conteúdo de `dist/` em serviços estáticos (Vercel, Netlify, S3…).  
3. Ajuste `publicPath` nos `webpack.config.js` para refletir os domínios finais dos remotes e do shell.

