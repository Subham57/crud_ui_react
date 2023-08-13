import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/SignUp';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path='/signup' element={<Signup />} ></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
