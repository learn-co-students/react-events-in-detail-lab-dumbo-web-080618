// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component{
  
 
  
  
handleClick(event){
  event.persist();
  //console.log(event);
   return setTimeout(this.props.onDelayedClick,this.props.delay,event)
  
}
  
  
  render(){
    
    
    
    return(
      <div>
      <button onClick={this.handleClick.bind(this)}></button>
      </div>
      
      )
  }
  
  
}


export default DelayedButton;
