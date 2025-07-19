import { useState } from "react";
import LineChartAccidents from "./components/LineChartAccidents";
import LanguageSelector from "./components/LanguageSelector";
import { en } from "./locales/en";
import { fr } from "./locales/fr";
import BarChartUsers from "./components/BarChartUsers";
import DataTableAccidents from "./components/DataTableAccidents";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  const [language, setLanguage] = useState("en");
  const labels = language === "en" ? en : fr;

  return (
    <div style={{ padding: 20 }}>
      <Header language={language} setLanguage={setLanguage}/>
      <h1>Stats Dashboard</h1>
      <div className="intro">
         <p>{language === "en"
          ? "This bilingual interactive dashboard presents key road collision statistics in Canada between 2003 and 2022. Explore data on fatalities, injuries, and user types using dynamic visualizations."
          : "Ce tableau de bord interactif bilingue présente les principales statistiques sur les collisions routières au Canada entre 2003 et 2022. Explorez les données sur les décès, les blessures et les types d'usagers à l'aide de visualisations dynamiques."}</p>
      </div>
      <DataTableAccidents labels={labels} />
      <LineChartAccidents labels={labels} />
      <div className="intro">
        <p>
          {language === "en"
          ? "This chart compares the number of fatalities by user type, such as drivers, pedestrians, and cyclists. Use the dropdown to switch between 2021 and 2022."
          : "Ce graphique compare le nombre de décès selon le type d’usager, comme les conducteurs, piétons et cyclistes. Utilisez le menu déroulant pour basculer entre 2021 et 2022."}
        </p>
      </div>
      <BarChartUsers labels={labels} />
      <Footer />
    </div>
  );
}

export default App;
