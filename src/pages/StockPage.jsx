import { useEffect, useState } from "react";
import Data from "../data"

import { useParams } from "react-router-dom";

function StockPage(props) {

    let [stock, setStock] = useState({});
    let { symbol } = useParams();
    console.log(symbol);
    // let stock = Data.filter((stock) => stock.symbol == symbol)

    async function getStock() {
        let response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=S7hvBLsZn8FWd6leuhE28EV24zXB5sgu`)
        let data = await response.json()
        console.log(data);
        setStock(data[0]);
    }

    useEffect(() => { getStock() }, [])

    return (
        <div className="stock">
            <h1>{stock.companyName}</h1>
            <section className="stock-info">
                <h2>CEO: {stock.ceo}</h2>
                <h2>Changes: {stock.changes}</h2>
                <h2>Price: ${stock.price}</h2>
                <h2>Symbol: {stock.symbol}</h2>
            </section>
        </div>
    );
}

export default StockPage;