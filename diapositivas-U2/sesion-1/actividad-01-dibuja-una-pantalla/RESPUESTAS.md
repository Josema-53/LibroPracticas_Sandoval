# Actividad 1 · Dibuja una pantalla en recuadros (02-01 · 10 min)

**Aplicación elegida:** Spotify (versión web), pantalla de inicio.

```
┌───────────────────────────────────────────────────────────────────────┐
│ CABECERA: ← →  · [Inicio] · BUSCADOR "¿Qué quieres reproducir?" · avatar │
├───────────────┬───────────────────────────────────────────────────────┤
│ TU BIBLIOTECA │ FILTROS: [Todo] [Música] [Podcasts]                    │
│ ┌───────────┐ ├───────────────────────────────────────────────────────┤
│ │ ítem lista│ │ SECCIÓN "Hecho para ti"                               │
│ ├───────────┤ │ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐     │
│ │ ítem lista│ │ │TARJETA│ │TARJETA│ │TARJETA│ │TARJETA│ │TARJETA│     │
│ ├───────────┤ │ └───────┘ └───────┘ └───────┘ └───────┘ └───────┘     │
│ │ ítem lista│ │ SECCIÓN "Escuchado recientemente"                     │
│ └───────────┘ │ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐     │
│   (se repite) │ │TARJETA│ │TARJETA│ │TARJETA│ │TARJETA│ │TARJETA│     │
├───────────────┴───────────────────────────────────────────────────────┤
│ PIE / REPRODUCTOR: canción actual · ⏮ ⏯ ⏭ · barra de progreso · volumen   │
└───────────────────────────────────────────────────────────────────────┘
```

| Recuadro | ¿Se repite? | Datos que necesita |
|---|---|---|
| Cabecera | No | Usuario (avatar) |
| Buscador | No | Texto escrito |
| Ítem de la biblioteca | **Sí** (decenas) | Portada, nombre de la lista, tipo, autor |
| Filtros | Sus botones sí (3) | Filtro seleccionado |
| Sección | **Sí** (varias) | Título de la sección, lista de tarjetas |
| Tarjeta (álbum/lista) | **Sí** (muchas por sección) | Portada, título, descripción |
| Reproductor | No | Canción actual, ¿está sonando?, progreso, volumen |

## Verifica
- [x] Cada recuadro tiene nombre.
- [x] Los repetidos están marcados (ítem de biblioteca, sección, tarjeta, botón de filtro).
- [x] Hay un dato que cambia y sé dónde vive.

**Dato que cambia al interactuar:** la *canción que está sonando* (y si está en pausa). Al pulsar
una tarjeta cambia lo que muestra el reproductor y la tarjeta queda marcada como «sonando». Como lo
necesitan a la vez las tarjetas y el reproductor, vive en el recuadro que contiene a los dos: la
aplicación entera.

## Responde
Papel guardado: en la actividad 12 se convierte en árbol de componentes.
