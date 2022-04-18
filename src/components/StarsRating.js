import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class StarsRating extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    this.props.searchR(nextValue)
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div className='RATE'>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default StarsRating