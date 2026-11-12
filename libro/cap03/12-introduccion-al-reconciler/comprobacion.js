// Pegar en la consola del navegador con la aplicación abierta (npm run dev en libro/heladeria),
// ANTES de pulsar el botón. Practica 03-12: además del <article> y del párrafo de existencias,
// se guarda una referencia al <h3> con el nombre del sabor.
const antes = document.querySelector("article");
const p = antes.querySelector(".menu-item-stock");
const h3 = antes.querySelector("h3");

document.querySelector("article button").click();
await new Promise((r) => setTimeout(r, 400));

({
  mismoArticle: document.querySelector("article") === antes,
  mismoParrafo: document.querySelector(".menu-item-stock") === p,
  mismoH3: document.querySelector("article h3") === h3,
  textoAhora: p.textContent,
});
