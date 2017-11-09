import React, { Component } from 'react';

import ItemForm from './ItemForm.js';
import App from  './App.js';

class Item extends Component {
  render() {
    return (
      <div className="Item">


      <div className="ListName"> {this.props.Items.name}</div>
			                <div className="ListPrice"> {this.props.Items.price || "No price"} </div>
			                <button className="ListDeleteButton"
			                        title={"Delete " + this.props.Items.name}
			                        onClick={this.props.onDelete}>
			                    <i></i>
			               X </button>
			            </div>
    );
  }
}











export default Item;
