import { categories } from "../../features/menu-data/categories";
import "./categories.scss";

export default function Categories({ activeId, onSelect }) {
  return (
    <aside className="categories">
      <div className="categories__search">
        <span>🔍</span>
        <input type="text" placeholder="Поиск" />
      </div>

      <ul className="categories__list">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className={`categories__item ${activeId === cat.id ? "categories__item--active" : ""}`}
            onClick={() => onSelect(cat.id)}
          >
            <span className="categories__icon">{cat.icon}</span>
            <span>{cat.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}