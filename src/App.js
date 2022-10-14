import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HeatMap from "./components/HeatMap";
import Table from "./components/Table";
import ToTop from "./components/ToTop";
import TableFilters from "./components/TableFilters";
import Search from "./components/Search";
import ButtonApp from "./components/ButtonApp";
import { useDispatch, useSelector } from "react-redux";
import { setShowSearchRedux } from "./feature/showSearch.slice";
import { setSearch } from "./feature/search.slice";
import { setNoSearchResultRedux } from "./feature/noSearchResultRedux.slice";
import { setShowFavList } from "./feature/showFavList.slice.js";
import { setWindowWidth } from "./feature/windowWidth.slice";
import FearAndGreed from "./components/FearAndGreed";

const App = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [fearAndGreedData, setFearAndGreedData] = useState();

  // Redux toolkit part :
  const dispatch = useDispatch();
  const showSearch = useSelector((state) => state.showSearch.showSearch);
  const showFavList = useSelector((state) => state.showFavList.showFavList);
  const noSearchResultRedux = useSelector(
    (state) => state.noSearchResultRedux.noSearchResultRedux
  );
  const windowWidth = useSelector((state) => state.windowWidth.windowWidth);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
      )
      .then((res) => setCoinsData(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://api.alternative.me/fng/?limit=1")
      .then((res) => setFearAndGreedData(res.data.data[0].value));
    // setFearAndGreedData(88)
  }, []);

  // Allow heatmap + crypto Fear index to have reponsive width.

  useEffect(() => {
    window.addEventListener("resize", () =>
      dispatch(setWindowWidth(window.innerWidth))
    );
    return () => {
      window.removeEventListener("resize", () =>
        dispatch(setWindowWidth(window.innerWidth))
      );
    };
  }, []);

  return (
    <div className="app-container">
      <header>
        <Header />
        <div className="charts-container">
          <div className="heatmap-container">
            <HeatMap coinsData={coinsData} />
          </div>
          <div className="fear-and-greed-container">
            <FearAndGreed fearAndGreedData={fearAndGreedData}></FearAndGreed>
          </div>
        </div>

        <div className="handle-block">
          <div className="searchBar">
            <Search></Search>
            {/* show a button back in case of research has results  */}

            {(showSearch && !noSearchResultRedux) ||
            (showFavList && window.localStorage.coinList) ? (
              <ButtonApp
                title={"back to list"}
                actionSet={() => {
                  dispatch(setShowSearchRedux(false));
                  dispatch(setSearch(""));
                  dispatch(setNoSearchResultRedux(false));
                  dispatch(setShowFavList(false));
                }}
              ></ButtonApp>
            ) : (
              ""
            )}
          </div>
          <div className="filter-Block">
            <TableFilters></TableFilters>
          </div>
        </div>
      </header>
      <Table coinsData={coinsData} />
      <ToTop />
    </div>
  );
};

export default App;
