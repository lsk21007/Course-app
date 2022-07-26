import React from 'react'
import './TotalPrice.scss'
import { useSelector } from 'react-redux';

export const TotalPrice = () => {

  const state = useSelector(state => state.courseReducer)
  let curPrice = 0, orgPrice = 0;
  state.forEach(i => {
    curPrice += parseInt(Math.floor(i.currPrice * 0.016)) + 0.99;
    orgPrice += (parseInt(Math.floor(i.orgPrice * 0.016)) + 0.99)
  });

  console.log(orgPrice);

  return (
    <div className='TotalPrice'>
      <div>Subtotal:</div>
      <div className='curPrice'>
        CA${curPrice}
      </div>
      <div className='orgPrice'>
        CA${orgPrice.toFixed(2)}
      </div>
      <p>85% off</p>
      <button className='button'>Checkout</button>
    </div>
  )
}
