import React, { component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Machines from './pages/Machines';
import box1 from './pages/box1'
// import Sidebar from './components/Sidebar';

function App(){
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/dashboard'  component = {Dashboard} />
        <Route  path='/inventory'  component = {Inventory} />
        <Route  path='/machines'  component = {Machines} />
        <Route path='/box1' component = {box1} />
      </Switch>
    </Router>
    </>
  );
}



export default App;
