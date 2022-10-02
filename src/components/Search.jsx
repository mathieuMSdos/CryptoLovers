import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Search = () => {
  const [userResearch, setUserResearch] = useState();

  const form = useRef();
  const contentResearch = useRef("");

  const search = (e) => {
    e.preventDefault();
    setUserResearch(contentResearch.current.value);
    form.current.reset();
  };

  return (
    <form ref={form} onSubmit={search}>
      <input
        type="text"
        placeholder="Rechercher une crypto"
        ref={contentResearch}
      />
    </form>
  );
};

export default Search;
