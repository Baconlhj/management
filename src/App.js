import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Customer from './Compnents/Customer';

const customers = [
  {
  'id': 1,
  'img': 'https://placeimg.com/64/64/1',
  'name': '홍귈동',
  'birth': '950503',
  'gender': '남자',
  'job': '대학생'},
  {
  'id': 2,
  'img': 'https://placeimg.com/64/64/2',
  'name': '고길동',
  'birth': '610205',
  'gender': '남자',
  'job': '백수'},
  {
    'id': 3,
    'img': 'https://placeimg.com/64/64/3',
    'name': '이정민',
    'birth': '960122',
    'gender': '남자',
    'job': '휴학생'}
]

class App extends Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello Again, React! hoho
          </p>
        </header>
        <div>
          {
            customers.map(c => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  img={c.img}
                  name={c.name}
                  birth={c.birth}
                  gender={c.gender}
                  job={c.job}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
