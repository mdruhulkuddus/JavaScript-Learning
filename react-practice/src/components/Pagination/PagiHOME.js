import React, { useEffect, useState } from "react";

import CryptoList from "./CryptoList";
import Pagination from "./Pagination";

const PagiHOME = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(8);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
        .then((response) => {
          if (!response.ok) {
            throw Error("Fetching is not successful");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          setCoinsData(data);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
        });
    }, 2000);
  }, []);

  const lastCardIndex = currentPage * cardPerPage;
  const firstCardIndex = lastCardIndex - cardPerPage;
  const currentCards = coinsData.slice(firstCardIndex, lastCardIndex);

  return (
    <>
      <h1>Crypto Gallery</h1>
      <CryptoList coinsData={currentCards} />
      <Pagination totalCards={coinsData.length} cardPerPage = {cardPerPage} setCurrentPage={setCurrentPage} currentPage = {currentPage}/>
    </>
  );
};

export default PagiHOME;
