import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputWrapper from './components/Input/InputWrapper';
import InputPhoneNumber from './components/Input/InputPhoneNumber';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <form action="">
        <InputWrapper>
          {(props) => (
            <InputPhoneNumber
              {...props}
              value={phoneNumber}
              onChange={handleChange}
            />
          )}
        </InputWrapper>
      </form>
    </div>
  );
}

export default App;
