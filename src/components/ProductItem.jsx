import Button from 'react-bootstrap/Button';
import { useCart } from './../store/cart-context';
import "../style/ProductCard.css"
import { Stack } from 'react-bootstrap';



function ProductItem({product}) {
  const {addToCart , removeFromCart}=useCart()




  return (
    <>
    <hr/>
    <Stack  direction="horizontal" className="gap-3">
        <img src="https://placehold.co/600x400" style={{ width: "8rem" }} alt="" />
        <Stack className="align-items-start">
        <h5>{product.name}</h5>
        <text className="text-start text-body-secondary fs-6">
            {product.description}
        </text>
        <text className='text-body-secondary fs-6 fw-light'> Brand: <small className=' fw-light'>{product.brand}</small></text>
        <text className='text-body-secondary fs-6 fw-light'> category: <small className=' fw-light'>{product.category}</small></text>

        </Stack>
        <Stack>
        <p className="text-nowrap fw-bolder">{product.price} EGP</p>
        <hr/>
        <p className="text-nowrap fw-bolder"> Total Price : {product.price*product.quantity}EGP</p>
        <div style={{display:'flex',justifyContent:"right"}} >
                                

                <Button variant="danger" style={{width: "2rem",borderRadius:'0px'}} onClick={()=>removeFromCart(product)}>-</Button>{' '}
        
                <input
                                        type="text"
                                        value={product.quantity}  // Use value attribute instead of children
                                        readOnly  // If you don't want the user to edit it
                                        style={{ width: "2rem", textAlign: "center" }}
                                        />{' '}
                <Button variant="primary" style={{width: "2rem",borderRadius:'0px'}} onClick={()=>addToCart(product)}>+</Button>{' '}
        
        
        
        
        
                        </div>


        </Stack>
    </Stack>


    </>
    
    
  );
}

export default ProductItem;