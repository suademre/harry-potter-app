import React from "react";
import Header from "./components/header/Header";
import Card from "./components/main/Card";
import Footer from "./components/footer/Footer";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Header />
      {data.map((character) => (
        <Card
          characterName={character.name}
          house={character.house}
          imgUrl={character.image}
          actor={character.actor}
          key={character.name}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
