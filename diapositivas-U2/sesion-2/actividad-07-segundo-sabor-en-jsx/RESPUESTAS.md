# Actividad 7 · Agrega el segundo sabor, ahora en JSX, y compara (02-07 · 5 min)

Pasos hechos en `index.html`:
1. Vista entera en JSX (copiada de 06): ya no hay ninguna llamada a `createElement`.
2. Al añadir el `<footer>` junto al `<main>` sale
   `Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?`;
   se resuelve envolviendo con `<>` y `</>`.
3. Segundo `<article>` (Naranjilla) dentro del `<main>`.

## Verifica
- [x] No queda ninguna llamada a `createElement`.
- [x] Elements no muestra un `<div>` de más: `#root` contiene directamente `<main>` y `<footer>`.

## Responde
Las dos soluciones lado a lado:

```js
// createElement (actividad 5)
const secondItemName = React.createElement("h2", null, "Naranjilla");
const secondItemDescription = React.createElement(
  "p",
  { className: "menu-item-description" },
  "Naranjilla de Baños, ácida y refrescante."
);
const secondMenuItem = React.createElement(
  "article",
  { className: "menu-item" },
  secondItemName,
  secondItemDescription
);
const menu = React.createElement("main", null, heading, menuItem, secondMenuItem);
```

```jsx
// JSX (actividad 7)
<article className="menu-item">
  <h2>Naranjilla</h2>
  <p className="menu-item-description">Naranjilla de Baños, ácida y refrescante.</p>
</article>
```

**¿Cuál puedes leer sin seguir el hilo con el dedo?** La de **JSX**. No porque sea más corta, sino
porque la estructura se ve: el `<h2>` y el `<p>` están escritos dentro del `<article>`, y este
dentro del `<main>`. Con `createElement` hay que reconstruir el árbol leyendo de abajo hacia arriba
y siguiendo nombres de constantes.
