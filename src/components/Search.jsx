import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../feature/search.slice";
import { setShowSearchRedux } from "../feature/showSearch.slice ";
import { setShowFavList } from "../feature/showFavList.slice.js";

const Search = () => {
  const [userResearch, setUserResearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const showFavList = useSelector((state) => state.showFavList.showFavList);

  const form = useRef();
  const contentResearch = useRef("");

  const search = (e) => {
    e.preventDefault();
    setUserResearch(contentResearch.current.value);
    setShowSearch(true);
    // disable favlist view in case of user are already on favlist views and want to do a search
    dispatch(setShowFavList(false));

    form.current.reset();
  };

  const quitSearch = () => {
    form.current.reset();

  }

  //   ReduxToolkit part
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(userResearch));
    dispatch(setShowSearchRedux(showSearch));
  }, [userResearch, showSearch]);



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
      {/* <div className="cancelResearch">
        <div className="btn-cancel-search" onClick={() => setShowSearch(false)}>
          Annuler la recherche
        </div>
      </div> */}
    </>
  );
};

export default Search;
