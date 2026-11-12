# 02-08 · La relación entre HTML y JSX

`index.html` tiene el mismo campo dos veces: uno escrito a mano en el `<body>` y otro producido
por React en `#root`. En Elements los dos `<input>` quedan idénticos (`maxlength="40"`,
`readonly`, `class="field"`); de `className` y `htmlFor` no queda rastro porque nunca fueron
marcado. Las tres diferencias:

| HTML | JSX | Por qué |
|---|---|---|
| `class` | `className` | nombre de la propiedad del DOM (`class` era palabra reservada) |
| `for` | `htmlFor` | ídem (`for` es palabra reservada) |
| `maxlength`, `readonly` | `maxLength`, `readOnly` | los props son claves de un objeto: camelCase |
| `<input>` | `<input />` | en JSX toda etiqueta se cierra |

`html-pegado-sin-traducir.html` reproduce el error de pegar HTML tal cual: salen los cuatro
avisos `Invalid DOM property 'for' / 'maxlength' / 'readonly' / 'class'`. Tres llegan al DOM y
funcionan; **`readonly` desaparece** y el campo deja escribir.

## Practica

> Traduce a JSX este marcado, sin ejecutarlo todavía:
> ```html
> <img src="mora.svg" alt="Helado de mora silvestre" class="photo">
> <label for="description">Descripción</label>
> <input id="description" maxlength="120" readonly class="field">
> ```
> Pégalo en tu archivo y cuenta los avisos.

Traducción (ya puesta en `index.html`, constante `practice`):

```jsx
<img src="mora.svg" alt="Helado de mora silvestre" className="photo" />
<label htmlFor="description">Descripción</label>
<input id="description" maxLength="120" readOnly className="field" />
```

Cambios hechos: **6** — `class`→`className` (dos veces), `for`→`htmlFor`,
`maxlength`→`maxLength`, `readonly`→`readOnly`, y cerrar `<img />` e `<input />`. Como van
juntos y son hermanos, se envuelven en un fragmento.

**Avisos de React al pegarlo: 0.** La imagen sale rota porque `mora.svg` todavía no existe en
esta carpeta (llega en 02-10); ese error de red es del navegador y no cuenta.

**¿Cuál no da aviso propio pero sí cambia el comportamiento?** `readonly` mal escrito: es el
único de los cuatro que no llega al DOM, así que el campo se podría editar aunque se vea igual.
