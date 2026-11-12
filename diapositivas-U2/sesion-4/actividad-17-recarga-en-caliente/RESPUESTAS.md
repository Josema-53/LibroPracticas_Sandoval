# Actividad 17 · Prueba la recarga en caliente y lee el package.json (03-06 · 5 min)

`heladeria/` es el proyecto de Vite (creado con `npm create vite@latest heladeria -- --template react`
y limpiado como indica el libro). Para ejecutarlo:

```bash
cd heladeria
npm install
npm run dev      # http://localhost:5173/
```

## Pasos
1. Con el servidor corriendo, en `src/App.jsx` se cambió «Sabores de hoy» por «Sabores de la
   semana» y se guardó **sin tocar el navegador**: el texto cambió al instante, sin parpadeo (luego
   se devolvió a «Sabores de hoy»).
2. En `package.json`:
   - `dependencies`: `react`, `react-dom` (las mismas dos piezas que traíamos por CDN).
   - `devDependencies`: `vite`, `@vitejs/plugin-react`, `oxlint` y los tipos de React.
   - `scripts`: `dev` → `vite` · `build` → `vite build` · `lint` → `oxlint` · `preview` → `vite preview`.
3. Segunda terminal con `npm run dev` (comprobado):

```
  VITE v8.3.8  ready in 152 ms
  ➜  Local:   http://localhost:5173/
Port 5173 is in use, trying another one...
  VITE v8.3.8  ready in 135 ms
  ➜  Local:   http://localhost:5174/
```

## Verifica
- [x] El texto cambia sin parpadeo (hot module replacement).
- [x] `npm run dev` arranca el servidor de desarrollo de Vite en `localhost:5173`.

## Responde
- **Si borras `node_modules/`, ¿puedes reconstruirla? ¿Con qué?** Sí, con **`npm install`**, que
  vuelve a descargar todo lo que listan `dependencies` y `devDependencies` en `package.json`. Por
  eso `node_modules/` está en `.gitignore` y no se sube a GitHub.
- **¿Qué pasa con dos servidores?** No chocan: el segundo detecta que el 5173 está ocupado y se
  levanta en el **5174**. Son dos servidores del mismo proyecto.
- Si `npm run dev` se ejecuta fuera de la carpeta, sale `npm error code ENOENT … package.json`:
  falta el `cd heladeria`.
