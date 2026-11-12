# 02-04 · Renderizar un elemento con React.createElement

`index.html`: el `<body>` solo tiene `<div id="root"></div>`. React crea el `<h1>` con
`React.createElement("h1", null, "La Heladería")` y lo monta con
`createRoot(container).render(title)`. El `console.log(title)` muestra un **objeto**
(`{ $$typeof: Symbol(react.transitional.element), type: 'h1', props: { children: 'La Heladería' }, … }`),
no un nodo del DOM.

## Practica

> Cambia `'h1'` por `'h2'` y recarga. Ahora prueba `'heladeria'`, una etiqueta que no existe.
> ¿Protesta React? ¿Protesta el navegador? ¿Y qué aparece en Elements?

### `'h2'` → `practica-h2.html`

El encabezado se ve más pequeño. No es que React lo haya estilizado: es **otro elemento**, y el
tamaño sale de los estilos que el navegador trae de fábrica para un `<h2>`. En Elements:
`<div id="root"><h2>La Heladería</h2></div>`.

### `'heladeria'` → `practica-etiqueta-inexistente.html`

- **¿Protesta React?** Sí, pero solo con un **aviso** en la consola (la versión `?dev` lo
  muestra): `The tag <heladeria> is unrecognized in this browser. If you meant to render a React
  component, start its name with an uppercase letter.` La página no se rompe.
- **¿Protesta el navegador?** No. HTML tolera etiquetas desconocidas: las crea como
  `HTMLUnknownElement` y sigue.
- **¿Qué aparece en Elements?** `<div id="root"><heladeria>La Heladería</heladeria></div>`.
  El texto se ve como texto normal, sin estilo de encabezado, porque el navegador no sabe qué es
  esa etiqueta. Y semánticamente no significa nada: un lector de pantalla no lo anuncia como
  encabezado.

Conclusión: el `type` decide qué nodo se crea, y React no inventa HTML; usa el que existe.
