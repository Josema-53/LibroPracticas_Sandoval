# 03-04 · Pasar props a un componente

`index.html`: la tarjeta pasa a ser el componente `MenuItem`, y el sabor **entra por props**
(`<MenuItem menuItem={menuItem} />`) en vez de leerse del ámbito. React mete todos los atributos
en un objeto y se lo pasa como primer argumento; con desestructuración en el parámetro
(`({ menuItem })`) se lee directamente. `formatPrice` se queda al lado porque solo la usa la
tarjeta. Los props son de **solo lectura**: tocarlos sería la segunda fuga de 03-02.

## Practica

> Escribe una segunda versión, `MenuItemPlano`, que reciba cuatro props sueltas: `name`,
> `description`, `price` e `inStock`. Colócala debajo de la tarjeta actual, pasándole los datos
> del mismo sabor. Cuando el menú venga de una lista de veinte sabores, ¿cuál de las dos formas te
> va a dar menos trabajo?

Hecho en `index.html`. Las dos tarjetas se ven iguales (la plana sin imagen, porque no se le pasó
`imagePath`) y ninguna lee `menuItem` del ámbito: las dos reciben todo por props.

```jsx
<MenuItem menuItem={menuItem} />

<MenuItemPlano
  name={menuItem.iceCream.name}
  description={menuItem.description}
  price={menuItem.price}
  inStock={menuItem.inStock}
/>
```

**Respuesta:** con veinte sabores da menos trabajo **`MenuItem`, la que recibe el objeto entero**:

- Cada uso es una sola prop (`menuItem={item}`), así que al recorrer la lista cada tarjeta es una
  línea. Con la plana hay que repetir cuatro (o más) atributos por sabor y saber cómo se llama cada
  campo dentro del objeto (`item.iceCream.name`…).
- Si mañana la tarjeta necesita un dato más (la imagen, el `id` para el `aria-labelledby`), con el
  objeto solo cambia el componente; con las props sueltas hay que tocar también cada sitio que la
  usa. De hecho, `MenuItemPlano` ya muestra el problema: como no recibe el `id`, su `id` del `<h2>`
  quedó fijo y dejaría de ser único con dos tarjetas.
- La plana tiene una ventaja: su API dice exactamente qué necesita y no depende de la forma del
  objeto del servidor. Pero para un menú que llega como lista de objetos, el objeto gana.
