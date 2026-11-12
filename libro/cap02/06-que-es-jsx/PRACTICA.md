# 02-06 · Qué es JSX

`index.html` trae Babel por CDN y marca el bloque con `type="text/babel" data-type="module"`.
`heading` está escrito en JSX (`<h1>La Heladería</h1>`) y convive con las llamadas a
`createElement`: al compilar, las dos formas son la misma llamada. `console.log(heading)`
imprime el mismo objeto que en 02-04 (`type: 'h1'`, `props: { children: 'La Heladería' }`).

> Nota: este archivo parte de `04/05` con **un** sabor, como hace el libro en esta sección.

## Practica

> Pasa `itemName` a JSX y deja los otros tres como están. Recarga y comprueba que la página no
> cambia. ¿Cómo se escribiría ese `className` en JSX? ¿Y por qué crees que ese es el orden en
> que aparece?

Hecho: `const itemName = <h2>Mora silvestre</h2>;`. La página se ve exactamente igual y
`console.log(itemName)` muestra un elemento con `type: 'h2'`, el mismo que devolvía
`React.createElement("h2", null, "Mora silvestre")`.

**¿Cómo se escribe el `className` de `itemDescription` en JSX?** Como un atributo de la etiqueta:

```jsx
const itemDescription = (
  <p className="menu-item-description">Mora de Ambato con un toque de limón.</p>
);
```

**¿Por qué ese orden?** Porque JSX es solo otra forma de escribir los tres argumentos de
`createElement(type, props, ...children)`, en el mismo orden:

1. el nombre de la etiqueta (`p`) → `type`,
2. los atributos dentro de la etiqueta de apertura (`className="…"`) → el objeto `props`,
3. lo que va entre apertura y cierre (el texto) → `children`.

Babel lee la etiqueta de izquierda a derecha y la convierte en
`React.createElement("p", { className: "menu-item-description" }, "Mora de Ambato…")`.
