# 02-10 · Interpolar valores en JSX

`index.html`: los textos de la tarjeta salen del objeto `menuItem` (con la forma que tendrán los
datos del servidor: el sabor anidado en `iceCream`). Las llaves `{ }` marcan dónde termina el
JSX y empieza JavaScript, y valen igual en el contenido (`{menuItem.description}`) que en un
prop (`src={menuItem.iceCream.imagePath}`). La imagen `images/mora.svg` es el marcador de
posición del libro y lleva `alt=""` porque el nombre ya está en el `<h2>`.

| Entre llaves | Se renderiza |
|---|---|
| `"Mora silvestre"`, `1.5`, `0` | se ven |
| `true`, `false`, `null`, `undefined` | nada |
| `{menuItem}` (el objeto entero) | error: *Objects are not valid as a React child* |

## Practica

> Añade el precio a la tarjeta. Va en el ítem —no dentro de `iceCream`— y vale `1.5`.
> Ponlo en un `<p>` debajo de la descripción, interpolado. ¿Qué habría que hacer para que
> dijera «$1,50» en vez de «1.5»?

Hecho en `index.html`: `price: 1.5` en el objeto y
`<p className="menu-item-price">{menuItem.price}</p>`. En pantalla aparece **1.5**: React
muestra el número tal cual, sin símbolo de moneda y con punto decimal.

**Respuesta:** hay que **dar formato al valor antes de mostrarlo**, con una función que reciba
el número y devuelva la cadena, y llamarla dentro de las llaves (una llamada es una expresión,
así que cabe). JavaScript ya trae lo necesario, `Intl.NumberFormat` con la región de Ecuador y
la moneda USD:

```js
const formatPrice = (price) =>
  new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD" }).format(price);
// {formatPrice(menuItem.price)}  →  "$1,50"
```

(Se aplica en la sección siguiente, 02-11.)
