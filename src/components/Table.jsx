import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import TableLine from "./TableLine";
import ToTop from "./ToTop";

const Table = ({ coinsData }) => {
  const [rangeNumber, setRangeNumber] = useState(100);
  const [orderBy, setOrderBy] = useState("");

  const selectedRange = useRef();
  const tableHeader = [
    "Prix",
    "Marketcap",
    "Volume",
    "1h",
    "1j",
    "1s",
    "1m",
    "6m",
    "1a",
    "ATH",
  ];

  const excludeCoin = (coin) => {
    if (
      coin === "usdt" ||
      coin === "usdc" ||
      coin === "busd" ||
      coin === "dai" ||
      coin === "ust" ||
      coin === "mim" ||
      coin === "tusd" ||
      coin === "usdp" ||
      coin === "usdn" ||
      coin === "fei" ||
      coin === "tribe" ||
      coin === "gusd" ||
      coin === "frax" ||
      coin === "lusd" ||
      coin === "husd" ||
      coin === "ousd" ||
      coin === "xsgd" ||
      coin === "usdx" ||
      coin === "eurs"
    ) {
      return false;
    } else {
      return true;
    }
  };

  // reduxtoolkit part 
  const showStable = useSelector((state)=> state.showStable.showStable)

  return (
    <div className="table-container">
      <ul className="table-header">
        <div className="range-container">
          <span>
            Top{" "}
            <input
              ref={selectedRange}
              type="text"
              value={rangeNumber}
              onChange={() => setRangeNumber(selectedRange.current.value)}
            />
          </span>

          <input
            ref={selectedRange}
            type="range"
            min={1}
            max={250}
            value={rangeNumber}
            onChange={() => setRangeNumber(selectedRange.current.value)}
          />
          <ToTop />
        </div>
        {tableHeader.map((item) => (
          <li key={item}>
            <input
              type="radio"
              name="header-el"
              id={item}
              defaultChecked={
                item === orderBy || item === orderBy + "reverse" ? true : false
              }
              onClick={() => {
                if (orderBy === item) {
                  setOrderBy(item + "reverse");
                } else {
                  setOrderBy(item);
                }
              }}
            />
            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
      {coinsData &&
        coinsData
          .slice(0, rangeNumber)
          .filter((coin) => {
            if(showStable) {
              return coin
            } else {
              if(excludeCoin(coin.symbol)) {
                return coin
              }
            }
          })
          .sort((a, b) => {
            switch (orderBy) {
              case "Prix":
                return b.current_price - a.current_price;
              case "Volume":
                return b.total_volume - a.total_volume;
              case "MarketCap":
                return b.market_cap - a.market_cap;
              case "1h":
                return (
                  b.price_change_percentage_1h_in_currency -
                  a.price_change_percentage_1h_in_currency
                );
              case "1j":
                return (
                  b.market_cap_change_percentage_24h -
                  a.market_cap_change_percentage_24h
                );
              case "1s":
                return (
                  b.price_change_percentage_7d_in_currency -
                  a.price_change_percentage_7d_in_currency
                );
              case "1m":
                return (
                  b.price_change_percentage_30d_in_currency -
                  a.price_change_percentage_30d_in_currency
                );
              case "6m":
                return (
                  b.price_change_percentage_200d_in_currency -
                  a.price_change_percentage_200d_in_currency
                );
              case "1a":
                return (
                  b.price_change_percentage_1y_in_currency -
                  a.price_change_percentage_1y_in_currency
                );
              case "ATH":
                return b.ath_change_percentage - a.ath_change_percentage;
              case "#reverse":
                return a.market_cap - b.market_cap;
              case "Prixreverse":
                return a.current_price - b.current_price;
              case "Volumereverse":
                return a.total_volume - b.total_volume;
              case "Marketcapreverse":
                return a.market_cap - b.market_cap;
              case "1hreverse":
                return (
                  a.price_change_percentage_1h_in_currency -
                  b.price_change_percentage_1h_in_currency
                );
              case "1jreverse":
                return (
                  a.market_cap_change_percentage_24h -
                  b.market_cap_change_percentage_24h
                );
              case "1sreverse":
                return (
                  a.price_change_percentage_7d_in_currency -
                  b.price_change_percentage_7d_in_currency
                );
              case "1mreverse":
                return (
                  a.price_change_percentage_30d_in_currency -
                  b.price_change_percentage_30d_in_currency
                );
              case "6mreverse":
                return (
                  a.price_change_percentage_200d_in_currency -
                  b.price_change_percentage_200d_in_currency
                );
              case "1areverse":
                return (
                  a.price_change_percentage_1y_in_currency -
                  b.price_change_percentage_1y_in_currency
                );
              case "ATHreverse":
                return a.ath_change_percentage - b.ath_change_percentage;

              default:
    
            }
          })
          .map((coin, index) => (
            <TableLine coin={coin} index={index} key={coin.symbol} />
          ))}
    </div>
  );
};

export default Table;
