# Actividad 14 · Escribe el componente Aviso y provoca los dos errores más frecuentes (03-03 · 10 min)

`index.html`:

```jsx
const Aviso = () => <p>Abierto de lunes a domingo, de 10:00 a 20:00.</p>;

const Footer = () => (
  <footer>
    <p>La Heladería -- Ambato</p>
    <Aviso />
  </footer>
);
```

| Archivo | Cambio | Qué pasa |
|---|---|---|
| `practica-error-minuscula.html` | `aviso` / `<aviso />` | Aviso: `The tag <aviso> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.` El horario desaparece. |
| `practica-error-sin-barra.html` | `<Aviso>` sin `/` | `Uncaught SyntaxError: /Inline Babel script: Expected corresponding JSX closing tag for <Aviso>. (32:8)` Página en blanco. |
| `practica-sin-return.html` | `() => { <p>…</p>; }` | Ningún mensaje: el horario simplemente no aparece. Con llaves hace falta `return`. |

## Verifica
- [x] El horario aparece en el pie (`index.html`).
- [x] Reconozco los dos mensajes (tabla de arriba, comprobados en el navegador).
- [x] `() => { <p>…</p>; }` no muestra nada: falta `return`.

## Responde
**¿Por qué la mayúscula cambia lo que Babel le pasa a `createElement`?** Porque JSX usa la inicial
para decidir: con minúscula, el nombre es una **etiqueta del navegador** y Babel pasa una cadena
(`createElement("aviso")`); con mayúscula, es una **variable de JavaScript** y Babel pasa la función
misma (`createElement(Aviso)`), que React ejecuta para saber qué vista devuelve.
