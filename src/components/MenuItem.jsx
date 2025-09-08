function MenuItem({ title, ingredient_list, description}) {
  return (
    <div className="menu-item">
      <h2 className="menu-item-title">{title}</h2>
      <hr className="menu-item-underline" />
      <p className="menu-item-description">{description}</p>
      <p className="menu-item-ingredient-list">{ingredient_list}</p>
    </div>
  );
}

export default MenuItem;