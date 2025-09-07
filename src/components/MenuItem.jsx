function MenuItem({ title, description }) {
  return (
    <div className="menu-item">
      <h2 className="menu-item-title">{title}</h2>
      <hr className="menu-item-underline" />
      <p className="menu-item-description">{description}</p>
    </div>
  );
}

export default MenuItem;