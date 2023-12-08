import Data from "../data"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Dashboard(props) {

    const [stockList, setStockList] = useState([]);


    async function getData() {
        try {
            let response = await fetch("https://financialmodelingprep.com/api/v3/stock/list?apikey=S7hvBLsZn8FWd6leuhE28EV24zXB5sgu")
            // let response = await fetch("https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=S7hvBLsZn8FWd6leuhE28EV24zXB5sgu")
            let data = await response.json();
            console.log(data);
            setStockList(data);
            console.log(stockList);
        } catch (error) {
            console.log(error)
        }
        
    }

    // useEffect(() => {getData()}, [])
    return (
        <div>
            {Data.map((stock, index) => (
                <Link to={`/stocks/${stock.symbol}`} key={index}>
                <h1>{stock.name} {stock.symbol} {stock.lastPrice}</h1>
                </Link>
            ))}
        </div>
    );
}



export default Dashboard;