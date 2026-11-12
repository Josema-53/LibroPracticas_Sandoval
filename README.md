# Libro de prácticas — React (Unidad 2)

Prácticas de **Programación Integrativa de Componentes**, Unidad 2, con el libro
*React sin magia: del elemento a la aplicación accesible* (Galarza y Velez).

| Carpeta | Contenido |
|---|---|
| [`libro/`](libro/) | Todas las secciones de los capítulos 02 y 03 del libro, con su código y su ejercicio «Practica» resuelto (`PRACTICA.md` en cada sección) |
| [`diapositivas-U2/`](diapositivas-U2/) | Las 19 actividades en clase de las diapositivas U2 (tema 2.1) y la tarea del emprendimiento (tienda de bebidas) |

## Cómo abrir cada cosa

- **Páginas `.html`** (capítulo 02, 03-01 a 03-05 y sesiones 1–3 de las diapositivas): doble clic.
  Traen React 19.2.0 desde esm.sh y Babel desde unpkg, así que necesitan internet.
- **Proyectos de Vite** (desde 03-06, actividades 17–18 y la tarea): necesitan Node 22 o superior.
  ```bash
  cd <carpeta-del-proyecto>
  npm install
  npm run dev     # abre http://localhost:5173/
  ```
  `node_modules/` no se sube al repositorio: se reconstruye con `npm install`.
