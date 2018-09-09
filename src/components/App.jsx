import React from 'react';
import Header from './Header'
import { Switch, Route } from 'react-router-dom';
import KegList from './KegList';


function App(){
  return (
    <div>
     <Header/>
    <Switch>
      <Route exact path ='/' component={KegList}/>
    </Switch>
    </div>
  );
}

export default App;
