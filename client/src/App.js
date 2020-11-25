import React from 'react';
import { Input } from './components/input';
import { History } from './components/history';
import { Error } from './components/error';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="app">     
      <header className="app-header">
        <Navbar className="w-100" >
          <Input />       
        </Navbar>
      </header>
      <div className="body mt-5 ml-5 mr-5">  
      <Error></Error>    
        <History />
      </div>
    </div>
  );
}

export default App;
