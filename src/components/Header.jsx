import headerImage from '../assets/header-image.png';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-line">
          <span className="header-line-dot">•</span>
        </div>
        <h1 className="header-title"></h1>
        <p className="header-subtitle"></p>
        <div className="header-line">
          <span className="header-line-dot">•</span>
        </div>
        <img src={headerImage} alt="Header image" className="header-image" />
      </div>
    </header>
  );
}

export default Header;