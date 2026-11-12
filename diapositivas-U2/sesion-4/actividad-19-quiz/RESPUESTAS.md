# Actividad 19 · Quiz de cierre del tema 2.1 (10 min)

| # | Pregunta | Respuesta | Por qué |
|---|---|---|---|
| 1 | ¿Qué devuelve `React.createElement`? | **Un objeto, no un nodo.** | Es una descripción (`type`, `props`); el nodo lo crea `createRoot(...).render`. (02-04) |
| 2 | ¿Qué envuelve dos raíces sin crear nodos? | **El fragmento `<>…</>`** (o `<React.Fragment>`). | Una expresión JSX tiene un solo elemento raíz; el fragmento agrupa sin dejar un `<div>` en el DOM. (02-07) |
| 3 | ¿Cómo se escribe `for` en JSX? ¿Y `aria-label`? | **`htmlFor`** · **`aria-label`** | `for` cambia de nombre (propiedad del DOM, palabra reservada); los atributos ARIA conservan los guiones. (02-08, 02-09) |
| 4 | ¿Por qué `Header` lleva mayúscula? | **Porque así Babel pasa la función** a `createElement`. | Con minúscula pasaría la cadena `"header"` y React crearía la etiqueta HTML. (03-03) |
| 5 | ¿Dónde llega lo que va entre `<Menu>` y `</Menu>`? | **En la prop `children`.** | React lo recoge y se lo pasa al componente como una prop más con nombre fijo. (03-05) |
