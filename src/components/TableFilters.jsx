import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setShowStable } from "../feature/showStable.slice";
import { setList } from "../feature/list.slice.js";
import Search from "./Search";

const TableFilters = () => {
  const [toggleShowStable, setToggleShowStable] = useState(true);
  const [showFavList, setShowFavList] = useState(false);

  // Redux toolKit part
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowStable(toggleShowStable));
    dispatch(setList(showFavList));
  }, [toggleShowStable, showFavList]);

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
            {toggleShowStable ? "Masquer stablecoins" : "Montrer stablecoins"}
          </label>
        </div>
        <div
          className={showFavList ? "fav-list active" : "fav-list"}
          onClick={() => setShowFavList(!showFavList)}
        >
          <p>Liste des favoris</p>
          <img src="./assets/star-full.svg" alt="" />
        </div>
      </div>
      <div className="searchBar">
        <Search></Search>
      </div>
    </div>
  );
};

export default TableFilters;
