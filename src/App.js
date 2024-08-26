import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const json = JSON.parse(jsonInput);
      const res = await axios.post('http://localhost:5001/bfhl', json);
      setResponse(res.data);
      setError('');
    } catch (err) {
      setError('Invalid JSON or server error');
    }
  };

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOptions(
      selectedOptions.includes(value)
        ? selectedOptions.filter(opt => opt !== value)
        : [...selectedOptions, value]
    );
  };

  const filteredResponse = () => {
    if (!response) return null;
    const filtered = {};
    if (selectedOptions.includes('Alphabets')) filtered.alphabets = response.alphabets;
    if (selectedOptions.includes('Numbers')) filtered.numbers = response.numbers;
    if (selectedOptions.includes('Highest Lowercase Alphabet')) filtered.highest_lowercase_alphabet = response.highest_lowercase_alphabet;
    return filtered;
  };

  return (
    <div className="App">
      <h1>Frontend for REST API</h1>
      <textarea rows="4" cols="50" value={jsonInput} onChange={handleInputChange} placeholder='Enter JSON like {"data": ["A","1","b","2"]}' />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <>
          <div>
            <label>
              <input type="checkbox" value="Alphabets" onChange={handleOptionChange} /> Alphabets
            </label>
            <label>
              <input type="checkbox" value="Numbers" onChange={handleOptionChange} /> Numbers
            </label>
            <label>
              <input type="checkbox" value="Highest Lowercase Alphabet" onChange={handleOptionChange} /> Highest Lowercase Alphabet
            </label>
          </div>
          <pre>{JSON.stringify(filteredResponse(), null, 2)}</pre>
        </>
      )}
    </div>
  );
}

export default App;
