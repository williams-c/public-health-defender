// App.jsx
import React from 'react';
import Title from './components/Title';
import Login from './components/Login'

const App = () => {
    return (
        <div className="container">

          <div className="app">

            <Title />

            <Login />

          </div>

        </div>
    );
}

export default App;