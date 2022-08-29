import { useState } from "react";
import "./Home.css";
import Coin from "../Coin";
import logo from '../logo.png'


const Home = ({coins}) => {
  const [search, setSearch] = useState("");


  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text"><a href="#">CoinTracker</a></h1>
        <a href="#"><img src={logo}/></a>
        <div className="coin-mode-search">
          <form className="coin-input">
            <input
              type="text"
              placeholder="Search by Coin Name"
              className="coin-input2"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
      <div className="coin-tags">
        <p className="tag-rank">#</p>
        <p className="tag-coin">Coin</p>
        <p className="tag-price">Price</p>
        <p className="tag-volume">24h Volume</p>
        <p className="tag-percent">24h</p>
        <p className="tag-mktcap">M.Cap</p>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            id={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
            rank={coin.market_cap_rank}
          />
        );
      })}
    </div>
  )
}

export default Home