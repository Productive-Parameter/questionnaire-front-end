import React from "react";
import NavigationMUI from './MUI/NavigationMUI';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavigationMUI />
      <Switch>
        <Route exact path='/'></Route>
        <Route exact path='/etusivu'></Route>
        <Route exact path='/kyselyt'></Route>
        <Route exact path='/raportit'></Route>
      </Switch>
    </BrowserRouter>
        
  );
}

export default App;
