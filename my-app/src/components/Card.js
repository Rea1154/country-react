const Card = ({ countryData }) => {
  let language = "";
  let currency = "";
  if (countryData.length > 0) {
    language = countryData[3];
    currency = countryData[4];
  }

  return (
    <div className="card-div">
      <div className="div-img">
        <img className="card-img" src={countryData[5]} alt="" />
      </div>
      <div className="card-main">
        <h1 className="card-h1">{countryData[0]}</h1>
        <h3 className="card-h3">{countryData[1]}</h3>
      </div>
      <p className="card-p">
        <i className="icon fa-solid fa-city"></i>
        {countryData[2]}
      </p>
      <p className="card-p">
        <i className="icon fa-solid fa-comment"></i>
        {Object.values(language)[0]}
      </p>
      <p className="card-p">
        <i className="icon fa-solid fa-sack-dollar"></i>
        {Object.keys(currency)[0]}
      </p>
      ;
    </div>
  );
};

export default Card;
