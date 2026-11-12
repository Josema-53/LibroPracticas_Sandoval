# Actividad 11 · Cambia los datos y piensa en veinte sabores (02-11 · 5 min)

| Archivo | `inStock` | `price` | En pantalla |
|---|---|---|---|
| `index.html` | `true` | `1.5` | «$1,50» · «Disponible hoy» |
| `practica.html` | **`false`** | **`12`** | «**$12,00**» · «**Agotado**» |

## Verifica
- [x] Con `false` aparece «Agotado» (el ternario elige la otra rama).
- [x] Con `12` aparece «$12,00».

**Qué es dato y qué está escrito a mano en la tarjeta:**
- Dato: nombre, imagen, descripción, precio, disponibilidad y el `id` del `<h2>`/`aria-labelledby`.
- A mano: «La Heladería», los textos «Disponible hoy»/«Agotado», el pie y las clases.

## Responde
**Si mañana hubiera veinte sabores, ¿qué parte del archivo repetirías veinte veces?** El bloque
`<article>…</article>` completo (imagen, `<h2>` con su `id`, los tres párrafos y el
`aria-labelledby`), más veinte objetos de datos.

**¿Y cuál no?** El `<h1>`, el `<main>`, el `<footer>`, la función `formatPrice`, los `import` y el
montaje con `createRoot`. Esa repetición del `<article>` es lo que resuelven los componentes
(sesión 3).
