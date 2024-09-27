import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useCart } from './../store/cart-context';
import "../style/ProductCard.css"



function ProductCard({product}) {
  const {addToCart }=useCart()

  return (
    <Card className='card-v' style={{width:"18rem" ,marginTop:"25px"}}>
            <Card.Img className='card-img' variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description} 
                <hr/>
                Price : {product.price}EGP
                
              </Card.Text>
              <Button variant="dark" onClick={()=>addToCart(product)}>Add to cart</Button>
              
            </Card.Body>
          </Card>
  );
}

export default ProductCard;