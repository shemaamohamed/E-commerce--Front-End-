import '../style/rating.css';

function Rating({ productId }) {
  return (
    <div className="rating">
      <input value="5" name={`rating-${productId}`} id={`star5-${productId}`} type="radio" />
      <label htmlFor={`star5-${productId}`}></label>
      
      <input value="4" name={`rating-${productId}`} id={`star4-${productId}`} type="radio" />
      <label htmlFor={`star4-${productId}`}></label>
      
      <input value="3" name={`rating-${productId}`} id={`star3-${productId}`} type="radio" />
      <label htmlFor={`star3-${productId}`}></label>
      
      <input value="2" name={`rating-${productId}`} id={`star2-${productId}`} type="radio" />
      <label htmlFor={`star2-${productId}`}></label>
      
      <input value="1" name={`rating-${productId}`} id={`star1-${productId}`} type="radio" />
      <label htmlFor={`star1-${productId}`}></label>
    </div>
  );
}

export default Rating;
