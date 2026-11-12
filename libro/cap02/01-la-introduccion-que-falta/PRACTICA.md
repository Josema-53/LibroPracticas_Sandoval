# 02-01 · La introducción que falta

Sección sin código. La práctica se hace en papel; aquí queda pasada a limpio.

## Practica

> Elige una aplicación web que uses a diario y abre una sola de sus pantallas. Dibuja los
> recuadros que la componen, marca cuáles se repiten, qué datos necesitaría cada uno y en
> cuál vive el dato que cambia cuando interactúas.

**Aplicación elegida:** YouTube, pantalla de inicio (escritorio).

```
┌──────────────────────────────────────────────────────────────────┐
│ CABECERA: logo · buscador · botón micrófono · notificaciones · avatar │
├──────────────┬───────────────────────────────────────────────────┤
│ MENÚ LATERAL │ BARRA DE CATEGORÍAS: [Todo] [Música] [Juegos] ... │
│  · Inicio    ├───────────────────────────────────────────────────┤
│  · Shorts    │ LISTADO DE VIDEOS                                 │
│  · Suscrip.  │ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  · Tú        │ │ TARJETA │ │ TARJETA │ │ TARJETA │ │ TARJETA │   │
│  (ítems que  │ │ miniat. │ │ miniat. │ │ miniat. │ │ miniat. │   │
│   se repiten)│ │ título  │ │ título  │ │ título  │ │ título  │   │
│              │ │ canal   │ │ canal   │ │ canal   │ │ canal   │   │
│              │ └─────────┘ └─────────┘ └─────────┘ └─────────┘   │
│              │ ... (se repite muchas filas)                      │
└──────────────┴───────────────────────────────────────────────────┘
```

| Recuadro | ¿Se repite? | Datos que necesita |
|---|---|---|
| Cabecera | No (aparece igual en todas las pantallas) | Usuario conectado (avatar), nº de notificaciones |
| Buscador | No | Texto escrito |
| Menú lateral | Sus ítems sí (≈ 10) | Nombre e icono de cada sección, sección activa |
| Barra de categorías | Sus botones sí (≈ 15) | Lista de categorías, categoría seleccionada |
| Tarjeta de video | **Sí, decenas** | Miniatura, título, canal, vistas, fecha, duración |

**Dato que cambia al interactuar:** la *categoría seleccionada*. Al pulsar "Música" cambia
qué botón está marcado y qué tarjetas muestra el listado. Ese dato no puede vivir en una
tarjeta ni en un botón: vive en el recuadro que contiene a la vez la barra de categorías y el
listado (la zona de contenido), porque los dos lo necesitan.

**Respuesta en una frase:** React se ocupa solo de convertir esos datos en vista y de
mantenerla sincronizada; cuando cambia el state (la categoría), React vuelve a renderizar.
