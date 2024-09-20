import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext' 
import './PlaceOrder.css'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' className="text" />
          <input type="text" placeholder='Last name' className="text" />
        </div>
        <input type="email" placeholder='Email Address' className="email" />
        <input type="text" placeholder='Street' className="email" />
        <div className="multi-fields">
          <input type="text" placeholder='City' className="text" />
          <input type="text" placeholder='State' className="text" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' className="text" />
          <input type="text" placeholder='Country' className="text" />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder