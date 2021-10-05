import React from 'react';
import { Card } from 'react-bootstrap';

const Cart = (props) => {
    return (
        <div >
          <Card className='cardShadow zoom flex flex-col items-center ' style={{ width: '16rem' ,height:'20.5rem'}}>
  {/* <Card.Img variant="top" src={props.img} /> */}
  <img className='w-20 mt-10 mb-14' src={props.img} alt="useimg" />
  <Card.Body >
    <Card.Title className='text-center font-bold'>{props.title}</Card.Title>
    <Card.Text>
     <span className='block font-light my-1 mb-2'>Nam libero tempore, cum soluta nobis est eligendi cumque facere possimus</span>
    
    </Card.Text>
    
    
  </Card.Body>
</Card>
        </div>
    );
};

export default Cart;