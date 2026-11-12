# Actividad 12 · Convierte tu dibujo de la sesión 1 en un árbol (03-01 · 10 min)

## 1. El papel de la actividad 1 (Spotify, inicio) como árbol

```
App                                   ← componente raíz
├── Header ★                          datos: usuario
│   ├── NavButtons ★                  datos: historial de navegación
│   ├── SearchBar ★                   datos: texto buscado
│   └── UserMenu ★                    datos: usuario (avatar)
├── Library ★                         datos: listas del usuario
│   └── LibraryItem  ×decenas         datos: portada, nombre, tipo, autor
├── HomePage
│   ├── FilterBar                     datos: filtro seleccionado
│   │   └── FilterChip ×3             datos: nombre, ¿seleccionado?
│   └── Shelf  ×varias                datos: título de la sección, tarjetas
│       └── AlbumCard ×muchas         datos: portada, título, descripción
└── Player ★                          datos: canción actual, ¿suena?, progreso, volumen
```

★ = aparece igual en otras pantallas de Spotify (buscar, una lista, un artista…).

## Verifica
- [x] Hay un componente raíz: `App`.
- [x] Las hojas son lo que se repite: `LibraryItem`, `FilterChip`, `AlbumCard` (y `Shelf`, que se
  repite con distinto contenido).
- [x] Cada nodo tiene su dato.
- El dato que cambia (la canción que suena) vive en `App`, el antepasado común de `AlbumCard`
  (que la inicia) y `Player` (que la muestra).

## 2. Responde: el mismo árbol con una pantalla de mi emprendimiento

**Emprendimiento:** tienda de bebidas (energizantes, tés y otras bebidas). Pantalla: **catálogo**.

```
┌──────────────────────────────────────────────┐
│ CABECERA: nombre de la tienda · lema         │
├──────────────────────────────────────────────┤
│ SECCIÓN "Energizantes"                       │
│  ┌──────────┐ ┌──────────┐                   │
│  │ TARJETA  │ │ TARJETA  │                   │
│  └──────────┘ └──────────┘                   │
│ SECCIÓN "Tés"                                │
│  ┌──────────┐ ┌──────────┐                   │
│  │ TARJETA  │ │ TARJETA  │                   │
│  └──────────┘ └──────────┘                   │
├──────────────────────────────────────────────┤
│ PIE: ciudad · horario · contacto             │
└──────────────────────────────────────────────┘
```

```
App
├── Header ★                datos: — (nombre y lema fijos)
├── Section  ×2 (Energizantes, Tés)     datos: título (+ children)
│   └── ProductCard ×2 por sección      datos: nombre, categoría, descripción,
│                                              tamaño, precio, ¿disponible?, imagen
└── Footer ★                datos: — (ciudad, horario)
```

★ = aparecería igual en otras pantallas (detalle de producto, carrito, contacto).

- Se repite: `ProductCard` (una por bebida) y `Section` (una por categoría).
- Componente raíz: `App`, que guarda la lista de productos y la reparte por props.

Este árbol es la base de la **tarea** (`sesion-4/tarea-emprendimiento-bebidas`).
