# Actividad 5 · Escribe un segundo sabor con createElement y cuenta el costo (02-05 · 10 min)

En `index.html`, de dentro hacia afuera: `secondItemName` (h2) → `secondItemDescription` (p) →
`secondMenuItem` (article), y `secondMenuItem` añadido como tercer hijo del `main`:

```js
const menu = React.createElement("main", null, heading, menuItem, secondMenuItem);
```

## Verifica
- [x] Elements muestra dos `<article class="menu-item">` dentro de `<main>`.
- [x] La consola está limpia (se usó `className`, no `class`). Solo aparece el
  `console.log(menuItem.props)`: `{ className: 'menu-item', children: Array(2) }`.

## Responde
| | Resultado |
|---|---|
| Llamadas a `createElement` | **8** (h1, main y 3 por sabor) |
| Líneas de la página completa (de `const itemName` a `const menu`, sin el comentario) | **33** |

Ocho llamadas y 33 líneas para ocho etiquetas, escritas al revés del HTML. Es el número con el que
empieza la próxima clase (JSX).
