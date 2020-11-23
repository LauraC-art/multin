import React from 'react'
import logoGif from '../imgs/load-logo.gif'
import '../styles/loadPage.scss'
import { BarsSpinner } from "react-spinners-kit";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const LoadPage = () => {
  return (
    <div style={{height:'100%'}}>
    <div className="container-fluid container-load"
    style={{display:'flex', alignItems:'center',flexDirection:'column'}}>        
        <div className="row">
          <img className="logoAnim" src={logoGif}/>
        </div>   
        <div className="row">
          <h1 className="col-sm title">inMulti</h1>
        </div>
        <div>
            <BarsSpinner />
        </div>
    </div>
    </div>
  )
}