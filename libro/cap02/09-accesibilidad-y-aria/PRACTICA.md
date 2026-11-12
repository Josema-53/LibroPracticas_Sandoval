# 02-09 · Accesibilidad y ARIA en JSX

`index.html`: cada `<article>` recibe un nombre accesible con `aria-labelledby` apuntando al
`id` de su `<h2>`. Los atributos ARIA (y los `data-*`) **conservan los guiones** en JSX: no hay
nada que traducir porque se llaman igual en el DOM.

Se usa `aria-labelledby` y no `aria-label` porque el nombre **ya está escrito** en la página: si
mañana alguien corrige el `<h2>`, el nombre accesible se corrige solo.

Cómo comprobarlo: DevTools → Elements → seleccionar el `<article>` → pestaña
**Accessibility** → *Computed Properties* → **Name** = «Mora silvestre».

## Practica

> Rompe la referencia a propósito: cambia el `id` del `<h2>` a `flavor-1` y deja el
> `<article>` señalando a `flavor-mora`. Recarga y mira el Name en Accessibility.

Archivo: `practica-referencia-rota.html`.

| | `index.html` | `practica-referencia-rota.html` |
|---|---|---|
| Aspecto en pantalla | igual | igual |
| Consola | limpia | **limpia** (React no avisa: la sintaxis es válida) |
| Name del primer `<article>` | «Mora silvestre» | **(vacío)**: el `id` señalado no existe |

**¿Qué herramienta habría avisado del error?** Ni la pantalla ni la consola: solo el **árbol de
accesibilidad** (pestaña Accessibility). Conclusión de la sección: hay errores que solo existen
ahí, y por eso el nombre accesible se comprueba, no se supone.

Tabla del libro, comprobada con esta tarjeta:

| El `<article>` con… | ¿Avisa React? | Nombre accesible |
|---|---|---|
| `aria-labelledby` al `<h2>` | no | Mora silvestre |
| nada | no | (vacío) |
| `ariaLabelledby` (camelCase) | sí: `Invalid ARIA attribute` | (vacío) |
| `aria-labelledby` a un id que no existe | no | (vacío) |
