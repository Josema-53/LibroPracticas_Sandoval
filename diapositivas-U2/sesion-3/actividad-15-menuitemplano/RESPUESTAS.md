# Actividad 15 · Escribe MenuItemPlano con cuatro props sueltas (03-04 · 10 min)

`index.html`:

```jsx
const MenuItemPlano = ({ name, description, price, inStock }) => (
  <article className="menu-item" aria-labelledby="menu-item-plano-name">
    <h2 id="menu-item-plano-name">{name}</h2>
    <p className="menu-item-description">{description}</p>
    <p className="menu-item-price">{formatPrice(price)}</p>
    <p className="menu-item-stock">{inStock ? "Disponible hoy" : "Agotado"}</p>
  </article>
);

<MenuItem menuItem={menuItem} />
<MenuItemPlano
  name={menuItem.iceCream.name}
  description={menuItem.description}
  price={menuItem.price}
  inStock={menuItem.inStock}
/>
```

## Verifica
- [x] Las dos tarjetas se ven iguales (la plana sin imagen, porque no recibe `imagePath`).
- [x] Ninguna lee `menuItem` del ámbito: las dos reciben todo por props.

## Responde
**Con una lista de veinte sabores, ¿cuál de las dos formas te dará menos trabajo?** La de
**`MenuItem`, que recibe el objeto entero**. Cada tarjeta es una sola prop (`menuItem={item}`), así
que recorrer la lista es una línea por sabor; con la plana hay que repetir cuatro atributos por
tarjeta y saber dónde está cada campo dentro del objeto. Y si la tarjeta necesita un dato más, con
el objeto solo cambia el componente; con props sueltas, también cada sitio que la usa (de hecho a
`MenuItemPlano` ya le falta el `id`, por eso su `id` del `<h2>` quedó fijo y se repetiría).
