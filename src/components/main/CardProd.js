import { useState } from 'react';
import {Card, Stack} from 'react-bootstrap';
import './CardProd.css'


function CardProd(props) {

  const [addedCart, SetAddedCart] = useState(false)
  const [AddToFav, SetAddToFav] = useState(false)



  return (
    <Card style={{ width: '210px' }} id='cardcss'>
      <img id='AddToFavButton' src={AddToFav ? './img/like.png' : './img/heart.png'} onClick={() => SetAddToFav(!AddToFav)}></img>
      <Card.Img id='imgfl' style={{ width: '120px', height: '132px', marginTop: '10px'}} variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className="Flower">{props.name}</Card.Title>
        <Stack direction="horizontal" gap={3}>
        <div ><p className='priceName'>ЦЕНА:</p><span className='price'>{props.coast}</span></div>
        <div className=" ms-auto">
          <img src={addedCart ? './img/галочка.svg' : './img/AddCard.svg'} onClick={() => SetAddedCart(!addedCart)}/>
        </div>
    </Stack>
      </Card.Body>
    </Card>
  );
}

export default CardProd;