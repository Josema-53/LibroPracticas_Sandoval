# 02-02 · Cómo se renderiza la vista sin React

Se abre `index.html` con doble clic (la barra de direcciones empieza por `file://`).

## Practica

> Agrega un segundo sabor al menú: otro `<article>` con su `<h2>` y su párrafo, hermano del
> que ya existe y dentro del mismo `<main>`. Ábrelo en Elements y responde.

Hecho en `index.html` (sabor **Pistacho**).

Árbol que muestra la pestaña Elements:

```
html
└── body
    └── main
        ├── h1        "La Heladería"
        ├── article
        │   ├── h2    "Mora silvestre"
        │   └── p
        └── article
            ├── h2    "Pistacho"
            └── p     ← segundo párrafo
```

**¿Cuántos hijos tiene ahora `<main>`?** Tres: el `<h1>` y los dos `<article>`.

**¿A qué profundidad está el segundo párrafo?** `html > body > main > article > p`: está a
4 niveles por debajo de `<html>` (quinto nivel si se cuenta `<html>` como el 1). Es nieto de
`<main>`: hijo del segundo `<article>`.
