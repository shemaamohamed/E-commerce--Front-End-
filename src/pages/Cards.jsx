import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCard from '../components/ProductCard';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../components/loader';



function Cards() {
  const [products,setProducts]=useState();
  function getProduct(){
    axios.get(process.env.REACT_APP_BASE_URL + "product").then((res)=>{
      console.log(res.data);
      setProducts(res.data);
    })
  }
  useEffect(()=>{
    getProduct();
  },[])
 

 

  return (
    <Container className='p-3 mt-3'>
      <h2 style={{textAlign:'center'}}>Product List</h2>
      <hr/>
      {!products &&( <div className='loader'><Loader></Loader></div>)}
      {products &&(<>
        <Row xs={1}  md={2} lg={3} xl={4} className="g-4">
            {products.map((item, idx) => (
              <Col key={idx}>
                <ProductCard product={item}/>
              </Col>
            ))}
        </Row>
      </>)}
      
     

    </Container>

    
  );
}

export default Cards;