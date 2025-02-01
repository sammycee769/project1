import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCartShopping } from 'react-icons/fa6';
import './ProductCard.css'
import { AiFillEye, AiFillHeart } from 'react-icons/ai';
import { useCart } from '../pages/CartContext.js'; 
export default function ProductCard(i) {
 
   
  return (
    <Card style={{textAlign:'center' }} className='shadow-lg rounded' id='card'> 
      <Card.Img variant="top" src={i.productImg} id='card1'/>
      <Card.Body>
        <Card.Title id='card-name'>{i.name}</Card.Title>
        <Card.Text id='card-price'>
         {i.price.toLocaleString("en-NG",
            {style: 'currency', currency: 'NGN'}
         )}
        </Card.Text><Card.Text id='btn'>
        <Button id='card-btn'>Add To Cart <FaCartShopping/></Button>
        </Card.Text>
        <Card.Text id='box'>
     <Card.Text id='icon'>    <Card.Text className='card-icon'><AiFillEye/></Card.Text>
     <Card.Text className='card-icon'><AiFillHeart/></Card.Text></Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

