import React, { Component } from 'react';
import ItemForm from './ItemForm.js';
import Item from './Item.js';

class App extends Component {
  constructor(props) {
        super(props);
        // set initial contacts on page load
        this.state = {
            Items: [
                {
                    name: "",
                    price:""
                },
                {
                    name: "",
                    price:""
                }
              ]
            };
          }
  render() {

    const Items = this.state.Items.map((item, index) => (
			            <Item key={item.name} Items={item} onDelete={() => this.removeItem(index)}/>
			        ));

    return (
      <div className="App">
                <h1>Shopping List</h1>
                <div className="App__Items">
                  {Items}

                    <ItemForm onSubmit={this.addItem.bind(this)}/>

                </div>
            </div>
    );
  }
  //add items (differientiate between slice and splice)
  addItem(item){
    this.setState( prevState => {
      const newItem = prevState.Items.slice(0);
      newItem.push(item);

      return {Items: newItem};
    });
  }
  removeItem(index){
    this.setState(prevState=>{
    const newItem = prevState.Items.slice();
    newItem.splice(index,1);

    return {Items: newItem};
  })
}
}

export default App;
