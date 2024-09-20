import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id,
    name,
    image,
    price,
    description,
    category }) => {

    const [itemCount, setItemCount] = useState(0);
    const { addToCart,
        removeCartItem,
        cartItems,
    } = useContext(StoreContext);

    return (
        <div className="food-item">
            <div className="food-item-image-container">
                <img src={image} alt="" className="food-item-image" />
                {
                    !cartItems[id] ? <img onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" className="add" />
                        : <div className="food-item-counter">
                            <img src={assets.remove_icon_red} onClick={() => removeCartItem(id)} alt="" />
                            <p>{cartItems[id]}</p>
                            <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem