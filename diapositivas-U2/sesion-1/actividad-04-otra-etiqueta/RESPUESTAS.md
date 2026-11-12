# Actividad 4 · Cambia la etiqueta y prueba una que no existe (02-04 · 5 min)

| Archivo | `type` en `createElement` |
|---|---|
| `index.html` | `"h1"` |
| `practica-h2.html` | `"h2"` |
| `practica-etiqueta-inexistente.html` | `"heladeria"` |

## Verifica
- [x] El texto se ve más pequeño con `h2`: es otro elemento (estilos de fábrica del navegador),
  no un estilo que haya puesto React.
- [x] Con `heladeria` aparece algo en Elements:
  `<div id="root"><heladeria>La Heladería</heladeria></div>`, como texto normal.

## Responde
- **¿Protesta React?** Sí, con un aviso (no rompe la página):
  `The tag <heladeria> is unrecognized in this browser. If you meant to render a React component,
  start its name with an uppercase letter.`
- **¿Protesta el navegador?** No. Crea un elemento desconocido (`HTMLUnknownElement`) y sigue.
- **¿Qué aparece en Elements?** El nodo `<heladeria>` con el texto dentro, sin significado
  semántico (un lector de pantalla no lo anuncia como encabezado).
