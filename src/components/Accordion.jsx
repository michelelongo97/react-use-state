import { useState } from "react";

export default function Accordion({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className="accordion">
      <div className={`accordion_title ${isOpen ? "active" : ""}`}>
        <h3>{title}</h3>
        <button className="accordion_btn" onClick={toggle}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <div>{description}</div>}
    </div>
  );
}
