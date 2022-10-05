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

        <div className="filter-checkbox-container">
          <div
            className="stable-coin-filter"
            onClick={() => {
              setToggleShowStable(!toggleShowStable);
            }}
          >
            {toggleShowStable ? (
              <img src="./assets/square-check.svg" alt=""></img>
            ) : (
              <img src="./assets/square-empty.svg" alt=""></img>
            )}
            <p>show stablecoins</p>
          </div>

          <div
            className="fav-list"
            onClick={() => setShowFavListState(!showFavListState)}
          >
            {showFavListState ? (
              <img src="./assets/square-check.svg" alt=""></img>
            ) : (
              <img src="./assets/square-empty.svg" alt=""></img>
            )}
            <p>Liste des favoris</p>
            <img id="star-icon" src="./assets/star-full-white.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
