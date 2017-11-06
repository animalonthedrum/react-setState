import React, {Component} from 'react';
import Course from './Course'

class Coursesales extends Component {


somePrice(price){
  this.setState({total: this.state.total + price});
}


  constructor(props){
    super(props);

    this.state = {
      total: 0,
    };
    this.somePrice = this.somePrice.bind(this);
  }
  render(){
    console.log(this.props.items);
    let courses = this.props.items.map((item, i) => {
    return <Course name={item.name} price={item.price}
key={i} somePrice={this.somePrice} active={item.active} />
  });
    return(

      <div>
<h1>You can buy courses: </h1>
<div id='courses'>
{courses}
<p id="total"> Total: <b>${this.state.total}</b> </p>
</div>
  <Course />
      </div>

    );
  }

}

export default Coursesales;
