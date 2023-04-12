import './Counter.css';
import { Component } from 'react';

class Counter extends Component {
  state = { valeu: 0 };
  handlIncrement = () => {
    this.setState(prevState=>{
        return{
            valeu: prevState.valeu+1,
        }
    });
  };

  handlDecrement = () => {  this.setState(prevState=>{
    return{
        valeu: prevState.valeu-1,
    }
});};

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value ">{Bad}</span>

        <div className="Counter__controls">
          <button type="button" onClick={this.handlIncrement}>
            Збільшити на 1
          </button>
          <button type="button" onClick={this.handlDecrement}>
            Зменшити на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
