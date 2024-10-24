import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Badge}  from 'react-bootstrap';
import { useCart } from './../store/cart-context';
import "../style/nav.css"
import { useAuth } from '../store/auth-context';
import LoginB from './LoginB';
import LogoutB from './LogoutB';


function Navv() {
  const {cart}=useCart();
  const{user}=useAuth();


  const iscard=()=>{
    localStorage.removeItem('product')
    localStorage.setItem('card',1)
    
  }
  const isproduct=()=>{
    localStorage.removeItem('card')
    localStorage.setItem('product',1)
   
  }
  

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/'  onClick={isproduct}>Home</Nav.Link>
            <Nav.Link as={Link} to='/cards'  onClick={isproduct}>Products</Nav.Link>
            <Nav.Link as={Link} to='/items' onClick={iscard} href="#deets">Cart {" "} 
              <Badge bg="warning" text="dark">
                 {cart.length ??0}
              </Badge>
            </Nav.Link>
          </Nav>
          {!user && 
             <LoginB/>
            }
            {user && 
              <LogoutB/>
            }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv;