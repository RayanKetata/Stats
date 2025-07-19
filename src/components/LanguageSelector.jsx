function LanguageSelector({ language, setLanguage }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label>{language === "en" ? "Language" : "Langue"}: </label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
