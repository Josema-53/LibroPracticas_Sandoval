# 03-03 · Un componente es una función que devuelve vista

`index.html` parte de `cap02/11-expresiones-en-jsx`. El encabezado y el pie pasan a ser
componentes: `Header` y `Footer`, funciones que devuelven JSX y se usan como etiquetas
(`<Header />`). El nombre empieza en **mayúscula** porque es lo que hace que Babel pase la
*función* a `createElement` en vez de una cadena:

| Escribes | Babel produce |
|---|---|
| `<h1>La Heladería</h1>` | `createElement("h1", …)` → etiqueta del navegador |
| `<Header />` | `createElement(Header, …)` → React llama a tu función |
| `{Header()}` | la llamas tú; React solo recibe el `<h1>` y no sabe que hubo componente |

La tarjeta todavía **no** es componente: leería `menuItem` del ámbito (impura). Se resuelve en
03-04 con props.

## Practica

> Escribe un tercer componente, `Aviso`, que devuelva un párrafo con el horario de la heladería.
> Colócalo dentro de `Footer`, debajo del párrafo que ya está. Después estropéalo a propósito:
> quítale la mayúscula al nombre, y luego quítale la barra del cierre.

Hecho en `index.html`:

```jsx
const Aviso = () => <p>Abierto de lunes a domingo, de 10:00 a 20:00.</p>;

const Footer = () => (
  <footer>
    <p>La Heladería -- Ambato</p>
    <Aviso />
  </footer>
);
```

Se comprueban las dos cosas: un componente usa otro sin nada especial (es una función que llama a
otra función), y para eso no hace falta ninguna pieza nueva de React.

### Error 1 · sin mayúscula → `practica-error-minuscula.html`

```
The tag <aviso> is unrecognized in this browser. If you meant to render a React component,
start its name with an uppercase letter.
```

Babel pasó la cadena `"aviso"`, React intentó crear una etiqueta `<aviso>` que el navegador no
conoce, y el horario **desaparece** de la página (en Elements queda un `<aviso></aviso>` vacío).

### Error 2 · sin la barra del cierre → `practica-error-sin-barra.html`

```
Uncaught SyntaxError: /Inline Babel script: Expected corresponding JSX closing tag for <Aviso>. (32:8)
  31 |           <Aviso>
> 32 |         </footer>
     |         ^
```

La página queda **en blanco**: es un error de sintaxis, Babel ni siquiera llega a ejecutar nada.
Señala dónde esperaba el cierre (`</footer>`), no la línea donde falta la barra (la de arriba).

**¿Por qué la mayúscula cambia lo que Babel le pasa a `createElement`?** Porque esa es la regla
de JSX: minúscula = etiqueta del navegador (se pasa como texto); mayúscula = una variable de
JavaScript (se pasa la función misma), y React la ejecuta para saber qué devuelve.
