import axios from "axios";
import React, { useEffect, useState } from "react";
import HeaderInfos from "./components/HeaderInfos";
import HeatMap from "./components/HeatMap";
import Table from "./components/Table";
import ToTop from "./components/ToTop";
import TableFilters from "./components/TableFilters";
import Search from "./components/Search";

const App = () => {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
      )
      .then((res) => setCoinsData(res.data));
  }, []);

  useEffect(() => {
    // navbar qui apparaît au scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        document.querySelector(".table-header").classList.add("active");
      } else {
        document.querySelector(".table-header").classList.remove("active");
      }
    });
  }, []);

  return (
    <div className="app-container">
      <header>
        <HeaderInfos />
        <HeatMap coinsData={coinsData} />

        <div className="handle-Block">
          <div className="searchBar">
            <Search></Search>
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
