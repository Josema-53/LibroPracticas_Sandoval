import { useId } from "react";

const Panel = ({ title, children }) => {
  const titleId = useId();

  return (
    <section className="panel" aria-labelledby={titleId}>
      <h2 id={titleId}>{title}</h2>
      {children}
    </section>
  );
};

export default Panel;
