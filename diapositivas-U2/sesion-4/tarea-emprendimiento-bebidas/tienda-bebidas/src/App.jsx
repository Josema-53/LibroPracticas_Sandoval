import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Section from "./components/Section.jsx";
import ProductCard from "./components/ProductCard.jsx";

const products = {
  voltio: {
    id: 1,
    name: "Voltio Original",
    description: "Energizante con cafeína y taurina, sabor cítrico.",
    sizeMl: 473,
    price: 2.25,
    inStock: true,
    imagePath: "/images/lata.svg",
  },
  voltioZero: {
    id: 2,
    name: "Voltio Sin Azúcar",
    description: "La misma energía, cero azúcar y sabor a frutos rojos.",
    sizeMl: 473,
    price: 2.25,
    inStock: false,
    imagePath: "/images/lata.svg",
  },
  teVerde: {
    id: 3,
    name: "Té verde con limón",
    description: "Té verde frío, endulzado con panela y un toque de limón.",
    sizeMl: 500,
    price: 1.5,
    inStock: true,
    imagePath: "/images/botella-te.svg",
  },
  teManzanilla: {
    id: 4,
    name: "Té de manzanilla y miel",
    description: "Infusión fría de manzanilla, suave y sin cafeína.",
    sizeMl: 500,
    price: 1.4,
    inStock: true,
    imagePath: "/images/botella-te.svg",
  },
  aguaCoco: {
    id: 5,
    name: "Agua de coco",
    description: "Agua de coco natural, fría y sin azúcar añadida.",
    sizeMl: 330,
    price: 1.8,
    inStock: true,
    imagePath: "/images/vaso.svg",
  },
  limonada: {
    id: 6,
    name: "Limonada de hierbaluisa",
    description: "Limonada natural con hierbaluisa fresca.",
    sizeMl: 400,
    price: 1.75,
    inStock: true,
    imagePath: "/images/vaso.svg",
  },
};

const App = () => (
  <>
    <Header />

    <main>
      <Section title="Energizantes">
        <ProductCard product={products.voltio} />
        <ProductCard product={products.voltioZero} />
      </Section>

      <Section title="Tés">
        <ProductCard product={products.teVerde} />
        <ProductCard product={products.teManzanilla} />
      </Section>

      <Section title="Otras bebidas">
        <ProductCard product={products.aguaCoco} />
        <ProductCard product={products.limonada} />
      </Section>
    </main>

    <Footer />
  </>
);

export default App;
