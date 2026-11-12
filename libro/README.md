# Libro «React sin magia» — prácticas de los capítulos 02 y 03

Cada sección del libro tiene su carpeta con el código final de la sección **y su ejercicio
«Practica» resuelto**. En cada carpeta, `PRACTICA.md` explica qué se hizo y responde las preguntas;
los archivos `practica-*.html` son las variantes que pide el ejercicio (versiones rotas a propósito,
datos cambiados…), para poder abrirlas lado a lado con `index.html`.

- Capítulo 02 y secciones 03-01 a 03-05: páginas `.html` que se abren con doble clic
  (React y Babel por CDN; hace falta internet).
- Desde 03-06: proyecto de Vite. Cada carpeta guarda una copia de `heladeria/` tal como queda en
  esa sección. Para ejecutarla: `cd heladeria && npm install && npm run dev`.
- `heladeria/` (en esta carpeta) es el proyecto final del capítulo 03, sobre el que se hacen 03-12
  y 03-13.

## Capítulo 02 · Introducción a React

| Sección | Carpeta | Practica |
|---|---|---|
| 02-01 La introducción que falta | `cap02/01-la-introduccion-que-falta` | Pantalla dibujada en recuadros |
| 02-02 Cómo se renderiza la vista sin React | `cap02/02-html-estatico` | Segundo sabor y lectura del DOM |
| 02-03 Arrancar React dentro de un HTML | `cap02/03-react-por-cdn` | Versiones 18.3.1 y 19.99.0 |
| 02-04 Renderizar un elemento con createElement | `cap02/04-primer-elemento` | `h2` y etiqueta inexistente |
| 02-05 Elementos anidados | `cap02/05-elementos-anidados` | Segundo sabor con createElement (8 llamadas, 33 líneas) |
| 02-06 Qué es JSX | `cap02/06-que-es-jsx` | `itemName` en JSX |
| 02-07 Crear vista con JSX | `cap02/07-crear-vista-con-jsx` | Segundo sabor en JSX y comparación |
| 02-08 La relación entre HTML y JSX | `cap02/08-html-y-jsx` | Traducción del marcado (0 avisos) |
| 02-09 Accesibilidad y ARIA en JSX | `cap02/09-accesibilidad-y-aria` | Referencia ARIA rota |
| 02-10 Interpolar valores en JSX | `cap02/10-interpolar-valores` | Precio interpolado |
| 02-11 Usar expresiones en JSX | `cap02/11-expresiones-en-jsx` | `inStock: false`, `price: 12`, veinte sabores |

## Capítulo 03 · Introducción a los componentes

| Sección | Carpeta | Practica |
|---|---|---|
| 03-01 Introducción a los componentes | `cap03/01-introduccion-a-los-componentes` | Del papel al árbol |
| 03-02 Funciones puras | `cap03/02-funciones-puras` | `push` frente a `[...menu, item]` |
| 03-03 Un componente es una función | `cap03/03-componentes-como-funciones` | `Aviso` y dos errores |
| 03-04 Pasar props a un componente | `cap03/04-pasar-props` | `MenuItemPlano` |
| 03-05 El prop children | `cap03/05-el-prop-children` | Dos tarjetas, menú vacío, `Aviso` contenedor |
| 03-06 Entorno de desarrollo con Vite | `cap03/06-entorno-vite` | Recarga en caliente, `node_modules`, dos servidores |
| 03-07 Un componente por archivo | `cap03/07-un-componente-por-archivo` | `Aviso.jsx`, `export const` |
| 03-08 Manejar un evento | `cap03/08-manejar-un-evento` | «Ver ficha», `onDoubleClick`, contar renders |
| 03-09 Agregar state con useState | `cap03/09-agregar-state-usestate` | State `veces` y hook en un `if` (lint) |
| 03-10 Los datos bajan, los eventos suben | `cap03/10-los-datos-bajan-los-eventos-suben` | State `avisos` mostrado en `Header` |
| 03-11 Componentes reutilizables | `cap03/11-construir-componentes-reutilizables` | ¿Generalizar `MenuItem` y `Header`? |
| 03-12 Introducción al reconciler | `cap03/12-introduccion-al-reconciler` | ¿El `<h3>` es el mismo nodo? |
| 03-13 Introducción a React DevTools | `cap03/13-introduccion-a-react-devtools` | Árbol, `useId`, editar `price` |

Los capítulos 04 a 09 del libro todavía no tienen contenido (solo título), así que no tienen
prácticas.
