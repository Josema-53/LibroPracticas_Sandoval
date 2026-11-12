# 02-03 · Arrancar React dentro de un HTML

`index.html` es la página de la sección: el mismo HTML de 02-02 más el `<script type="module">`
que trae `react` y `react-dom` desde esm.sh. En la consola (F12) imprime:

```
React 19.2.0
createRoot es una function
```

## Practica

> Cambia `19.2.0` por `18.3.1` en las dos direcciones, guarda y recarga. Después prueba una
> versión que no exista, como `19.99.0`. ¿En cuál de los dos casos falla la página, y cómo te
> enteras?

| Archivo | Versión | Qué imprime la consola |
|---|---|---|
| `index.html` | 19.2.0 | `React 19.2.0` · `createRoot es una function` |
| `practica-react-18.html` | 18.3.1 | `React 18.3.1` · `createRoot es una function` |
| `practica-version-inexistente.html` | 19.99.0 | Ninguno de los dos `console.log`. En su lugar, un error rojo de carga del módulo y, en la pestaña **Network**, la petición a `esm.sh/react@19.99.0` con estado **404** |

**¿En cuál falla?** Solo con `19.99.0`.

- Con **18.3.1** no falla nada: esa versión existe en npm y además ya tenía `react-dom/client`
  con `createRoot` (llegó en React 18). Solo cambia el número que se imprime.
- Con **19.99.0** la CDN responde 404. Como un módulo no se ejecuta hasta que *todos* sus
  `import` se han descargado, el bloque entero no corre: no sale ni el primer `console.log`.

**¿Cómo te enteras?** La página se ve igual en los tres casos (el contenido está escrito en el
HTML), así que la pantalla no avisa. Te enteras por la **consola** (error de carga y ausencia de
los dos mensajes) y, con certeza, por la pestaña **Network**, que muestra el 404 de esm.sh.
Moraleja de la sección: «no aparece en la consola» y «no está cargado» son cosas distintas, y
se comprueba mirando, no suponiendo.
