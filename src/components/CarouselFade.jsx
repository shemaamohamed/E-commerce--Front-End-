import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


function CarouselFade() {
    const background_image1 = require('../assests/B-meduim1.jpg');
    const background_image2 = require('../assests/B-meduim2.jpg');
    const background_image3 = require('../assests/B-meduim3.jpg');



  return (
    <Container>
    <Carousel >
      <Carousel.Item interval={1000}>
      <img  style ={{width:"100%" ,height:"80vh"}} src={background_image1} alt="First slide" />
        <Carousel.Caption>
          <h3>Welcome .....</h3>
          <p>providing a curated mix of everything from women's and men's clothing to apothecary</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img style ={{width:"100%",height:"80vh"}} src={background_image2} alt="First slide" />
        <Carousel.Caption>
          <h3>Fashion Clothing</h3>
          <p>Fashion is most often thought of as a global industry that is invested in anticipating what we wear and how we wish to appear to others</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style ={{width:"100%",height:"80vh"}} src={background_image3} alt="First slide" />
        <Carousel.Caption>
          <h3>Fashion Clothing</h3>
          <p>
          Find your style
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>

  );
}

export default CarouselFade;
