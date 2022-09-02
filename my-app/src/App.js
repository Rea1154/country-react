import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import ListBtn from "./components/ListBtn";
import ListContainer from "./components/ListContainer";

function App() {
  const [inputText, setInputText] = useState("");
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState([]);

  const [btnState, setBtnState] = useState("true");
  const [allCountries, setAllCountries] = useState([]);

  //Fetch country on change
  useEffect(() => {
    fetchCountry();
  }, [country]);

  //Fetch country
  const fetchCountry = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    const data = await response.json();

    setCountryData([
      data[0].name.common,
      data[0].region,
      data[0].capital[0],
      data[0].languages,
      data[0].currencies,
      data[0].flags.png,
    ]);
  };

  //Fetch countries on first page load
  useEffect(() => {
    fetchCountries();
  }, []);

  //Fetch countries
  const fetchCountries = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();

    let cName = [];
    data.map((e) => {
      cName.push(e.name.common);
    });
    setAllCountries(cName);
  };

  return (
    <div className="App">
      <ListBtn setBtnState={setBtnState} btnState={btnState} />
      <Input
        setBtnState={setBtnState}
        inputText={inputText}
        setCountry={setCountry}
        setInputText={setInputText}
      />
      <ListContainer
        setInputText={setInputText}
        allCountries={allCountries}
        btnState={btnState}
      />
      {countryData.length > 0 && <Card countryData={countryData} />}
    </div>
  );
}

export default App;
