import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import ProductCard from '../components/ProductCard';
import Container from 'react-bootstrap/Container';
import {  useCart } from './../store/cart-context';
import ProductItem from '../components/ProductItem';
import { useAuth } from '../store/auth-context';
import Button from 'react-bootstrap/Button';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Item() {
  const {cart }=useCart();
  const{user}=useAuth();
  const sum =cart.reduce((prev,item)=>{
    return prev+item.price*item.quantity;

},0);
  return (
    <Container className='p-3'>
      <h2 style={{textAlign:'center'}}>Cart List</h2>
      {/* <hr/> */}
      <Row xs={1} className="g-4">
      {cart.map((item, idx) => (
        <Col key={idx}>

          <ProductItem product={item}/>
        </Col>
      ))}
    </Row>
    <hr/>
    <p style={{textAlign:'center'}}> Total:{sum}EGP</p>
    <hr/>
    <Stack gap={3}>
      {user?(<Button   variant="success">Checkout</Button> ) :(<Button as={Link} to='/login'  >Login</Button> )}
      
        
        

    </Stack>
     
    

    </Container>

    
  );
}

export default  Item;