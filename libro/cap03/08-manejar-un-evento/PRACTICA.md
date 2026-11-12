# 03-08 · Manejar un evento en un elemento

En `heladeria/src/components/MenuItem.jsx` la tarjeta gana un botón. `MenuItem` pasa a tener
cuerpo (`=> { … return (…) }`) para poder declarar dentro el manejador, que necesita las props:

```jsx
const handleSoldOut = () => {
  console.log(`Se marcó como agotado: ${menuItem.iceCream.name}`);
};

<button type="button" onClick={handleSoldOut}>Marcar como agotado</button>
```

- `onClick` en **camelCase** (el DOM dice `onclick`; React dice `onClick`).
- Se pasa la función **sin paréntesis**: React la llama cuando hay clic.
- `type="button"` para que no envíe un formulario cuando la tarjeta esté dentro de uno (cap. 05).
- En Elements el `<button>` no tiene ningún atributo `onclick`: React registra el manejador por
  su cuenta y le entrega un *evento sintético*.

## Practica

> Añade un segundo botón, «Ver ficha», con su propio manejador que imprima el id del ítem.
> Después cambia `onClick` por `onDoubleClick` y pulsa una vez, luego dos rápido. Y pon un
> `console.log("render")` en el cuerpo de `MenuItem`, fuera del manejador, recarga y cuenta
> cuántas veces sale antes de que toques nada.

**Segundo botón** (queda en el código):

```jsx
const handleViewDetails = () => {
  console.log(`Ver ficha del ítem ${menuItem.id}`);
};

<button type="button" onClick={handleViewDetails}>Ver ficha</button>
```

Resultado comprobado en el navegador (clic, clic, clic en «Ver ficha»):

```
Se marcó como agotado: Mora silvestre
Se marcó como agotado: Mora silvestre
Ver ficha del ítem 1
```

Los dos botones conviven sin estorbarse: cada uno tiene su función y corre una vez por clic.

**Con `onDoubleClick`** (prueba temporal, no se dejó puesta): un clic simple no imprime nada;
un doble clic rápido imprime una vez `Se marcó como agotado: Mora silvestre`. El manejador
responde al evento que se le enganchó y a ningún otro. (Y para teclado es peor: no hay forma de
hacer «doble clic» con Intro, por eso las acciones van en `onClick`.)

**Con `console.log("render")`** (prueba temporal): al cargar, sin tocar nada, sale **dos veces**.
Es `<StrictMode>`, que en desarrollo llama dos veces a cada componente para comprobar que es puro.
Y al pulsar el botón **no** vuelve a salir: pulsar ejecuta el manejador, no renderiza.

- *Renderizar* = ejecutar el componente para saber qué vista devuelve; lo decide React y puede
  repetirlo.
- *Manejar un evento* = ejecutar tu función porque el usuario hizo algo; una vez por acción.
