import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div style={{ paddingTop: '5rem' }}>
      <h2>Product List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ccc',
            padding: '1rem',
            width: '200px',
            borderRadius: '8px'
          }}>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
            <h4>{product.title}</h4>
            <p>₹ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
