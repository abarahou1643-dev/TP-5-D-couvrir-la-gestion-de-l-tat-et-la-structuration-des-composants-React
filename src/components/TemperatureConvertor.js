import { useState, useEffect } from 'react';
import TemperatureInput from './TemperatureInput';

function TemperatureConvertor() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [kelvin, setKelvin] = useState('');
    const [activeInput, setActiveInput] = useState('celsius');
    const [history, setHistory] = useState([]);

    useEffect(() => {
        if (activeInput === 'celsius' && celsius !== '') {
            const c = parseFloat(celsius);
            setFahrenheit((c * 9/5 + 32).toFixed(2));
            setKelvin((c + 273.15).toFixed(2));
        } else if (activeInput === 'fahrenheit' && fahrenheit !== '') {
            const f = parseFloat(fahrenheit);
            setCelsius(((f - 32) * 5/9).toFixed(2));
            setKelvin(((f - 32) * 5/9 + 273.15).toFixed(2));
        } else if (activeInput === 'kelvin' && kelvin !== '') {
            const k = parseFloat(kelvin);
            setCelsius((k - 273.15).toFixed(2));
            setFahrenheit(((k - 273.15) * 9/5 + 32).toFixed(2));
        } else if (celsius === '' && fahrenheit === '' && kelvin === '') {
            setFahrenheit('');
            setKelvin('');
        }
    }, [celsius, fahrenheit, kelvin, activeInput]);

    const handleCelsiusChange = (value) => {
        setCelsius(value);
        setActiveInput('celsius');
    };

    const handleFahrenheitChange = (value) => {
        setFahrenheit(value);
        setActiveInput('fahrenheit');
    };

    const handleKelvinChange = (value) => {
        setKelvin(value);
        setActiveInput('kelvin');
    };

    const clearAll = () => {
        setCelsius('');
        setFahrenheit('');
        setKelvin('');
        setHistory([]);
    };

    return (
        <div className="temperature-convertor">
            <div className="convertor-explanation">
                <h3>🔄 Lifting State Up</h3>
                <p>L'état est géré par le composant parent et partagé avec les enfants</p>
            </div>

            <div className="temperature-inputs">
                <TemperatureInput
                    temperature={celsius}
                    onTemperatureChange={handleCelsiusChange}
                    unit="celsius"
                    label="Celsius"
                    symbol="°C"
                    icon="🌡️"
                    active={activeInput === 'celsius'}
                />

                <TemperatureInput
                    temperature={fahrenheit}
                    onTemperatureChange={handleFahrenheitChange}
                    unit="fahrenheit"
                    label="Fahrenheit"
                    symbol="°F"
                    icon="🇺🇸"
                    active={activeInput === 'fahrenheit'}
                />

                <TemperatureInput
                    temperature={kelvin}
                    onTemperatureChange={handleKelvinChange}
                    unit="kelvin"
                    label="Kelvin"
                    symbol="K"
                    icon="🔬"
                    active={activeInput === 'kelvin'}
                />
            </div>

            {(celsius || fahrenheit || kelvin) && (
                <div className="temperature-results">
                    <div className="results-header">
                        <h4>📊 Résultats de Conversion</h4>
                        <button className="clear-button" onClick={clearAll}>
                            🗑️ Effacer
                        </button>
                    </div>

                    <div className="conversion-display">
                        <div className="conversion-item">
                            <div className="conversion-value">{celsius || '0'}</div>
                            <div className="conversion-unit">°C</div>
                        </div>

                        <div className="conversion-arrow">⇄</div>

                        <div className="conversion-item">
                            <div className="conversion-value">{fahrenheit || '32'}</div>
                            <div className="conversion-unit">°F</div>
                        </div>

                        <div className="conversion-arrow">⇄</div>

                        <div className="conversion-item">
                            <div className="conversion-value">{kelvin || '273.15'}</div>
                            <div className="conversion-unit">K</div>
                        </div>
                    </div>
                </div>
            )}

            <div className="concept-info">
                <p>🎯 <strong>Lifting State Up</strong> : L'état est remonté au parent et partagé avec tous les enfants</p>
            </div>
        </div>
    );
}

export default TemperatureConvertor;