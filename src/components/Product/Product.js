import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <div style={{ textAlign: 'center' }}>
                <img src={img} alt="" />
            </div>
            <div style={{ padding: '5px' }}>
                <h2 className='product-name'>{name}</h2>
                <h5>Price: {price}$</h5>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} star</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='cart-btn d-flex justify-content-center align-items-center'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div >
    );
};

export default Product;