import Cards from "./Cards.jsx";
import { features } from "./data.jsx";
import "./Sections.css";

export default function Sections() {
  return (
    <div className="sections-container">
      {features.map((item, index) => (
        <Cards
          key={index}
          icon={item.icon}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}