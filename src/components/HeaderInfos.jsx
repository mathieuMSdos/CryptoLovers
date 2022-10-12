import axios from "axios";
import React, { useEffect, useState } from "react";
import PercentChange from "./PercentChange";
import { useDispatch, useSelector } from "react-redux";
import { setShowFavList } from "../feature/showFavList.slice.js";
import { setShowSearchRedux } from "../feature/showSearch.slice";

const HeaderInfos = () => {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => setHeaderData(res.data.data));
  }, []);

  // Redux toolkit part
  const dispatch = useDispatch();
  const showFavList = useSelector((state) => state.showFavList.showFavList);
  const showSearch = useSelector((state) => state.showSearch.showSearch);

  const resetAllViews = () => {
    dispatch(setShowFavList(false));
    dispatch(setShowSearchRedux(false));
  };

  return (
    <div className="header-container">
      <div className="brand" onClick={() => resetAllViews()}>
        {/* pour l'image on doit faire comme ci elle est dans le dossier public. */}
        <img src="./assets/logo.svg" alt="logo" />

        <h1>CryptoLuv</h1>
      </div>
      <ul className="market-infos">
        <li>
          Cryptos:
          <p>
            {headerData.active_cryptocurrencies &&
              headerData.active_cryptocurrencies.toLocaleString()}
          </p>
        </li>
        <li>
          Exchanges:
          <p>{headerData.markets && headerData.markets.toLocaleString()}</p>
        </li>

        <li>
          {/* problem with api. Datas are not send all in same time. This length check avoid app to crash */}
          {headerData.length !== 0 ? (
            <>
              {" "}
              Market Cap:{" "}
              <p>${headerData.total_market_cap.usd.toLocaleString()}</p>
            </>
          ) : (
            ""
          )}
        </li>

        <li className="global-mkt">
          Market Cap Change(24h):{" "}
          <PercentChange
            percent={headerData.market_cap_change_percentage_24h_usd}
          />
        </li>
        <li>
          Dominance BTC:{" "}
          <p>
            {headerData.market_cap_percentage &&
              headerData.market_cap_percentage.btc.toFixed(1) + "%"}
          </p>
        </li>
        <li>
          Dominance ETH :
          <p>
            {headerData.market_cap_percentage &&
              headerData.market_cap_percentage.eth.toFixed(1) + "%"}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HeaderInfos;
