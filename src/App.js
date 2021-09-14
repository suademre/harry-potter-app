import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import data from "./data.json";

function App() {
  console.log(data);
  return (
    <div className="App">
      <Header />
      {/* <Main
        characterName="Harry Potter"
        house="Gryffindor"
        imgUrl="http://hp-api.herokuapp.com/images/harry.jpg"
        actor="Daniel Radcliffe"
      />
      <Main
        characterName="Hermione Granger"
        house="Gryffindor"
        imgUrl="http://hp-api.herokuapp.com/images/hermione.jpeg"
        actor="Emma Watson"
      /> */}
      {data.map((character) => (
        <Main
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
