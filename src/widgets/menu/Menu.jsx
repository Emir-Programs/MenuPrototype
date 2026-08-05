import { categories } from "../../features/menu-data/categories";
import { menuItems } from "../../features/menu-data/menuItems";
import "./menu.scss";

export default function Menu({ activeId }) {
  const items = menuItems[activeId] || [];
  const title = categories.find((c) => c.id === activeId)?.name || "";

  return (
    <main className="menu">
      <h1 className="menu__title">{title}</h1>

      {items.length === 0 ? (
        <p className="menu__empty">Скоро здесь появятся товары.</p>
      ) : (
        <div className="menu__grid">
          {items.map((item) => (
            <div className="menu__card" key={item.id}>
              <img src={item.img} alt={item.name} className="menu__card-img" />
              <div className="menu__card-info">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <button className="menu__price-btn">{item.price}</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}