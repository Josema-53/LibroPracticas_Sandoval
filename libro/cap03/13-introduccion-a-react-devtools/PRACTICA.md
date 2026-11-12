# 03-13 · Introducción a React DevTools

Sección sin código nuevo: se trabaja sobre `libro/heladeria` con `npm run dev` y la extensión
**React Developer Tools** instalada (Chrome, Firefox o Edge). En `localhost` el icono sale **rojo**
(versión de desarrollo). La pestaña **Components** muestra el árbol de componentes, sus props, su
state y quién creó cada elemento (*rendered by*, el *owner*).

## Practica

> Recorre el árbol entero de arriba abajo y compáralo con `App.jsx`. Cuenta los componentes.
> Después selecciona `Panel`, copia el valor de su hook `Id` y búscalo en Elements. Y con
> `MenuItem` seleccionado, edita a mano el `price` desde el panel y mira la tarjeta; después recarga.
> ¿Dónde quedó el cambio, y por qué?

**El árbol en Components:**

```
App
├── Header          props: avisos: 0
├── Panel           props: title: "Sabores de hoy", children   · hooks: 1 Id: "_r_0_"
│   └── Aviso       props: children
│       └── MenuItem  props: menuItem {…}, onSoldOut: ƒ        · rendered by: App
└── Footer
```

Son **6 componentes** (`App`, `Header`, `Panel`, `Aviso`, `MenuItem`, `Footer`), los mismos que
aparecen en `App.jsx`: `App` más los cinco que importa. No falta ninguno. `MenuItem` cuelga de
`Aviso` (y este de `Panel`) aunque `App.jsx` los importe a todos al mismo nivel: el árbol es el de
la vista, no el de los imports. Y su *rendered by* dice `App`, porque el `<MenuItem />` está escrito
en `App.jsx`; `Panel` y `Aviso` solo lo reciben como `children`.

**El `Id` de `Panel`:** el hook vale `_r_0_`. Buscado en Elements (Ctrl+F) aparece **dos veces**,
en la misma etiqueta y su hijo:

```html
<section class="panel" aria-labelledby="_r_0_">
  <h2 id="_r_0_">Sabores de hoy</h2>
```

Es la unión de 03-11: `useId` generó el identificador y lo usan a la vez el `id` del `<h2>` y el
`aria-labelledby` de la `<section>`.

**Editar `price` desde el panel:** al cambiar `menuItem.price` de `1.5` a, por ejemplo, `3` en las
props de `MenuItem`, la tarjeta pasa a mostrar **$3,00** al instante. Al **recargar**, vuelve a
**$1,50**.

¿Dónde quedó el cambio? **En ningún sitio permanente.** DevTools modificó la prop en la memoria de
esa pestaña del navegador, en esa ejecución de React. No tocó el código: el valor real sale de
`menuItemInicial` en `App.jsx`, y al recargar la aplicación se vuelve a crear desde ahí. Además, al
ser una prop, el cambio duraría solo hasta que `App` volviera a renderizar (por ejemplo, al pulsar
«Marcar como agotado»), porque `App` le pasaría otra vez su propio `menuItem`. Si se quiere
probar un cambio que aguante renders, se edita el **state de `App`**, que es el dueño del dato; y si
se quiere que aguante recargas, se edita el código.
