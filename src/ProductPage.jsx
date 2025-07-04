// src/pages/ProductPage.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice'; // ✅ path updated based on your setup
import flfImage from './assets/flf.png';
import snake from './assets/snake.png'
import peace from './assets/peace.png'
import money from './assets/money.png'
import aloe from './assets/aloe.png'

const products = [
  {
    id: 1,
    name: 'Fiddle Leaf Fig',
    price: 999,
    image: 'https://m.media-amazon.com/images/I/81cndSurZzL.jpg',
    category: 'Indoor',
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 599,
    image: snake ,
    category: 'Indoor',
  },
  {
    id: 3,
    name: 'Peace Lily',
    price: 699,
    image: peace,
    category: 'Flowering',
  },
  {
    id: 4,
    name: 'Aloe Vera',
    price: 399,
    image: aloe,
    category: 'Succulent',
  },
  {
    id: 5,
    name: 'Money Plant',
    price: 349,
    image: money,
    category: 'Hanging',
  },
  {
    id: 6,
    name: 'Spider Plant',
    price: 549,
    image: 'https://kyari.co/cdn/shop/files/1_02151e29-b8f7-4bf1-b65d-c12bbd1bf8fa.jpg?v=1750753431&width=480',
    category: 'Air Purifying',
  },
];

const ProductPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-page">
      <h2 className='page-title'>Our Houseplants 🌿</h2>
      <div className="product-grid">
        {products.map((plant) => (
          <div key={plant.id} className="product-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>₹{plant.price}</p>
            <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
