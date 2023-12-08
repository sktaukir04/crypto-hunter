import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { SingleCoin } from '../config/api';
import CoinInfo from '../components/CoinInfo';
import './coinpagestyle.css'
import { LinearProgress, Typography } from '@material-ui/core';
import ReactHtmlParser from "react-html-parser";
import { numberWithCommas } from '../components/Carousel';

const CoinPage = () => {
  const {id}=useParams();
  const [coin,setCoin]=useState()

  const{currency,symbol}=CryptoState()
  const fetchCoin = async ()=>{
    const {data}=await axios.get(SingleCoin(id));
    setCoin(data)
  }
  useEffect(()=>{
    fetchCoin();
  },[])
  if (!coin) {
    return <LinearProgress style={{backgroundColor:'gold'}}/>
  }
  return (
    <div className='single_coin_container'>
      <div className="sidebar">
        <img src={coin?.image?.large} alt={coin?.name} height={200} style={{marginBottom:20}} />
        <Typography variant='h3' style={{fontWeight:'bold',marginBottom:20,fontFamily:"Montserrat"}}>{coin?.name}</Typography>
        <Typography variant='subtitle1' style={{width:'100%',fontFamily:'Montserrat',padding:25,paddingBottom:15,paddingTop:0,textAlign:'justify'}}>
        {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </Typography>
        <div className='marketData'>
          <span style={{display:'flex'}}>
            <Typography style={{fontWeight:'bold',marginBottom:20,fontFamily:'Montserrat'}}>Rank:</Typography> &nbsp; &nbsp;
            <Typography variant='h5' style={{fontFamily:'Montserrat'}}>{coin?.market_cap_rank}</Typography>
          </span>
          <span style={{display:'flex'}}>
            <Typography style={{fontWeight:'bold',marginBottom:20,fontFamily:'Montserrat'}}>Current Price:</Typography> &nbsp; &nbsp;
            <Typography variant='h5' style={{fontFamily:'Montserrat'}}>
              {symbol}{" "}
              {numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])}
            </Typography>
          </span>
          <span style={{display:'flex'}}>
            <Typography style={{fontWeight:'bold',marginBottom:20,fontFamily:'Montserrat'}}>Market Cap:</Typography> &nbsp; &nbsp;
            <Typography variant='h5' style={{fontFamily:'Montserrat'}}>
              {symbol}{" "}
              {/* {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0,-6))}M */}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}M
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin}/>
    </div>
  )
}

export default CoinPage