import { useState } from "react";

const AppHook = () => {
    const [option, setOption] = useState('F')
    const [temperature, setTemperature] = useState('')
    const [temperatureConverted, setTemperatureConverted] = useState(null)
    const [result, setResult] = useState(null)

    const convert = () => {
        if (option === 'F') {
            setResult(((temperature - 32) * 5) / 9)
            setTemperatureConverted('°C')
        } else {
            setResult(((temperature * 9) / 5) + 32)
            setTemperatureConverted('°F')
        }
    }

    const showResult = () => {
        return <b>Resultado: {result}{temperatureConverted}</b>
    }

    return (
        <div>            
            
            <h1>Conversor de temperatura</h1>

            Temperatura
            <br/>
            <input type="number" name='temperature' onChange={event => setTemperature(event.target.value)}/> Celsius
            <input type="radio" name='Farenheit' value="F" checked={option === 'F'} onChange={event => setOption(event.target.value)}/> Farenheit
            <input type="radio" name='Celsius' value="C"  checked={option === 'C'} onChange={event => setOption(event.target.value)}/>
            <br/>
            <input type="button" value="Converter" onClick={convert}/>

        
            <br/>
            {showResult()}

        </div>
    )
    
}

export default AppHook;