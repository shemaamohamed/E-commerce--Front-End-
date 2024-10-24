import 'bootstrap/dist/css/bootstrap.min.css';
import  Navv  from './components/Navv';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
<<<<<<< HEAD
import Homepage from './pages/Homepage';
import { Container } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import Cardspage from './pages/Cardspage';
import Itemspage from './pages/Itemspage';
=======
import { Container } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import Cardspage from './pages/Cardspage';
>>>>>>> 8f68d25c1f494791405fd49ba7a13bc8f03cd8ff
import { Provider } from 'react-redux';
import store from './store/redux-store';



function App() {
  
  
  return (
    <Provider store={store}>

    <BrowserRouter>
          <Navv/>
          <div className='App'>
            <Container>
               <Routes>
<<<<<<< HEAD
                  <Route path='/' element={<Homepage/>}/>
                  <Route path='/cards' element={<Cardspage/>}/>
                  <Route path='/items' element={<Itemspage/>}/>
=======
                  <Route path='/' element={<Cardspage/>}/>
>>>>>>> 8f68d25c1f494791405fd49ba7a13bc8f03cd8ff
                </Routes>
            </Container>
            <Toaster/>
          </div>
    </BrowserRouter>
    </Provider>

  );
}

export default App;
