// App.jsx
import React from 'react';
import Title from './components/Title';
import SignUp from './components/Login';
import Game from './components/Game';

const App = () => {
    return (
        <div className="container">

          <div className="app">

            <Title />

            <Game />
            {/* <SignUp /> */}

          </div>

        </div>
    );
}

export default App;