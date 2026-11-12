# Actividad 8 · Traduce este marcado a JSX antes de ejecutarlo (02-08 · 5 min)

Marcado original:

```html
<img src="mora.svg" alt="Helado de mora silvestre" class="photo">
<label for="description">Descripción</label>
<input id="description" maxlength="120" readonly class="field">
```

Traducción (hecha en papel y luego pegada en `index.html`, constante `practice`):

```jsx
<>
  <img src="mora.svg" alt="Helado de mora silvestre" className="photo" />
  <label htmlFor="description">Descripción</label>
  <input id="description" maxLength="120" readOnly className="field" />
</>
```

## Verifica
- [x] **Cero avisos de React** en la consola.
- [x] `<img />` e `<input />` se cierran con `/>`.
- [x] La imagen rota no cuenta: `mora.svg` aún no existe en esta carpeta (el único error es del
  navegador, `ERR_FILE_NOT_FOUND`).

## Responde
**¿Cuántas cosas cambiaste?** **6**: `class`→`className` (×2), `for`→`htmlFor`,
`maxlength`→`maxLength`, `readonly`→`readOnly`, y cerrar las dos etiquetas vacías (`<img />`,
`<input />`). Además, al ser hermanos, se envolvieron en un fragmento.

**¿Cuál no da aviso pero sí cambia el comportamiento?** `readonly`. Si se deja en minúscula, React
lo reporta con el mismo aviso que los demás (`Invalid DOM property 'readonly'. Did you mean
'readOnly'?`), pero mientras `for`, `maxlength` y `class` llegan al DOM y funcionan igual,
**`readonly` desaparece**: el campo se ve idéntico y deja escribir. Se comprueba con
`html-pegado-sin-traducir.html`, que reproduce los cuatro avisos.
