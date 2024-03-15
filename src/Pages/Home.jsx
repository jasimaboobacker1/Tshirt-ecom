// Home.js
import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addcontext } from '../Components/ContextShare';

function Home() {
  const { addthings, setaddthings, addwish, setaddwish } = useContext(addcontext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        const firstFiveProducts = data.slice(10, 20);
        setProducts(firstFiveProducts);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleCart = (e, product) => {
    e.preventDefault();
    setaddthings([...addthings, product]);
  };

  const handleWish = (e, product) => {
    e.preventDefault();
    setaddwish([...addwish, product]);
  };

  return (
    <>
      <div style={{ width: '100%', height: 'auto' }} className='bg-dark'>
        <div style={{ width: 'auto', height: 'auto' }} className='p-5 bg-dark d-flex align-items-center justify-content-center justify-content-around flex-wrap'>
          {products.map((product) => (
            <Card style={{ width: '18rem', height: 'auto', marginBottom: '20px' }} key={product.id}>
              <Card.Img variant="top" style={{ width: '100%', height: '250px' }} src={product.image} />
              <Card.Body>
                <Card.Title class="overflow-hidden" style={{ width: '100%', height: '100px' }}>{product.title}</Card.Title>
                <Card.Text><h4>Price : {product.price}</h4></Card.Text>
                <div className='d-flex flex-column '>
                  <Button variant="primary" onClick={(e) => handleWish(e, product)}>Add to Wishlist</Button>
                  <Button onClick={(e) => handleCart(e, product)} className='mt-3' variant="primary">Add to cart</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
