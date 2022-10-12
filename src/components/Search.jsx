import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../feature/search.slice";
import { setShowSearchRedux } from "../feature/showSearch.slice";
import { setShowFavList } from "../feature/showFavList.slice.js";

const Search = () => {
  const [userResearch, setUserResearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const showFavList = useSelector((state) => state.showFavList.showFavList);

  const form = useRef();
  const contentResearch = useRef("");

  const search = (e) => {
    e.preventDefault();
    dispatch(setSearch(""));
    dispatch(setSearch(contentResearch.current.value));
    dispatch(setShowSearchRedux(true));
    // disable favlist view in case of user are already on favlist views and want to do a search
    dispatch(setShowFavList(false));

    form.current.reset();
  };

  const quitSearch = () => {
    form.current.reset();

  }

  //   ReduxToolkit part
  const dispatch = useDispatch();


  return (
    <>
      <form ref={form} onSubmit={search} onBlur={quitSearch} >
        <input
        className="searchInput"
          type="search"
          placeholder="       Search by name or symbol + press Enter!"
          ref={contentResearch}
        />
      </form>
    
    </>
  );
};

export default Search;
