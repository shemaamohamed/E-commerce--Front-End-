import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCard from '../components/ProductCard';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useEffect } from 'react';
import { setProducts } from '../store/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import Loader from './../components/loader';
import { useState } from 'react';
function Cardspage() {
  const dispatch=useDispatch();
  const products=useSelector((state)=>state.products||[]);
  const[loading,setLoading]=useState(false);
 
  useEffect(()=>{
    setTimeout(() => {
      axios.get('https://fakestoreapi.com/products').then((res)=>{
        console.log(res.data);
        dispatch(setProducts(res.data));
        setLoading(true);
      }).catch((err)=>{
        setLoading(false);
        toast.error("Something went wrong")
      })
    }, 2000);
    
  },[dispatch])
  return (
    <Container className='p-3 mt-3'>
      {
<<<<<<< HEAD
         products.length==0 ?( <div className='loader'><Loader></Loader></div>):
=======
         products.length===0 ?( <div className='loader'><Loader></Loader></div>):
>>>>>>> 8f68d25c1f494791405fd49ba7a13bc8f03cd8ff
         !loading?( <div className='loader'><Loader></Loader></div>):
       (<>
         <Row xs={1}  md={2} lg={3} xl={3} xxl={4} className="g-4" style={{marginTop:'5px'}}>
             {products.map((item, idx) => (
               <Col style={{margin:'auto'}} key={idx}>
                 <ProductCard product={item}/>
               </Col>
             ))}
         </Row>
       </>)

      }
     
    </Container>

    
  );
}

export default Cardspage;