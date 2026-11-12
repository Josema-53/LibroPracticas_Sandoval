# Actividad 10 · Agrega el precio a la tarjeta (02-10 · 5 min)

En `index.html`:

```js
const menuItem = {
  id: 1,
  iceCream: { id: 3, name: "Mora silvestre", imagePath: "images/mora.svg" },
  price: 1.5,                     // en el ítem, fuera de iceCream
  description: "Mora de Ambato con un toque de limón.",
};
```

```jsx
<p className="menu-item-description">{menuItem.description}</p>
<p className="menu-item-price">{menuItem.price}</p>
```

## Verifica
- [x] El precio aparece como **1.5**.
- [x] La consola está limpia.

## Responde
**¿Qué habría que hacer para que diga «$1,50»?** Dar formato al número antes de mostrarlo: una
función que reciba el precio y devuelva la cadena, llamada dentro de las llaves (una llamada es una
expresión). Con `Intl.NumberFormat` de JavaScript, región `es-EC` y moneda `USD`:

```js
const formatPrice = (price) =>
  new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD" }).format(price);
// <p>{formatPrice(menuItem.price)}</p>  →  $1,50
```

Dos errores de la sección: `{menuItem}` (el objeto entero) da *Objects are not valid as a React
child*; y `className="{menuItem.id}"` no avisa ni interpola (comillas **o** llaves, nunca las dos).
