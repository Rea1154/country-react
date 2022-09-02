const Input = ({ setInputText, setCountry, inputText, setBtnState }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText.trim().length == 0) {
      alert("Invalid input!");
    }
    setCountry(inputText);
    setInputText("");
    setBtnState("true");
  };

  return (
    <form>
      <label htmlFor="country-input"></label>
      <input
        value={inputText}
        onChange={inputHandler}
        type="search"
        className="input"
        required
        placeholder="Hungary"
        name="country-input"
        id="country-input"
      />
      <button
        onClick={submitHandler}
        className="btn btn-getcountry"
        type="submit"
      >
        Get Country
      </button>
    </form>
  );
};

export default Input;
