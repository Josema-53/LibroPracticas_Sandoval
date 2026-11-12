# Actividad 2 · Agrega un segundo sabor y léelo en el DOM (02-02 · 5 min)

Archivo: `index.html` (se abre con doble clic). Se añadió el sabor **Naranjilla**: otro
`<article>` con su `<h2>` y su `<p>`, hermano del primero y dentro del mismo `<main>`.

```
html
└── body
    └── main
        ├── h1        "La Heladería"
        ├── article   (Mora silvestre)
        │   ├── h2
        │   └── p
        └── article   (Naranjilla)
            ├── h2
            └── p     ← segundo párrafo
```

## Verifica
- [x] Los dos sabores se ven en pantalla.
- [x] Ambos `<article>` cuelgan de `<main>` (pestaña Elements).

## Responde
- **¿Cuántos hijos tiene ahora `<main>`?** **3**: el `<h1>` y los dos `<article>`.
- **¿A qué profundidad está el segundo párrafo?** `html > body > main > article > p`: 4 niveles
  por debajo de `<html>` (quinto nivel contando `<html>` como 1). Es hijo del segundo `<article>`
  y nieto de `<main>`.

Errores que no avisan (recordatorio): lo que se edita en Elements no se guarda en el archivo;
«Ver código fuente» no es el DOM; y no se salta de `<h1>` a `<h3>`.
