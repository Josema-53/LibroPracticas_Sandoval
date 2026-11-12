# 03-06 · Preparar el entorno de desarrollo con Vite

La carpeta `heladeria/` es el proyecto de Vite tal como queda al terminar la sección.

## Cómo se creó

```bash
node --version                                    # v22 LTS o superior
npm create vite@latest heladeria -- --template react
cd heladeria
npm install
rm -r src/assets src/App.css public/icons.svg public/favicon.svg
```

Después: `src/index.css` vaciado (sin borrarlo), `index.html` reescrito en español
(`lang="es"`, título «La Heladería», icono `/images/mora.svg`), la imagen movida a
`public/images/mora.svg` (por eso `imagePath` pasa a ser absoluta: `"/images/mora.svg"`), y en
`src/App.jsx` el contenido del `<script>` de 03-05 **sin tocar un solo componente**: solo
desaparecen los `import` de esm.sh y la vista pasa a ser el componente `App`, exportado.
`src/main.jsx` (generado por Vite) monta `<App />` dentro de `<StrictMode>`.

## Cómo ejecutarlo

```bash
cd heladeria
npm install        # node_modules no se versiona
npm run dev        # http://localhost:5173/
```

`index.html` ya **no** se abre con doble clic: se sirve.

## Practica

> Con el servidor corriendo, cambia «Sabores de hoy» por otra cosa y guarda sin tocar el
> navegador. Después, en `package.json`: si borraras `node_modules/` entera, ¿podrías
> reconstruirla? ¿Con qué? ¿Y qué pasa si arrancas `npm run dev` en dos terminales a la vez?

**Recarga en caliente.** Al cambiar `Sabores de hoy` por `Sabores de la semana` y guardar, el
texto cambia en el navegador al instante y sin parpadeo: es el *hot module replacement* de Vite
(los mensajes `[vite] connecting...` / `[vite] connected.` de la consola). Se volvió a dejar
«Sabores de hoy» para seguir con el libro.

**¿Se puede reconstruir `node_modules/`?** Sí. Con **`npm install`**: lee las listas
`dependencies` (`react`, `react-dom`) y `devDependencies` (`vite`, `@vitejs/plugin-react`,
`oxlint`, tipos) de `package.json` —y las versiones exactas de `package-lock.json`, si existe— y
vuelve a descargar todo. Por eso `node_modules/` está en `.gitignore` y no se sube al repositorio.

**¿Dos `npm run dev` a la vez?** No se pisan: el primero ocupa el puerto 5173 y Vite, al ver que
está ocupado, levanta el segundo en el siguiente libre:

```
Port 5173 is in use, trying another one...
  ➜  Local:   http://localhost:5174/
```

Son dos servidores independientes del mismo proyecto; los dos ven los cambios de los archivos.
(Si se ejecuta fuera de la carpeta del proyecto, en cambio, sale `npm error code ENOENT … package.json`:
falta el `cd heladeria`.)
