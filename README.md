<h1 align="center">前端笔记</h1>
<p align="center"><b>简单记录学习的一点一滴</b></p>

<p align="center">

  <a href="https://github.com/JadeChamber/docs/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/misitebao/yakia"/>
  </a>
  <a href="https://github.com/JadeChamber/docs/blob/main/LICENSE">
    <img alt="#contributors-" src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square"/>
  </a>
  <img height="20" src="https://img.shields.io/badge/react-%2335495e.svg?style=for-the-badge&logo=react&logoColor=%234FC08D" alt="VueJs" />
  <img height="20" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img height="20" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img height="20" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img height="20" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <br/>

</p>

<div align="center">
<strong>
<samp>

[English](README_en.md) · 简体中文

</samp>
</strong>
</div>

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![docs](https://user-images.githubusercontent.com/4677417/186189283-0831b9ab-d6b9-485d-8955-3057e532ab31.png)
## 快速开始
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/docs)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/docs)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/docs/devcontainer.json)

### 本地开发
所有命令都从项目的根目录下，在终端中运行：

| 命令                       | 操作                         |
| :------------------------ | :----------------------------|
| `pnpm i`                  | 安装依赖                      |
| `pnpm run dev`            | 启动本地服务 `localhost:3000`  |
| `pnpm run start`          | 构建生成环境代码到 `./dist/`    |
| `pnpm run build`          | 构建生成环境代码到 `./dist/`    |
| `npm run preview`         | 在部署之前，本地预览您的构建     |
| `npm run astro ...`       | 运行类似 `astro add`、`astro check` 的 CLI 命令 |
| `npm run astro -- --help` | 获取有关使用 Astro CLI 的帮助   |

将您的网站部署到生产环境，请查看[Deploy an Astro Website](https://docs.astro.build/guides/deploy)指南。

[→ see the demo](www.me.vercel.app)

### 项目结构:


```diff
┣ ── package.json
┣ ── pnpm-lock.yaml
┣ ── public
┃   ┣ ── default-og-image.png
┃   ┣ ── favicon.svg
┃   └── make-scrollable-code-focusable.js
┣ ── src
┃   ┣ ── components
┃   ┃   ┣ ── Footer
┃   ┃   ┃   ┣ ── AvatarList.astro
┃   ┃   ┃   └── Footer.astro
┃   ┃   ┣ ── HeadCommon.astro
┃   ┃   ┣ ── HeadSEO.astro
┃   ┃   ┣ ── Header
┃   ┃   ┃   ┣ ── AstroLogo.astro
┃   ┃   ┃   ┣ ── Header.astro
┃   ┃   ┃   ┣ ── LanguageSelect.css
┃   ┃   ┃   ┣ ── LanguageSelect.tsx
┃   ┃   ┃   ┣ ── Search.css
┃   ┃   ┃   ┣ ── Search.tsx
┃   ┃   ┃   ┣ ── SidebarToggle.tsx
┃   ┃   ┃   └── SkipToContent.astro
┃   ┃   ┣ ── LeftSidebar
┃   ┃   ┃   └── LeftSidebar.astro
┃   ┃   ┣ ── PageContent
┃   ┃   ┃   └── PageContent.astro
┃   ┃   └── RightSidebar
┃   ┃       ┣ ── MoreMenu.astro
┃   ┃       ┣ ── RightSidebar.astro
┃   ┃       ┣ ── TableOfContents.tsx
┃   ┃       ┣ ── ThemeToggleButton.css
┃   ┃       └── ThemeToggleButton.tsx
┃   ┣ ── consts.ts
┃   ┣ ── 📂 content
┃   ┃   ┣ ── 📜 config.ts
┃   ┃   └── 📂 docs
┃   ┃       ┣ ── 📂 en
┃   ┃       ┃   ┣ 📜 introduction.md
┃   ┃       ┃   ┣ 📜 page-2.md
┃   ┃       ┃   ┣ 📜 page-3.md
┃   ┃       ┃   └ 📜 page-4.md
+ ┃  ┃          ┣📂 zh
+ ┃  ┃           ┣ 📜 introduction.md
+ ┃  ┃           ┣ 📜 page-2.md
+ ┃  ┃           ┣ 📜 page-3.md
+ ┃  ┃           └ 📜 page-4.md
┃   ┣ ── env.d.ts
┃   ┣ ── languages.ts
┃   ┣ ── layouts
┃   ┃   └── MainLayout.astro
┃   ┣ ── pages
┃   ┃   ┣ ── [...slug].astro
┃   ┃   └── index.astro
┃   └── styles
┃       ┣ ── index.css
┃       └── theme.css
└── tsconfig.json
```
## 贡献者

<table>
    <tbody>
        <tr>
            <td>
                <a target="_blank" href="https://github.com/keqing77"><img width="60px" src="https://avatars.githubusercontent.com/u/48318812?v=4"></a>
            </td>
        </tr>
    </tbody>
</table>

## 代做清单

- ✅ **CI/CD with Netlify**
- ✅ **Full Markdown support**
- ✅ **Responsive mobile-friendly design**
- ✅ **Sidebar navigation**
- ✅ **Search (powered by Algolia)**
- ✅ **Multi-language i18n**
- ✅ **Automatic table of contents**
- ✅ **Automatic list of contributors**
- ✅ (and, best of all) **dark mode**

## 协议

- [MIT](https://opensource.org/licenses/MIT)
