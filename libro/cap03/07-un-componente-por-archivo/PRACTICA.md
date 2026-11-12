# 03-07 · Un componente por archivo: exportar e importar

`heladeria/` con cada componente en su archivo dentro de `src/components/`:

```
src/
├── components/
│   ├── Aviso.jsx       ← práctica de esta sección
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Menu.jsx
│   └── MenuItem.jsx    ← se lleva formatPrice, que solo usa él
├── App.jsx             ← los datos, los imports y la vista
├── index.css
└── main.jsx
```

Cada archivo termina en `export default Componente;` y `App.jsx` lo trae con
`import Header from "./components/Header.jsx";`. El `./` es obligatorio (sin él Vite busca un
paquete en `node_modules`) y la extensión se escribe completa. No hay `import React`: el
compilador inserta `react/jsx-dev-runtime` por su cuenta (runtime automático de JSX).

Ejecutar: `cd heladeria && npm install && npm run dev`.

## Practica

> Saca `Aviso` a su propio archivo en `components/`. Expórtalo e impórtalo donde lo uses.
> Después, en `Header.jsx`, cambia `export default Header` por `export const Header`, guarda y
> lee el error. Arréglalo de las dos formas posibles y quédate con la primera.

**Aviso a su archivo:** hecho, `src/components/Aviso.jsx` con `export default Aviso;`, importado
en `App.jsx`, que es donde se usa (envolviendo la tarjeta dentro de `Menu`). La pantalla y el DOM
no cambian.

**La prueba con `export const Header`** (reproducida con el servidor de desarrollo): la página
queda en blanco y la consola dice

```
Uncaught SyntaxError: The requested module '/src/components/Header.jsx' does not provide an export named 'default'
```

El mensaje es literal: `App.jsx` pide la exportación por defecto y el archivo ya solo ofrece una
con nombre. Las dos formas de arreglarlo:

```jsx
// 1) Volver a la exportación por defecto  ← la que se queda
const Header = () => <h1>La Heladería</h1>;
export default Header;
// App.jsx: import Header from "./components/Header.jsx";

// 2) Dejar la exportación con nombre y pedirla entre llaves
export const Header = () => <h1>La Heladería</h1>;
// App.jsx: import { Header } from "./components/Header.jsx";
```

Se queda la primera: cada archivo ofrece un componente y solo uno, que es justo lo que expresa
`export default`.

**¿Por qué el orden de los `import` no coincide con el árbol de componentes?** Porque responden a
preguntas distintas: el `import` dice *de dónde sale* una pieza (todas se importan en `App.jsx`,
al mismo nivel); el JSX dice *dónde acaba puesta*. `MenuItem` se importa en `App.jsx`, pero en el
árbol cuelga de `Aviso`, que cuelga de `Menu`, porque va escrito entre sus etiquetas.
