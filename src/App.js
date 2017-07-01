import React, { Component } from 'react';
import Navbar from './components/navbar'
import Products from './components/products'
import './index.css';



class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <div className="container">
              <div className="row">
                  <div className="col-md-8">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem distinctio iusto quam sapiente tempore? Aut deserunt id laudantium molestias sunt! A eaque in natus nisi non odit quos tempore vero.
                  </div>
                  <Products/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
