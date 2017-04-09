import React, { Component } from 'react';

import RadioButtonsArea from './RadioButtonsArea';
import Decorator from './Decorator';
import AutoComplete from './AutoComplete';
import Button from './Button';
import style from './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioButtonsData: [{
        key: 'Hola',
        value: 'Mundo',
      }, {
        key: 'Wad',
        value: 'duuup',
      }, {
        key: 'Foo',
        value: 'Bar',
      }, {
        key: 'Fizz',
        value: 'Buzz',
      }],
    };
  }
  render() {
    return (
      <Decorator>
        <RadioButtonsArea data={this.state.radioButtonsData} />
        <AutoComplete />
        <Button legend=':D' />
        <Button legend=':D' />
        <Button legend=':D' />
      </Decorator>
    );
  }
}

export default App;
