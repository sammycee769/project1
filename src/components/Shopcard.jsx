import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCartShopping } from 'react-icons/fa6';
import './Shopcard.css'
import { AiFillEye, AiFillHeart } from 'react-icons/ai';
import { useCart } from '../pages/CartContext.js';
// import { MdClose } from "react-icons/md";


export default function ShoopCard(i,product) {
  const { addToCart } = useCart(); // Cart context to manage the cart state

  const handleAddToCart = () => {
    addToCart(product); // Adds the product to the cart using context
    alert(`${product.name} added to cart!`); // Show a confirmation alert
  };
//   const [showDetail, setShowDetail] = useState(false)
// const detailpage =() =>
// {
//   setShowDetail(true)
// }

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
        <Button id='card-btn'  onClick={() => (handleAddToCart)}>Add To Cart <FaCartShopping/></Button>
        </Card.Text>
        <Card.Text id='box'>
     {/* {
          showDetail ?
          <>
        <div className='productdetail'>
          <Card.Text id='lose'> 
          <MdClose /> 
          </Card.Text>
        </div>
          </>:
          null
        } */}
     <Card.Text id='icon'>    <Card.Text className='card-icon' >< AiFillEye/></Card.Text>
     <Card.Text className='card-icon'><AiFillHeart/></Card.Text></Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

