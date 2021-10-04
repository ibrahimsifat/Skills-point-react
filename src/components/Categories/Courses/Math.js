
import React, { useEffect, useState } from 'react';
import { Card ,Button, Modal} from 'react-bootstrap';


// costum hooks
const useLanguge=()=>{
    const [languages,setLanguages]=useState([])
    useEffect(()=>{

        fetch('../Math.json')
        .then(response => response.json())
        .then(json => setLanguages(json))
    },[])
    return[languages,setLanguages]
}

const Languages = () => {
    const [languages]=useLanguge([])
    
   
    return (
        <div className='mt-24 grid grid-cols-3 gap-y-10 container'>

{
    languages.map(language=><Display key={language.title} language={language}></Display>)
}        </div>
    );
};

const Display=(props)=>{
    const [modalShow, setModalShow] = React.useState(false);
    const {title,img,Address,price}=props.language;
   
return(

    <div>

<Card className='cardShadow zoom' style={{ width: '18rem' ,height:'28.5rem'}}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
     <span className='block font-bold my-1 mb-2'>price:${price}</span>
     <span className='text-gray-600'>{Address}</span>
    </Card.Text>
    <Button className='mt-auto block' variant="dark"  onClick={() => setModalShow(true)}>Course Details</Button>
    
    <MyVerticallyCenteredModal
    language={props.language}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </Card.Body>
</Card>
    </div>
)
}






function MyVerticallyCenteredModal(props) {
  const {price,title,Address}=props.language;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Price:$ {price}</h4>
          <p>
            {Address}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


export default Languages;