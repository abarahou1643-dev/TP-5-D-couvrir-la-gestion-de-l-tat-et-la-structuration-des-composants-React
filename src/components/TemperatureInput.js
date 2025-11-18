function TemperatureInput({
                              temperature,
                              onTemperatureChange,
                              unit,
                              label,
                              symbol,
                              icon,
                              active
                          }) {
    const handleChange = (e) => {
        onTemperatureChange(e.target.value);
    };

    return (
        <div className={`temperature-input-group ${active ? 'active' : ''}`}>
            <div className="input-header">
                <div className="input-icon">{icon}</div>
                <div className="input-info">
                    <label className="form-label">{label}</label>
                    <span className="input-symbol">{symbol}</span>
                </div>
                {active && (
                    <div className="active-indicator">
                        <div className="pulse-dot"></div>
                        Actif
                    </div>
                )}
            </div>

            <input
                type="number"
                value={temperature}
                onChange={handleChange}
                placeholder={`Température en ${symbol}`}
                className="form-input"
                step="0.1"
            />
        </div>
    );
}

export default TemperatureInput;