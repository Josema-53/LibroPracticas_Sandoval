# 02-05 · Elementos anidados con React.createElement

`index.html` produce con `createElement` el mismo árbol que se escribió a mano en 02-02:
`main > h1 + article(h2, p) + article(h2, p)`, con las clases `menu-item` y
`menu-item-description`. El `console.log(menuItem.props)` muestra que los hijos viven
dentro de los props:

```
{ className: 'menu-item', children: [ {type: 'h2', …}, {type: 'p', …} ] }
```

## Practica

> Añade un segundo sabor al menú: otro `<article>` con su `<h2>` y su `<p>`, hermano del que
> ya existe y dentro del mismo `<main>`. Cuenta cuántas llamadas a `createElement` te ha
> costado la página completa y cuántas líneas ocupan.

Hecho en `index.html` (`secondItemName`, `secondItemDescription`, `secondMenuItem`, y
`secondMenuItem` pasado como tercer hijo de `main`).

| | Resultado |
|---|---|
| Llamadas a `createElement` | **8** (h1, main, y 3 por cada sabor: h2, p, article) |
| Líneas que ocupan (de `const itemName` a `const menu`, sin el comentario) | **33** |
| Etiquetas descritas | 8 |

Ocho etiquetas, ocho llamadas y 33 líneas, escritas **al revés** del HTML (los hijos antes que
el padre). Y la estructura ya no se ve: para saber qué va dentro de qué hay que leer de abajo
hacia arriba. Ese es el número con el que empieza «Qué es JSX».
