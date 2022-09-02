import { useState } from "react";

const ListBtn = ({ setBtnState, btnState }) => {
  const handleClick = () => {
    setBtnState((btnState) => !btnState);
  };

  return (
    <button onClick={handleClick} className="btn btn-countries">
      <i
        className={
          btnState
            ? "fa-solid fa-angle-left arrow"
            : "fa-solid fa-angle-right arrow"
        }
      ></i>{" "}
      Countries
    </button>
  );
};

export default ListBtn;
