# Actividad 6 · Pasa itemName a JSX y deja el resto como está (02-06 · 5 min)

En `index.html` (con Babel por CDN y `type="text/babel" data-type="module"`):

```jsx
const itemName = <h2>Mora silvestre</h2>;   // JSX
console.log(itemName);
// itemDescription y menuItem siguen con React.createElement
```

## Verifica
- [x] La página se ve igual.
- [x] La consola no muestra errores. `console.log(itemName)` imprime
  `{$$typeof: Symbol(react.transitional.element), type: 'h2', key: null, props: {…}, _owner: null}`:
  el mismo tipo de objeto que devolvía `createElement` en 02-04.

## Responde
**¿Cómo se escribe en JSX el `className` de `itemDescription`?**

```jsx
<p className="menu-item-description">Mora de Ambato con un toque de limón.</p>
```

**¿Por qué ese orden?** Porque JSX es la misma llamada `createElement(type, props, ...children)`
escrita de otra forma, y respeta su orden: el nombre de la etiqueta es el `type`, los atributos de
la etiqueta de apertura son el objeto `props` y lo que va entre apertura y cierre son los
`children`. Babel la convierte en
`React.createElement("p", { className: "menu-item-description" }, "Mora de Ambato…")`.
