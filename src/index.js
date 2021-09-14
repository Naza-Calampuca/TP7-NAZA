import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import TimePicker from 'react-time-picker';




class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  constructor(props) {
    super(props);
    this.state = { dueño: '' };
  }

  myChangeHandler = event => {
    this.setState({ username: event.target.value });
  };

  myChangeHandler2 = event => {
    this.setState({ dueño: event.target.value });
  };

  render() {
    return (
 
      
      <form>
          <h1> TP7 </h1>

        <p>Enter your mascota:</p>

        <input type="text" onChange={this.myChangeHandler} />

     
        <p>Enter your dueño:</p>

        <input type="text" onChange={this.myChangeHandler2} />


        <h1>sintomas: </h1>
        <p>Enter your sintomas:</p>

        <sintomas>
      <textarea value={this.state.description} />
      </sintomas>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
      <button
      >
      Agregar Turno
      </button>


      <h1>mascota: {this.state.username}</h1>
      <h1>dueño: {this.state.dueño}</h1>





      </form>
      
    );


    
  }

  
}

//HORA Y FECHA NO FUNCIONAN

//FECHA
const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

//HORA
function MyApp() {
  const [value, onChange] = useState('10:00');

  return (
    <div>
      <TimePicker
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

ReactDOM.render(<MyForm />, document.getElementById('root'));


//NOSE COMO PONER BACKGROUND COLOR

