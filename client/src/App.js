import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import ShoppingList from './components/shoppingList';
import AddItem from './components/addItem'
import store from './store';
import {Provider} from 'react-redux';
import React, { Component } from 'react';
import {loadUser} from './actions/authAction';



class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser())
  }
render(){
  return (
    <Provider store={store}>
      <div className="App">
      <NavBar/>
      <AddItem/>
      <ShoppingList/>
    </div>
     </Provider> 
  ); 
}
}

export default App;


