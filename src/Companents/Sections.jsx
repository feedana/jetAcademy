import Cards from "./Companents/Cards";
import { features } from "./Companents/data.jsx";
import "./Companents/Sections.css";

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
