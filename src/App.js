import 'bootstrap/dist/css/bootstrap.min.css';
import  Navv  from './components/Navv';
import Cards  from './pages/Cards';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';

import Item from './pages/Itempage';
import CartProvider from './store/cart-context';
import AuthProvider from './store/auth-context';
import Login from './pages/Loginpage';
import { Container } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import SignupPage from './pages/SignupPage';



function App() {
  
  
  return (
    <BrowserRouter>

    <AuthProvider>
      <CartProvider>
          <Navv/>
          <div className='App'>
            <Container>
               <Routes>
                  <Route path='/signup' element={<SignupPage/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/' element={<Homepage/>}/>
                  <Route path='/cards' element={<Cards/>}/>
                  <Route path='/items' element={<Item/>}/>
                </Routes>
            </Container>
            <Toaster/>
         
          </div>
          
        </CartProvider>
    </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
