import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setShowStable } from "../feature/showStable.slice";

const TableFilters = () => {
  const [toggleShowStable, setToggleShowStable] = useState(true);

  // Redux toolKit part
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowStable(toggleShowStable));
  }, [toggleShowStable]);

  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            id="stableCoin"
            defaultChecked={true}
            onChange={() => {
              setToggleShowStable(!toggleShowStable);
            }}
          ></input>
          <label htmlFor="stableCoin">
            {toggleShowStable ? "Hide stablecoins" : "Show stablecoins"}
          </label>
          <div className="no-list-btn">
            <p>Aucune liste</p>
          </div>
        </div>
        <div className="fav-list">
          <p>Liste des favoris</p>
          <img src="./assets/star-full.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
