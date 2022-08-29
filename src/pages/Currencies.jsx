import React from 'react'
import './Currencies.css'
import {Link, useParams} from "react-router-dom"

const Currencies = ({coins}) => {
  const { id } =useParams();
  const selectedCoin = coins.filter(coin => coin.id ===id)
  

  
console.log(id)
  return (
    <div className='currencies'>
      <Link to={'/'}>
        <button>Back</button>
      </Link>

      {selectedCoin.map(item => (
        <div className='items'>
          <div className='this'>
            <h1><img src={item.image}/>{item.name}</h1>
            <h4>{item.name} Price <span className='spn'>${item.current_price.toLocaleString()}</span></h4>
            <h4>Price Change 24h 
            {item.price_change_percentage_24h < 0 ?
               (<span className='spn red'>{item.price_change_percentage_24h.toFixed(2)}%</span>) : 
               (<span className='spn green'>{item.price_change_percentage_24h.toFixed(2)}%</span>)}
            </h4>
            <h4>24h High <span className='spn'>${item.high_24h.toLocaleString()}</span></h4>
            <h4>24h Low <span className='spn'>${item.low_24h.toLocaleString()}</span></h4>
            <h4>All Time High <span className='spn'>${item.ath.toLocaleString()}</span></h4>
            <h4>ATH Price Change 
            {item.ath_change_percentage < 0 ?
               (<span className='spn red'>{item.ath_change_percentage.toFixed(2)}%</span>) : 
               (<span className='spn green'>{item.ath_change_percentage.toFixed(2)}%</span>)}
            </h4>
            <h4>All Time Low <span className='spn'>${item.atl.toLocaleString()}</span></h4>
            <h4>ATL Price Change 
            {item.atl_change_percentage < 0 ?
               (<span className='spn red'>{item.atl_change_percentage.toFixed(2)}%</span>) : 
               (<span className='spn green'>{item.atl_change_percentage.toFixed(2)}%</span>)}
            </h4>
            <h4>Trading Volume <span className='spn'>${item.total_volume.toLocaleString()}</span></h4>
            <h4>Market Cap Rank <span className='spn'>#{item.market_cap_rank}</span></h4>
            <h4>Market Cap  <span className='spn'>${item.market_cap.toLocaleString()}</span></h4>
            <h4>MC Change 24h 
            {item.price_change_percentage_24h < 0 ?
               (<span className='spn red'>{item.market_cap_change_percentage_24h.toFixed(2)}%</span>) : 
               (<span className='spn green'>{item.market_cap_change_percentage_24h.toFixed(2)}%</span>)}
            </h4>
            {/* <h4>Circulating Supply  <span className='spn'>{item.circulating_supply.toLocaleString()} BTC</span></h4>
            <h4>Max Supply  <span className='spn'>{item.max_supply.toLocaleString()} BTC</span></h4> */}
          </div>

        </div>
      ))}
    </div>
  )
}

export default Currencies