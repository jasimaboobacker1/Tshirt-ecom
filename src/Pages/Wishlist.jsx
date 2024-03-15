import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addcontext } from '../Components/ContextShare';

function Wishlist() {
    const {addwish,setaddwish}=useContext(addcontext)
    const {addthings,setaddthings}=useContext(addcontext)

    const handleCart =(e,it)=>{
        
        e.preventDefault()
    // setaddthings(e)
    // setcartproducts(cartproducts.push(it))
    // arr.push(it)
    // console.log(arr)
    setaddthings(addthings.concat(it))
    // console.log(arr);
    
    
    
    }

  return (
    <>
    
    
    {addwish.length>0?<div className='mt-5 ms-5'>
        
    <Row>
        {
            addwish?addwish?.map((products)=>(
        <Col sm={12} md={6} lg={4} xl={3}>
        
       
         
            <Card style={{ width: '18rem', height: 'auto', marginBottom: '20px' }} key={products.id}>
              <Card.Img variant="top" style={{ width: '100%', height: '250px' }} src={products.image} />
              <Card.Body>
                <Card.Title class="overflow-hidden" style={{ width: '100%', height: '100px' }}>{products.title}</Card.Title>
                <Card.Text><h4>Price : {products.price}</h4></Card.Text>
                
              </Card.Body>
            </Card>
        
       
     
                   </Col>
            )):"Your Cart Is Empty"
        }
        
        </Row>
    
</div>: <h2 className='text-danger text-center mt-5'>Wishlist Empty</h2>}
</>
  
  )
}

export default Wishlist
