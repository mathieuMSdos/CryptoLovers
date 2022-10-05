import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowStable } from "../feature/showStable.slice";
import { setShowSearchRedux } from "../feature/showSearch.slice ";
import { setShowFavList } from "../feature/showFavList.slice.js";
import Search from "./Search";

const TableFilters = () => {
  const [toggleShowStable, setToggleShowStable] = useState(true);
  const [showFavListState, setShowFavListState] = useState(false);
  const showSearchRedux = useSelector((state) => state.showSearch.showSearch);
  const showFavList = useSelector((state) => state.showFavList.showFavList);
  const [showSearch, setShowSearch] = useState(showSearchRedux);

  // Redux toolKit partactive

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowStable(toggleShowStable));
    dispatch(setShowFavList(showFavListState));
    dispatch(setShowSearchRedux(false));
  }, [toggleShowStable, showFavListState]);

  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="title-container">
          <h3>Filters</h3>
        </div>

        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            id="stableCoin"
            defaultChecked={false}
            onChange={() => {
              setToggleShowStable(!toggleShowStable);
            }}
          ></input>
          <label htmlFor="stableCoin">
            {toggleShowStable ? "Hide stablecoins" : "Show stablecoins"}
          </label>
          <div
            className={showFavList ? "fav-list active" : "fav-list"}
            onClick={() => setShowFavListState(!showFavListState)}
          >
            <p>Liste des favoris</p>
            <img src="./assets/star-full.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
