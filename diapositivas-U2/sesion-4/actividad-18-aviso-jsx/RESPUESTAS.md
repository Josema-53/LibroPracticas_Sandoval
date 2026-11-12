# Actividad 18 · Saca Aviso a su archivo y prueba la exportación con nombre (03-07 · 10 min)

```
heladeria/src/
├── components/
│   ├── Aviso.jsx      ← export default Aviso;
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Menu.jsx
│   └── MenuItem.jsx
├── App.jsx            ← import Aviso from "./components/Aviso.jsx";
├── index.css
└── main.jsx
```

## Pasos
1. `src/components/Aviso.jsx` con `export default Aviso;`.
2. Importado en `App.jsx`, que es donde se usa (envolviendo la tarjeta dentro de `Menu`).
3. En `Header.jsx`, `export const Header` (sin `export default`): la página queda en blanco y la
   consola dice (comprobado con el servidor de desarrollo):
   ```
   Uncaught SyntaxError: The requested module '/src/components/Header.jsx' does not provide an export named 'default'
   ```
4. Arreglado de las dos formas — volviendo a `export default Header` *o* dejando
   `export const Header` e importando con llaves `import { Header } from "./components/Header.jsx"` —
   y se dejó la primera.

## Verifica
- [x] Cinco componentes en `components/` (Aviso, Footer, Header, Menu, MenuItem) y `App.jsx`.
- [x] La pantalla y el DOM no cambian.
- [x] Las rutas tienen `./` y las mismas mayúsculas que los archivos (`npm run build` correcto).

## Responde
**¿Por qué el orden de los `import` no coincide con el árbol de componentes?** Porque el `import`
solo dice **de dónde sale** cada pieza (todas se importan en `App.jsx`, al mismo nivel), mientras
que el árbol lo decide el **JSX**, es decir, **dónde se coloca**: `MenuItem` se importa en `App.jsx`,
pero en el árbol cuelga de `Aviso` y este de `Menu`, porque va escrito entre sus etiquetas.
