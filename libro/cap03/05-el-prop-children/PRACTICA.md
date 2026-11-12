# 03-05 · El prop children

`index.html`: aparece `Menu`, una `<section>` con su título «Sabores de hoy» que coloca
`{children}`: lo que se escriba entre `<Menu>` y `</Menu>`. Así `Menu` no recibe el sabor solo
para pasárselo a la tarjeta (eso sería *prop drilling*); recibe la tarjeta **ya fabricada**. Como
`Menu` aporta un `<h2>`, el nombre del sabor baja a `<h3>`, y la `<section>` se nombra con
`aria-labelledby="menu-title"`.

> `MenuItemPlano` (práctica de 03-04) se queda en esa sección: era una comparación, no parte de la
> aplicación.

## Practica

> Pon dos veces la misma tarjeta y recarga, y después deja el contenedor vacío
> (`<Menu></Menu>`) y mira qué queda. Después escribe un segundo contenedor, `Aviso`, que devuelva
> un `<aside>` con un `<p>` y coloque `{children}` debajo. Úsalo dentro de `Menu`, envolviendo la
> tarjeta.

| Archivo | Qué hay entre `<Menu>` y `</Menu>` | Resultado |
|---|---|---|
| `practica-dos-tarjetas.html` | dos `<MenuItem />` | Las dos tarjetas dentro de la misma `<section>`, sin cambiar una línea de `Menu` |
| `practica-menu-vacio.html` | nada | Queda la sección con su título «Sabores de hoy» y nada más. Sin errores: `children` es `undefined`, que no renderiza nada |
| `index.html` | `<Aviso><MenuItem /></Aviso>` | La tarjeta aparece dentro del `<aside>`, debajo del horario |

Observación sobre las dos tarjetas: como son el mismo dato, los dos `<h3>` tienen el mismo `id`
(`menu-item-1-name`). Con sabores distintos no pasaría, porque el `id` sale del dato.

`Aviso` (en `index.html`) pasa a ser contenedor:

```jsx
const Aviso = ({ children }) => (
  <aside className="aviso">
    <p>Abierto de lunes a domingo, de 10:00 a 20:00.</p>
    {children}
  </aside>
);

<Menu>
  <Aviso>
    <MenuItem menuItem={menuItem} />
  </Aviso>
</Menu>
```

Para no mostrar el horario dos veces, el `<Aviso />` sale del `Footer` y pasa al menú.

Árbol en Elements: `section.menu > h2 + aside.aviso > (p + article.menu-item)`.

**¿Por qué `Menu` no necesita saber qué hay dentro de `Aviso`?** Porque recibe un elemento ya
creado: `<Aviso>…</Aviso>` se construye en la vista, antes de que `Menu` se ejecute, y `Menu`
solo lo coloca donde está `{children}`. Lo mismo le pasa a `Aviso` con la tarjeta. Un contenedor
puede contener otro sin que ninguno de los dos se entere de lo que lleva el otro.
