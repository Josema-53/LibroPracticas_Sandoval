# 03-01 · Introducción a los componentes

Sección sin código: dónde se corta una pantalla, qué lleva dentro cada pieza (devuelve vista,
lleva su lógica, se comunica, existe por instancia) y por qué el resultado siempre es un árbol.

Árbol de la pantalla del menú de La Heladería:

```
App                    ← componente raíz
├── Header             ← encabezado (igual en las tres pantallas)
├── Menu               ← lista del menú
│   ├── MenuItem       ← tarjeta de sabor (se repite)
│   ├── MenuItem
│   └── MenuItem
└── Footer             ← pie
```

## Practica

> Recupera el papel de «La introducción que falta» y conviértelo en árbol: cuál contiene a cuál,
> cuál se repite y cuántas veces, y qué dato necesita cada uno. Marca los que aparecerían igual
> en otra pantalla de esa misma aplicación.

Pantalla del papel de 02-01: **YouTube, inicio**.

```
App
├── Header ★                         datos: usuario (avatar), nº de notificaciones
│   ├── Logo ★                       datos: —
│   ├── SearchBar ★                  datos: texto buscado
│   └── UserMenu ★                   datos: usuario
├── Sidebar ★                        datos: sección activa
│   └── SidebarItem  ×≈10            datos: nombre, icono, ¿activo?
└── HomePage
    ├── CategoryBar                  datos: lista de categorías, categoría seleccionada
    │   └── CategoryChip ×≈15        datos: nombre, ¿seleccionada?
    └── VideoGrid                    datos: lista de videos
        └── VideoCard ×decenas       datos: miniatura, título, canal, vistas, fecha, duración
```

★ = aparece igual en otras pantallas de la aplicación (ver video, suscripciones, historial…).

- **Raíz:** `App`. **Hojas que se repiten:** `VideoCard` (decenas), `CategoryChip` (≈15),
  `SidebarItem` (≈10).
- **Dónde vive el dato que cambia (la categoría seleccionada):** en `HomePage`, el
  antepasado común de `CategoryBar` (que marca el chip) y de `VideoGrid` (que filtra los
  videos). Baja a los dos por props.
- Comparado con el papel de 02-01: los recuadros eran los mismos; lo nuevo es que ahora tienen
  nombre de componente, jerarquía y un dato asignado a cada uno.
