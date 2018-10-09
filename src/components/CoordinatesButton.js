// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component{
  
 handleClick(event){
    let arr = []
    arr.push(event.clientX,event.clientY)
    return this.props.onReceiveCoordinates(arr);
  }
  
  render(){
    
    
    
    return(
      <div>
      <button onClick={this.handleClick.bind(this)}></button>
      </div>
      
      )
  }
  
  
}


export default CoordinatesButton;