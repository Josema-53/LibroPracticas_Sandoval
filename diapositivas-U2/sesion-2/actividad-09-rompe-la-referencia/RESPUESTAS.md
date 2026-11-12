# Actividad 9 · Rompe la referencia ARIA a propósito y encuéntrala (02-09 · 5 min)

| Archivo | `<h2 id>` | `<article aria-labelledby>` |
|---|---|---|
| `index.html` | `flavor-mora` | `flavor-mora` |
| `practica-referencia-rota.html` | **`flavor-1`** | `flavor-mora` |

Cómo mirarlo: DevTools → Elements → seleccionar el `<article>` → pestaña **Accessibility** →
campo **Name**.

## Verifica
- [x] Con la referencia rota, el Name queda **vacío**: el `<article>` vuelve a anunciarse solo
  como «artículo».
- [x] Al corregir el `id` (`index.html`), vuelve «Mora silvestre».
- La página se ve igual y la consola está **limpia** en los dos casos.

## Responde
**¿Qué herramienta te habría avisado de este error?** El **árbol de accesibilidad**, no la
consola. La sintaxis es válida y React no tiene nada que objetar; el error solo existe en el nombre
accesible. Por eso ARIA se comprueba en DevTools, no se supone.
