import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCoinsFavName } from "../feature/coinsFavName.slice";

const StarIcon = ({ coinId }) => {
  const [like, setLike] = useState(false);
  const [listFavState, setListFavState] = useState([]);

  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",");
      if (favList.includes(coinId)) {
        setLike(true);
      }
    }
  }, []);

  const idChecker = (id) => {
    let favList = [];

    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",");
    }

    if (favList) {
      if (favList.includes(id)) {
        window.localStorage.coinList = favList.filter((coin) => coin !== id);
        setLike(false);
      } else {
        window.localStorage.coinList = [...favList, id];
        setLike(true);
      }
    } else {
      window.localStorage.coinList = id;
      setLike(true);
    }
  };

  // redux toolkit part
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",");
      dispatch(setCoinsFavName(favList));
    } else {
      dispatch(setCoinsFavName([]));
    }
  }, [window.localStorage.coinList]);

  return (
    <img
      onClick={() => idChecker(coinId)}
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="icon-star"
    />
  );
};

export default StarIcon;
