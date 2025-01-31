import languages from "../data/languages";

export default function AccordionList() {
  return (
    <div className="accordion-list">
      {languages.map((elm, index) => {
        return (
          <div className="accordion" key={index}>
            <div className="accordion_title">
              <h3>{elm.title}</h3>
              <button className="accordion_btn">+</button>
            </div>
            <div>{elm.description}</div>
          </div>
        );
      })}
    </div>
  );
}
