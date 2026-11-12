# 03-11 · Construir componentes reutilizables

`Menu` no sabía nada del menú… salvo una cadena: «Sabores de hoy», escrita dentro. Criterio: **si
dentro de un componente aparece el nombre de su caso de uso, no es reutilizable.** El título pasa
a ser una prop de configuración, el `id` escrito a mano (`menu-title`) se sustituye por `useId`
(con dos paneles habría dos `id` iguales y los dos `aria-labelledby` apuntarían al primero), y el
componente se renombra por lo que hace: **`Panel`**.

`heladeria/src/components/Panel.jsx`:

```jsx
import { useId } from "react";

const Panel = ({ title, children }) => {
  const titleId = useId();

  return (
    <section className="panel" aria-labelledby={titleId}>
      <h2 id={titleId}>{title}</h2>
      {children}
    </section>
  );
};
```

En `App.jsx`: `<Panel title="Sabores de hoy">…</Panel>`. Esa línea es toda la API del componente.
Comprobado en el navegador: `<section class="panel" aria-labelledby="_r_0_"><h2 id="_r_0_">`.

Forma funcional del setter, para cuando el valor nuevo depende del anterior y hay varias
actualizaciones seguidas: `setMenuItem((item) => ({ ...item, inStock: false }))`.

## Practica

> `MenuItem` tiene el texto «Marcar como agotado» escrito dentro, igual que `Panel` tenía el suyo.
> ¿Eso lo hace menos reutilizable? Justifícalo con el criterio de la sección. Después mira
> `Header`: ¿lo generalizarías? Fíjate en cuántas veces va a aparecer en la aplicación.

**«Marcar como agotado» en `MenuItem`: no lo hace menos reutilizable.** El criterio habla del
nombre del *caso de uso* (dónde se coloca el componente: «Sabores de hoy» era el caso de uso de
ese panel). «Marcar como agotado» no describe dónde se usa la tarjeta, sino **lo que hace** su
botón: es parte de la tarjeta igual que el formato del precio. La tarjeta se usa siempre para lo
mismo —mostrar un ítem del menú y marcarlo como agotado—, en la lista o en cualquier otra pantalla,
así que el texto no le estorba. Si algún día el mismo `MenuItem` tuviera que ofrecer otra acción
(«Reponer», por ejemplo), ahí sí convendría pasar el texto por prop; hoy sería generalizar de más.
(Su único problema real es otro: con varias tarjetas, todos los botones se llaman igual para un
lector de pantalla; se resuelve con `aria-describedby` en «El prop key».)

**`Header`: no lo generalizaría.** Devuelve el `<h1>` con el nombre de la heladería, y ese
encabezado aparece **una sola vez por pantalla y siempre igual** en toda la aplicación (menú,
edición, alta). Ya se reutiliza tal cual en las tres pantallas; convertir «La Heladería» en una
prop `title` añadiría una prop que todos pasarían con el mismo valor. Es el error «generalizar de
más»: un componente que no se va a usar con contenidos distintos no gana nada volviéndose
configurable. (La prop `avisos` que recibe desde la práctica de 03-10 es un *dato*, no una
configuración.)
