# React + Vite

## 'ConsoleVault' Videogaming consoles website

This is is a webiste built with `React with Vite framework as build tool`. Other that, to avoid the CSS Global scope problem and be able to style components and JSX tags individually i used **Tailwind CSS framework with DaisyUi as its plugin**. The `index.css` file contains general styles that prevented an excessive repetition of Tailwind rules.

### NOTE:
The `node_modules` folder isn't included; to install the dependencies and make the application functional, open the terminal and run `npm install` command. 

---
`Contents`:
1. Main page with an introduction to the history of gaming industry.
2. Nintendo console history dedicated page.
3. Sony console history dedicated page.
4. Microsoft console history dedicated page.

`CSS`
- Grid & flex layouts
- Mobile design
- Sidebar (only for large screens) with internal links

`JS`
- Lazy load of images for better performance
- Use of Intersection Observer

---
#### PS:
The images are saved into `src/assets` folder while the favicon in `src/public`. Every image has its high and low resolution copy.
