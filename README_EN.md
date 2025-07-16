## 🌐 [Versão em Português](README.md)

# Webpack — From Basic to Advanced

Official repository containing **all source code, configuration files and hands-on examples** used in Matheus Battisti’s *Webpack — From Basic to Advanced* course.  
Each folder is a full module, from fundamentals to **Module Federation** and complete micro-frontends.

## 🔨 Project Features

- Step-by-step **Webpack 5** configuration for *development* and *production*.
- Examples of **loaders** (CSS, SASS, images, fonts, raw, HTML, JSON).
- Essential **plugins**: MiniCssExtractPlugin, CleanWebpackPlugin, HtmlWebpackPlugin, TerserPlugin, DefinePlugin and more.
- Separate environments and *Hot Module Replacement* via **webpack-dev-server**.
- Ready-to-use integrations with **React 18**, **Vue 3**, **TypeScript 5**, **Express**, **Bootstrap 5**, **Bulma**, **Font Awesome** and jQuery.
- Complete **micro-frontend** projects with **Module Federation** (Home, Contact and Shell apps).
- Advanced topics: code-splitting, lazy load, bundle analysis, shimming, runtime chunk and build-performance tips.

### 📸 Visual Example of the Project

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

## ✔️ Techniques & Technologies

- **Node.js 20 LTS**
- **Webpack 5** + **webpack-cli**
- **Babel 7**, Dart Sass, **TypeScript**
- **React**, **Vue**, **Express**, **Bootstrap**, **Bulma**
- **Module Federation** for micro-frontends
- Optional: **ESLint**, **Prettier**
- Modern *asset modules* for static assets (images, fonts, text).

## 📁 Project Structure

```text
root/
│
├─ 1_intro/                   # Fundamentals: entry, output, mode
├─ 2_loaders/                 # Loader examples
├─ 3_plugins/                 # Plugin usage & content hash
├─ 4_modes/                   # Dev & prod configs + dev-server
├─ 5_integracoes/             # jQuery, Bootstrap, Font Awesome, fonts
├─ 6_integracao_bulma/        # Bulma + SASS
├─ 7_integracao_react/        # React + Babel + Webpack
├─ 8_integracao_vue/          # Vue 3 + vue-loader
├─ 9_integracao_ts/           # TypeScript + ts-loader
├─ 10_integracao_express/     # Express backend bundled with Webpack
├─ 11_recursos_webpack/       # Code-splitting, HMR, ProvidePlugin…
└─ 12_projeto_module_federation/
   ├─ app/                    # Shell app
   ├─ home/                   # Remote HomeApp
   └─ contact/                # Remote ContactApp
```

Key folders and files:

- **public/** – `index.html` entry for each module  
- **src/** – `index.js` / `main.ts`, components, assets  
- **webpack.config.js** (+ dev / prod variants) – per-module configuration

## 🛠️ Running Any Module Locally

1. Verify Node:

   ```bash
   node -v     # should be ≥ 16 LTS
   ```

2. Clone:

   ```bash
   git clone https://github.com//Webpack-from-Basic-to-Advanced.git
   cd Webpack-from-Basic-to-Advanced
   ```

3. Enter a module, install, run:

   ```bash
   cd 2_loaders
   npm install
   npm run build   # or: npm run dev
   ```

4. Open `http://localhost:` (port shown in terminal).

*Every folder is self-contained; installing one does not affect the others.*

## 🚀 Running **Project 12 – Module Federation**

### Packages & Ports

| Package | Role | Default port |
|---------|------|--------------|
| `home/` | **HomeApp** micro-frontend | 9002 |
| `contact/` | **ContactApp** micro-frontend | 9003 |
| `app/` | Shell that consumes the remotes | 9001 |

### Quick Start (three terminals)

```bash
# Terminal 1 – HomeApp
cd 12_projeto_module_federation/packages/home
npm install
npm run dev          # http://localhost:9002

# Terminal 2 – ContactApp
cd ../contact
npm install
npm run dev          # http://localhost:9003

# Terminal 3 – Shell
cd ../app
npm install
npm run dev          # http://localhost:9001
```

Visit **http://localhost:9001**  
– the shell renders *Home* via **HomeApp** and `/contact` via **ContactApp** without reloading.

#### One-liner with *concurrently* (optional)

```bash
npm install -g concurrently
concurrently -n "home,contact,app" \
  "npm --prefix 12_projeto_module_federation/packages/home run dev" \
  "npm --prefix 12_projeto_module_federation/packages/contact run dev" \
  "npm --prefix 12_projeto_module_federation/packages/app run dev"
```

### Production-style Build & Static Serve

```bash
# inside each package
npm run build                  # emits dist/
npx serve dist -l 900X --single   # X = 1,2,3
```

Ensure `publicPath` in every `webpack.config.js` matches the final URLs you will deploy.

### Troubleshooting Checklist

- Servers listening on **9001 / 9002 / 9003**
- `remoteEntry.js` reachable for Home (9002) and Contact (9003)
- SPA fallback enabled (`historyApiFallback` or `--single`)
- Same React / React-DOM version across all packages
- No CORS or `Module not found` errors in browser console

When all green, your micro-frontend architecture is ready to develop or ship 🚀

## 🌐 Deploy

1. Run `npm run build` in each package.
2. Host the `dist/` folders (Netlify, Vercel, S3, etc.).
3. Update `publicPath` to the production URLs of each remote and the shell.

