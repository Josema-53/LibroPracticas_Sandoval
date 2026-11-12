# Actividad 13 · Repite la prueba con un array: push frente a spread (03-02 · 10 min)

En `index.html` (al final del `<script>`, después de lo de la sección):

```js
const menu = [menuItem];

const addItemPush = (menu, item) => { menu.push(item); return menu; };
const addItem = (menu, item) => [...menu, item];
```

Salida real de la consola:

```
--- Practica: arrays ---
menu.length al empezar: 1
con [...menu, item] → nuevo: 2 | menu.length: 1
con menu.push(item) → devuelto: 2 | menu.length: 2
¿push devolvió el mismo array? true
```

## Verifica
- [x] Con `push`, el menú original **crece** (de 1 a 2).
- [x] Con `[...menu, item]` el original **queda igual** (1) y se obtiene un array nuevo de 2.

## Responde
**Si `addItem` muta el menú de la aplicación, ¿quién más se entera del cambio?** Todo el código
que tenga una referencia a ese mismo array: otras variables, funciones o componentes ven el cambio
sin haberlo pedido y sin aviso. Y quien **no** se entera es React: el array sigue siendo el mismo
objeto, su comparación dice «no cambió» y no vuelve a renderizar. Por eso el state no se modifica,
se reemplaza (`[...menu, item]`).
