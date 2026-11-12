# Actividad 16 · Comprueba que un contenedor acepta cualquier contenido (03-05 · 10 min)

`Menu` coloca `{children}` debajo de su `<h2>`; la tarjeta usa ahora `<h3>`.

| Archivo | Entre `<Menu>` y `</Menu>` | Resultado |
|---|---|---|
| `practica-dos-tarjetas.html` | dos `<MenuItem />` | Las dos tarjetas dentro de la misma `<section>` sin tocar `Menu` |
| `practica-menu-vacio.html` | nada (`<Menu></Menu>`) | Queda solo el título «Sabores de hoy», sin errores |
| `index.html` | `<Aviso><MenuItem /></Aviso>` | La tarjeta dentro del `<aside>`, debajo del horario |

`Aviso` como contenedor:

```jsx
const Aviso = ({ children }) => (
  <aside className="aviso">
    <p>Abierto de lunes a domingo, de 10:00 a 20:00.</p>
    {children}
  </aside>
);
```

## Verifica
- [x] Con `Menu` vacío queda el título.
- [x] La tarjeta aparece dentro del `<aside>` (Elements: `section > h2 + aside > p + article`).
- [x] Las tarjetas usan `<h3>` (cuelgan del `<h2>` «Sabores de hoy»).

## Responde
**¿Por qué `Menu` no necesita saber qué hay dentro de `Aviso`?** Porque recibe el contenido **ya
creado**: `<Aviso>…</Aviso>` (con la tarjeta dentro) se construye en la vista antes de que `Menu` se
ejecute, y `Menu` solo lo coloca donde está `{children}`. No lee sus datos ni decide qué lleva. Así
un contenedor puede contener a otro sin que ninguno se entere de lo que lleva el otro.
