# 02-11 · Usar expresiones en JSX

`index.html` es la tarjeta con la que cierra el capítulo: el precio con formato de la región
(`formatPrice` con `Intl.NumberFormat("es-EC", …)` → **$1,50**) y la disponibilidad elegida con
un **ternario**, porque entre llaves solo cabe una *expresión* (algo que produce un valor), nunca
una *instrucción* como `if`. El `id` del `<h2>` y el `aria-labelledby` ya no van escritos a mano:
salen del dato con una plantilla de cadena (`menu-item-1-name`).

## Practica

> Cambia `inStock` a `false` y recarga. Ahora cambia `price` a `12` y mira qué imprime.
> Si mañana la heladería tuviera veinte sabores, ¿qué parte de este archivo tendrías que repetir
> veinte veces? ¿Y qué parte no?

Archivo: `practica.html` (mismo código con `inStock: false` y `price: 12`).

| Dato | `index.html` | `practica.html` |
|---|---|---|
| `inStock` | `true` → «Disponible hoy» | `false` → **«Agotado»** |
| `price` | `1.5` → «$1,50» | `12` → **«$12,00»** |

La línea cambia sola: no se tocó ninguna etiqueta, solo el objeto.

**Qué es dato y qué está escrito a mano en la tarjeta:**
- Dato: nombre del sabor, imagen, descripción, precio, disponibilidad, `id`.
- A mano: «La Heladería», «Disponible hoy» / «Agotado», el pie «La Heladería -- Ambato», las
  clases CSS.

**¿Qué se repetiría veinte veces?** Todo el bloque `<article>…</article>` (imagen, `<h2>` con
su `id`, los tres párrafos y el `aria-labelledby`) y, además, veinte objetos de datos.

**¿Qué no?** El encabezado `<h1>`, el `<main>`, el `<footer>`, la función `formatPrice` y los
`import`/montaje: aparecen una sola vez sin importar cuántos sabores haya.

Esa repetición del `<article>` es exactamente el problema que resuelve el capítulo 03: escribir
la tarjeta **una vez**, como componente, y usarla con datos distintos.
