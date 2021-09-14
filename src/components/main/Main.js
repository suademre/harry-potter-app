import "./Main.css";

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
  /* const herryName = "Herry Poter";
  const herryActor = "Daniel Radcliffe";
  const harryImgae = "http://hp-api.herokuapp.com/images/harry.jpg";

  const hermioneName = "Hermione Granger";
  const hermioneActor = "Emma Watson";
  const hermioneImg = "http://hp-api.herokuapp.com/images/hermione.jpeg"; */

  return (
    <>
      <main>
        {/* {data.map((d, key) => ( */}
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
        {/* ))} */}
      </main>
    </>
  );
}

export default Main;
