# 03-09 · Agregar state con el hook useState

Cambiar `menuItem.inStock = false` a mano no mueve la pantalla: React no vigila tus objetos (y
además es tocar una prop). Hace falta un dato que React recuerde **y** una forma de avisarle: eso
es `useState`. En `heladeria/src/components/MenuItem.jsx`:

```jsx
import { useState } from "react";

const [soldOut, setSoldOut] = useState(!menuItem.inStock);

const handleSoldOut = () => {
  setSoldOut(true);
};

<p className="menu-item-stock" aria-live="polite">
  {soldOut ? "Agotado" : "Disponible hoy"}
</p>

<button type="button" onClick={handleSoldOut} disabled={soldOut}>
  Marcar como agotado
</button>
```

El setter no toca el DOM: pide a React que vuelva a llamar al componente, y en esa llamada
`useState` devuelve el valor nuevo. Comprobado en el navegador: tras el clic la tarjeta dice
**«Agotado»** y el botón queda deshabilitado. La línea de existencias lleva
`aria-live="polite"` para que un lector de pantalla anuncie el cambio.

## Practica

> Añade un segundo state a la tarjeta, `veces`, que cuente cuántas veces se ha pulsado el botón,
> e imprímelo en un párrafo. Después mete el segundo `useState` dentro de un `if`, guarda y
> ejecuta `npm run lint`.

**Segundo state** (queda en el código):

```jsx
const [veces, setVeces] = useState(0);

const handleSoldOut = () => {
  setSoldOut(true);
  setVeces(veces + 1);
};

<p className="menu-item-clicks">Veces pulsado: {veces}</p>
```

Se comprueban las dos cosas: un componente puede tener varios state independientes, y
`useState(0)` se usa igual que `useState(false)`. Tras pulsar, la tarjeta muestra
«Agotado · Veces pulsado: 1». No pasa de 1 porque el botón se deshabilita en el primer clic: con
este botón no hay segunda pulsación posible.

**Hook dentro de un `if`** (prueba temporal, revertida):

```jsx
let veces = 0;
let setVeces = () => {};
if (menuItem.inStock) {
  [veces, setVeces] = useState(0);
}
```

La página **sigue funcionando** en el navegador (la condición no cambia), pero `npm run lint` lo
caza:

```
src/components/MenuItem.jsx:15:25: error react-hooks(rules-of-hooks): React Hook "useState" is
called conditionally. React Hooks must be called in the exact same order in every component
render. help: Move the Hook call before the condition, or call it unconditionally and branch
inside the Hook/effect instead.
```

Arreglo: volver a llamar a `useState(0)` siempre, en el nivel superior del componente. React
empareja los hooks **por orden**, no por nombre; si uno se salta, los de detrás reciben el valor
de otro. Costumbre que queda: ejecutar `npm run lint` cuando algo raro pase.
