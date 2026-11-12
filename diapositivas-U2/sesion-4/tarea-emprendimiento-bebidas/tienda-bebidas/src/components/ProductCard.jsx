const formatPrice = (price) =>
  new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
  }).format(price);

// La tarjeta recibe su dato por props y no lee nada de fuera: es una función pura.
const ProductCard = ({ product }) => (
  <article className="product-card" aria-labelledby={`product-${product.id}-name`}>
    <img src={product.imagePath} alt="" width="96" height="96" />
    <h3 id={`product-${product.id}-name`}>{product.name}</h3>
    <p className="product-description">{product.description}</p>
    <p className="product-size">{product.sizeMl} ml</p>
    <p className="product-price">{formatPrice(product.price)}</p>
    <p className={product.inStock ? "product-stock" : "product-stock product-stock--out"}>
      {product.inStock ? "Disponible" : "Agotado"}
    </p>
  </article>
);

export default ProductCard;
