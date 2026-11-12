# Actividad 3 · Cambia la versión de React (02-03 · 5 min)

| Archivo | Direcciones | Consola |
|---|---|---|
| `index.html` | `react@19.2.0` / `react-dom@19.2.0/client` | `React 19.2.0` · `createRoot es una function` |
| `practica-react-18.html` | `18.3.1` en las dos | `React 18.3.1` · `createRoot es una function` |
| `practica-version-inexistente.html` | `19.99.0` en las dos | Ningún `console.log`; error de carga del módulo |

## Verifica
- [x] Con 18.3.1 la consola dice otra versión (`React 18.3.1`).
- [x] Con 19.99.0 aparece un error: en la pestaña **Network** la petición a
  `esm.sh/react@19.99.0` responde **404** y el módulo entero no se ejecuta.

## Responde
**¿En cuál de los dos casos falla la página, y cómo te enteras?** Falla con **19.99.0**. Con
18.3.1 todo funciona (esa versión existe y ya traía `createRoot`). En los tres casos la página se
ve igual, porque el contenido está escrito en el HTML: te enteras por la **consola** (no salen los
dos mensajes, sale un error rojo) y, con certeza, por **Network**, que muestra el 404 de la CDN.

Tutoriales viejos: `<script crossorigin src=".../umd/react.development.js">` ya no existe en
React 19 (da CORS y 404).
