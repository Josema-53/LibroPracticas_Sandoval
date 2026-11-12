# 03-12 · Introducción al reconciler de React

Sección sin código nuevo: se trabaja sobre `libro/heladeria` (el proyecto tal como quedó en 03-11).

React compara **dos veces**, y no es la misma comparación:

1. **¿Hay que volver a renderizar?** Al llamar al setter, compara el state nuevo con el anterior
   con `Object.is`. Si es el mismo objeto, no hace nada (por eso falló la mutación en 03-10).
2. **¿Qué hay que tocar del DOM?** Si hubo render, compara el árbol de elementos nuevo con el
   anterior (la *reconciliación*). Nunca lee el DOM: compara dos árboles que tiene en memoria y
   escribe en el DOM solo la diferencia.

## Practica

> Repite la comprobación, pero guardando también una referencia al `<h3>` con el nombre del
> sabor. Pulsa y comprueba si sigue siendo el mismo nodo. Responde antes de ejecutarlo. Después,
> en Elements, pulsa el botón y fíjate en qué líneas parpadean.

**Predicción (antes de ejecutar):** sí, el `<h3>` es el mismo nodo. Sigue siendo un `h3` en la
misma posición dentro del mismo `<article>`, y su texto («Mora silvestre») no cambió: React no
tiene nada que hacerle.

**Ejecución** (`comprobacion.js`, pegado en la consola; resultado obtenido en el navegador):

```js
{ mismoArticle: true, mismoParrafo: true, mismoH3: true, textoAhora: 'Agotado' }
```

Se confirma: tras el clic, el `<article>`, el párrafo y el `<h3>` son **los mismos objetos del
DOM**. Lo único que React reescribió fue el texto del párrafo de existencias y el atributo
`disabled` del botón (y, en esta versión, el texto del contador del encabezado).

**En Elements**, al pulsar el botón Chrome resalta un instante los nodos que cambian: parpadean el
texto del párrafo de existencias («Disponible hoy» → «Agotado»), el `<button>` (al que se le añade
`disabled=""`) y el número del contador del `Header`. El `<article>`, la imagen, el `<h3>`, la
descripción y el precio no parpadean. Es lo mismo que dijo la consola: un render vuelve a ejecutar
el componente, pero no rehace los nodos.
