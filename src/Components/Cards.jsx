import "./Cards.css";

export default function Cards({ icon, title, text }) {
  return (
    <div className="card">
      <img src={icon} alt={title} className="icon-img" />
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
    </div>
  );
}