// Cart.js
import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { addcontext } from '../Components/ContextShare';

function Cart() {
  const { addthings } = useContext(addcontext);

  return (
    <>
      {addthings.length > 0 ? (
        <div className='mt-5 ms-5'>
          <Row>
            {addthings.map((products) => (
              <Col sm={12} md={6} lg={4} xl={3} key={products.id}>
                <Card style={{ width: '18rem', height: 'auto', marginBottom: '20px' }} key={products.id}>
              <Card.Img variant="top" style={{ width: '100%', height: '250px' }} src={products.image} />
              <Card.Body>
                <Card.Title class="overflow-hidden" style={{ width: '100%', height: '100px' }}>{products.title}</Card.Title>
                <Card.Text><h4>Price : {products.price}</h4></Card.Text>
                
              </Card.Body>
            </Card>
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <h2 className='text-danger text-center mt-5'>Cart Empty</h2>
      )}
    </>
  );
}

export default Cart;
