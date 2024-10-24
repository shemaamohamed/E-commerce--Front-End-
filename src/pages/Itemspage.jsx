import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ProductItem from '../components/ProductItem';

import { useSelector } from 'react-redux';


function Itemspage() {
  const cart=useSelector((state)=>state.items||[])

  const sum =cart.reduce((prev,item)=>{
    return prev+item.price;

},0);
  return (
    <Container className='p-3'>
      <h2 style={{textAlign:'center'}}>Cart List</h2>
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
    
     
    

    </Container>

    
  );
}

export default  Itemspage;