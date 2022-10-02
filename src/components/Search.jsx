import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../feature/search.slice";
import { setShowSearchRedux } from "../feature/showSearch.slice ";

const Search = () => {
  const [userResearch, setUserResearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const form = useRef();
  const contentResearch = useRef("");

  const search = (e) => {
    e.preventDefault();
    setUserResearch(contentResearch.current.value);
    setShowSearch(true);
    form.current.reset();
  };

  //   ReduxToolkit part
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(userResearch));
    dispatch(setShowSearchRedux(showSearch));
  }, [userResearch, showSearch]);

  return (
    <>
      <form ref={form} onSubmit={search}>
        <input
          type="text"
          placeholder="Rechercher une crypto"
          ref={contentResearch}
        />
      </form>
      <div className="cancelResearch">
        <div className="btn-cancel-search" onClick={() => setShowSearch(false)}>
          Annuler la recherche
        </div>
      </div>
    </>
  );
};

export default Search;
