import React from 'react';
import './Coin.css';
import {Link} from 'react-router-dom'

function Coin({ id, name, image, symbol, price, volume, priceChange, marketcap, rank}) {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <p className='coin-rank'>{rank}</p>
            <div className='coin-coin'>
                <img className='coin-img' src={image} alt='crypto' />
                <Link to={`/currencies/${id}`}>
                    <h1 className='coin-name'>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </Link>
            </div>
            
            <p className='coin-price'>${price.toLocaleString()}</p>
            <p className='coin-volume'>${volume.toLocaleString()}</p>
            {priceChange < 0 ? (
                <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
            ) : (
                <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
            )}
            <p className='coin-marketcap'>${marketcap.toLocaleString()}</p>
        </div>
    </div>
  )
}

export default Coin