# 03-10 · Los datos bajan, los eventos suben

El problema de 03-09 eran **dos verdades** sobre el mismo sabor (`menuItem.inStock` y el
`soldOut` de la tarjeta). Se resuelve preguntando *de quién es el dato*: el sabor no es de la
tarjeta, que solo lo muestra; es de `App`. El state **sube** a `App` y la tarjeta vuelve a ser
una función pura de sus props.

`heladeria/src/App.jsx`:

```jsx
const [menuItem, setMenuItem] = useState(menuItemInicial);

const handleSoldOut = () => {
  setMenuItem({ ...menuItem, inStock: false });   // objeto nuevo, no mutación
};

<MenuItem menuItem={menuItem} onSoldOut={handleSoldOut} />
```

`heladeria/src/components/MenuItem.jsx` ya no tiene `useState` ni manejador: recibe
`{ menuItem, onSoldOut }`. El dato **baja** por props; el aviso **sube** por una función
(`onAlgo` para la prop que dice qué pasó, `handleAlgo` para la función del padre que lo atiende).

> Los extras de la tarjeta en 03-08/03-09 («Ver ficha» y el contador `veces`) salen aquí, porque
> la tarjeta deja de tener state y manejadores propios. El contador renace en `App` en la práctica.

**Comprobado: mutar no funciona.** Con

```jsx
menuItem.inStock = false;   // muta el objeto que ya tenía
setMenuItem(menuItem);      // y se lo pasa al setter
```

al pulsar el botón la tarjeta **sigue diciendo «Disponible hoy»**: React recibe el mismo objeto,
lo compara con `Object.is`, ve que no cambió y no renderiza. Con el objeto nuevo
(`{ ...menuItem, inStock: false }`) la tarjeta pasa a «Agotado».

## Practica

> Añádele a `App` un segundo state, `avisos`, con el número de veces que se ha marcado algo como
> agotado, y muéstralo en el `Header`… que no lo recibe. Cuando lo tengas: ¿dónde tendría que
> vivir ese state si el aviso tuviera que verse también en el pie?

Hecho:

```jsx
// App.jsx
const [avisos, setAvisos] = useState(0);

const handleSoldOut = () => {
  setMenuItem({ ...menuItem, inStock: false });
  setAvisos(avisos + 1);
};

<Header avisos={avisos} />
```

```jsx
// components/Header.jsx
const Header = ({ avisos }) => (
  <>
    <h1>La Heladería</h1>
    <p className="header-avisos" aria-live="polite">
      Ítems marcados como agotados: {avisos}
    </p>
  </>
);
```

Para que el encabezado lo enseñe, el número tiene que **bajar** hasta él por props: `Header` no
puede leer el state de `App`. Comprobado: al pulsar, el encabezado pasa de 0 a **1** y la tarjeta
a «Agotado» con el mismo clic.

**¿Dónde viviría si también tuviera que verse en el pie?** En el mismo sitio, **`App`**. Un state
vive en el antepasado común más cercano de todos los componentes que lo necesitan; `Header` y
`Footer` son hermanos y su padre común es `App`. Bastaría con pasarlo también:
`<Footer avisos={avisos} />`. Si estuviera dentro de `Header`, el pie no podría enterarse, porque
los datos solo bajan.
