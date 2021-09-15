import "./Card.css";

function tellColorName(house) {
  /* house.forEach(house => {
        
    }) */
  let color;
  if (house === "Gryffindor") {
    color = "red";
  } else if (house === "Hufflepuff") {
    color = "yellow";
  } else if (house === "Ravenclaw") {
    color = "blue";
  } else if (house === "Slytherin") {
    color = "green";
  } else {
    color = "white";
  }
  return color;
}

function Main({ characterName, house, imgUrl, actor }) {
  const color = tellColorName(house);
  console.log("color : " + color);

  return (
    <>
      <div className="character__card">
        <section className="card">
          <div className="card__img">
            <img className="card__img__tag" src={imgUrl} alt={characterName} />
          </div>
          <div className="card_propertiesTag">
            <h4 className="card__name">Name : {characterName} </h4>
            <h6 className="card__actor">Actor's Name{actor}</h6>
            <h6 className={color}>House : {house}</h6>
            <button className="more">More</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
