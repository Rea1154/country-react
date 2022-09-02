import { useState } from "react";

const ListContainer = ({ btnState, allCountries, setInputText }) => {
  let toggleClassCheck = btnState ? "countries-list-hidden" : "";

  const [nameToInput, setNameToInput] = useState("");

  const cNameToInput = (e) => {
    if (e.target.className === "name") {
      setNameToInput(e.target.textContent);
    }
  };

  if (nameToInput.length > 1) {
    setInputText(nameToInput);
    setNameToInput("");
  }

  return (
    <div
      onClick={cNameToInput}
      className={`countries-list ${toggleClassCheck}`}
    >
      {btnState
        ? ""
        : allCountries.map((country, i) => (
            <p key={i} className="name">
              {country}
            </p>
          ))}
    </div>
  );
};

export default ListContainer;
