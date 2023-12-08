import { useEffect, useState } from "react";
import Data from "../data"

import { useParams } from "react-router-dom";

function StockPage(props) {

    let [stock, setStock] = useState({});
    let { symbol } = useParams();
    console.log(symbol);
    // let stock = Data.filter((stock) => stock.symbol == symbol)

    async function getStock () {
                let response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=S7hvBLsZn8FWd6leuhE28EV24zXB5sgu`)
                let data = await response.json()
                console.log(data);
                setStock(data[0]);
    }

    useEffect(() => {getStock()}, [])

    return (
        <div>
            <h1>{stock.companyName}</h1>
            <h2>{stock.changes}</h2>
            <h2>{stock.price}</h2>
            <h2>{stock.symbol}</h2>
        </div>
    );
}

export default StockPage;