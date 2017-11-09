import React, { Component } from 'react';
import App from './App.js';
import Item from './Item.js';

class ItemForm extends Component {
  constructor(props){
    super(props);

    this.state={
      name:"",
      price:""
    };
  }
  render() {
    return (
      <form className="ItemForm"
        onSubmit={this.handleSubmit.bind(this)}>
        <h2>Add an Item</h2>
			                <p>

			                </p>
			                <p>
			                    <label>item</label>
			                    <input value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
			                </p>
			                <p>
			                    <label>cost</label>
			                    <input type="cost" value={this.state.price} onChange={this.handlePriceChange.bind(this)}/>
			                </p>
			                <p className="ItemForm__button-bar">
			                    <button type="submit">Add</button>
			                </p>
			            </form>



    );
  }
  handleNameChange(event) {
			        this.setState({

			            name: event.target.value
			        });
			    }

			    handlePriceChange(event) {
			        this.setState({
			            price: parseInt(event.target.value)
			        });
			    }

			    handleSubmit(event) {

			        event.preventDefault();

			        this.props.onSubmit({
			            name: this.state.name,
			            price: this.state.price

			        });

			        this.setState({
			            name: "",
			            price: ""

			        })

			    }

}






export default ItemForm;
