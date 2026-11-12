# 02-07 · Crear vista con JSX

`index.html`: ya no queda ninguna llamada a `createElement`. La vista se escribe de fuera hacia
dentro, como se lee. Al añadir el `<footer>` junto al `<main>` aparece el error de Babel
`Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?`,
y se resuelve con un fragmento `<>…</>`, que agrupa sin dejar un `<div>` de más en el DOM
(en Elements, `#root` contiene directamente `<main>` y `<footer>`).

## Practica

> Añade el segundo sabor dentro del `<main>`, ahora en JSX. Pon las dos soluciones una al lado
> de la otra: ¿cuál puedes leer sin seguir el hilo con el dedo?

Hecho en `index.html`. Costó copiar un `<article>` y cambiar dos textos: un minuto, frente a
los diez de 02-05.

**Con `createElement` (02-05):**

```js
const secondItemName = React.createElement("h2", null, "Pistacho");

const secondItemDescription = React.createElement(
  "p",
  { className: "menu-item-description" },
  "Sabor suave con pequeños trozos de pistacho."
);

const secondMenuItem = React.createElement(
  "article",
  { className: "menu-item" },
  secondItemName,
  secondItemDescription
);
// …y además añadirlo a mano como hijo de main:
const menu = React.createElement("main", null, heading, menuItem, secondMenuItem);
```

**Con JSX (02-07):**

```jsx
<article className="menu-item">
  <h2>Pistacho</h2>
  <p className="menu-item-description">
    Sabor suave con pequeños trozos de pistacho.
  </p>
</article>
```

**Respuesta:** la de JSX. No por ser más corta (que lo es: 6 líneas frente a 13 + tocar el
`main`), sino porque **la estructura se ve**: el `<h2>` y el `<p>` están escritos *dentro* del
`<article>`, y el `<article>` dentro del `<main>`. Con `createElement` hay que reconstruir el
árbol leyendo de abajo hacia arriba y siguiendo nombres de constantes.
