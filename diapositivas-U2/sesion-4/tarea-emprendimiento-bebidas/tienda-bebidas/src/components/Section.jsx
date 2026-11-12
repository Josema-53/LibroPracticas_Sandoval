import { useId } from "react";

// Contenedor reutilizable: aporta el envoltorio y el título,
// y coloca lo que le pongan dentro (children).
const Section = ({ title, children }) => {
  const titleId = useId();

  return (
    <section className="section" aria-labelledby={titleId}>
      <h2 id={titleId}>{title}</h2>
      <div className="section-grid">{children}</div>
    </section>
  );
};

export default Section;
