# 03-02 · Funciones puras

`index.html` no carga React: es un `<script>` normal y la consola. Una función es **pura** si su
resultado sale solo de sus argumentos y no cambia nada de fuera. Solo hay dos maneras de dejar de
serlo: **mirar** algo de fuera (`priceWithTax` lee `taxRate`) o **tocar** lo que le dieron
(`applyDiscount` muta el ítem). La versión pura (`withDiscount`) construye un objeto nuevo con
`...item`, y esa copia es **superficial** (`iceCream` sigue compartido).

Salida de la consola (ejecutada):

```
$1,50
$1,50
$1,68
$1,72
$1,50
$1,20
$1,20      ← el original también quedó rebajado: applyDiscount lo mutó
$0,96
$1,20
false
true
```

## Practica

> Repítelo sobre un array: crea `const menu = [menuItem]` y escribe `addItem(menu, item)` de las
> dos maneras, una con `menu.push(item)` y otra con `[...menu, item]`. Llama a las dos con
> `rebajado` y después imprime `menu.length`. Si `addItem` recibe el array del menú de la
> aplicación y lo muta, ¿quién más se entera del cambio?

Hecho al final del mismo `index.html` (`addItemPush` y `addItem`). Salida:

```
--- Practica: arrays ---
menu.length al empezar: 1
con [...menu, item] → nuevo: 2 | menu.length: 1
con menu.push(item) → devuelto: 2 | menu.length: 2
¿push devolvió el mismo array? true
```

- Con `[...menu, item]` se obtiene un array nuevo de 2 y el `menu` original **sigue en 1**.
- Con `push` el array devuelto *es el mismo* `menu`, que **crece a 2**: la función mutó lo que
  recibió.

**¿Quién más se entera?** *Todo el que tenga una referencia a ese mismo array*: cualquier otra
variable, componente o función que lo esté usando ve el cambio, sin haberlo pedido y sin que
nadie le avise. Y quien **no** se entera es justamente React: el array sigue siendo el mismo
objeto, así que al compararlo con el anterior cree que nada cambió y no vuelve a renderizar. Por
eso, en React, el state no se modifica: se reemplaza.
