function Header({ language, setLanguage }) {
  return (
    <header className="header">
      <img src={`${import.meta.env.BASE_URL}title.png`} alt="Stats Logo" />
      <h1 style={{ flex: 1 }}>Stats – Traffic Collision Dashboard</h1>
      <select value={language} onChange={(e) => setLanguage(e.target.value)} className="lang-select">
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </header>
  );
}

export default Header;
