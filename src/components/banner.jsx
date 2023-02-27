import React from 'react'
import img1 from "../images/banners-02.png";
import "./banner.css";

export const Banner = () => {
  return (
    <div>
      <img  className='banner' src={img1} alt="" />
    </div>
  )
}
