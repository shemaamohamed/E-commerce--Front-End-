import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../style/ProductCard.css"
<<<<<<< HEAD
import { useDispatch} from 'react-redux';
import { addItem } from '../store/slices/itemSlice';
=======
>>>>>>> 8f68d25c1f494791405fd49ba7a13bc8f03cd8ff
import Rating from './Rating';



function ProductCard({product}) {
<<<<<<< HEAD
  const dispatch=useDispatch();
  const addToCart=()=>{
    dispatch(addItem(product))
  }
=======
 
>>>>>>> 8f68d25c1f494791405fd49ba7a13bc8f03cd8ff

  return (
<Card className='card-v'>
  <div className='content'>
  <Card.Img className='card-img' variant="top" src={product.image} />
  <Card.Text className="card-price"> Price : {product.price}EGP</Card.Text>
  </div>
  <Card.Body>
    <Card.Title className="card-title">{product.title}</Card.Title>
    <Rating productId={product.id} />
<<<<<<< HEAD
    <Button className="card-button" variant="dark" onClick={() => addToCart(product)}>
=======
    <Button className="card-button" variant="dark" >
>>>>>>> 8f68d25c1f494791405fd49ba7a13bc8f03cd8ff
    <svg class="cart" fill="white" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
    </svg>
      Add to cart
    </Button>
  </Card.Body>
</Card>

  );
}

export default ProductCard;