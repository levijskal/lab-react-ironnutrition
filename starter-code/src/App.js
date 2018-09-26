import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox.js'

class App extends Component {
constructor(props) {
  super(props)
  this.state={
    foodsList: foods
  }
}



showFoods = () => {
return this.state.foodsList.map((eachFood, index) => {
  return <FoodBox key={index} foodName ={eachFood.name} calories={eachFood.calories} image={eachFood.image}/>
})  
}

  render() {
    return (
      <div className="App">

<form>
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text"/>
  </div>
</div>

<div class="field">
  <label class="label">Calories</label>
  <div class="control">
    <input class="input" type="number"/>
  </div>

  <button>submit</button>
</div>
</form>

{this.showFoods()}

      
      
      
      </div>
    );
  }
}

export default App;
