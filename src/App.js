import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';

import { AppContextProvider } from './context/AppContext';

function App() {



  return (
    <div>
      <AppContextProvider>
        <Router basename="/">
          <Switch> 
            <Route exact path="/" component={Home}/>
            <Route path="/Add" component={Add}/>
            <Route path="/Edit/:postID" component={Edit}/>
          </Switch>
        </Router>
      </AppContextProvider>
    </div>
  );
}
export default App;