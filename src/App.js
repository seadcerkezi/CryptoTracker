import { Route, Routes} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Currencies from "./pages/Currencies";
import Home from "./pages/Home";


function App() {
  const [coins, setCoins] = useState([]);
  

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home coins={coins}/>}/>
        <Route path="/currencies/:id" element={<Currencies coins={coins}/>}/>
      </Routes>
    </div>
  );
}

export default App;
