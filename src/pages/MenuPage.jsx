import { useState } from "react";
import Categories from "../widgets/categories/Categories";
import Menu from "../widgets/menu/Menu";
import "./menuPage.scss";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("best");

  return (
    <div
      className="menu-page"
      style={{ display: "flex", gap: 32, padding: "24px 40px", alignItems: "flex-start" }}
    >
      <Categories activeId={activeCategory} onSelect={setActiveCategory} />
      <Menu activeId={activeCategory} />
    </div>
  );
}