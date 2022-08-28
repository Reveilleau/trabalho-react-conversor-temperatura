import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      option: 'F',
      temperature: '',
      temperatureConverted: null,
      result: null
    }

  }

  onInputChanged(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  convert() {
    let resultConversion;
    let optionConverted;

    if (this.state.option === 'F') {
      resultConversion = ((this.state.temperature - 32) * 5) / 9
      optionConverted = '°C'
    } else {
      resultConversion = ((this.state.temperature * 9) / 5) + 32
      optionConverted = '°F'
    }

    this.setState({
      result: resultConversion,
      temperatureConverted: optionConverted
    })
  
  }

  showResult() {
    if(this.state.result) {
       return <b>Resultado: {this.state.result}{this.state.temperatureConverted}</b>
    }

    return null
  }
  
  
  render() {
    return (
      <div>
        <h1> Conversor de Temperatura </h1>

        Temperatura:
        <br/>
        <input type='number' name="temperature" onChange={event => this.onInputChanged(event)}/>
        
        <input type='radio' name="option" value="F" checked={this.state.option === 'F'} onChange={event => this.onInputChanged(event)}/> Farenheit
        
        <input type='radio' name="option" value="C" checked={this.state.option === 'C'} onChange={event => this.onInputChanged(event)}/> Celsius
        
        <br/>
        <br/>
        <input value='Converter' name='converter' type='button' onClick={() => this.convert()}/>

        <br/>
        {this.showResult()}

      </div>
    )
  }
}

export default App;
