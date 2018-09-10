import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
// import { v4 } from 'uuid';
import KegList from './KegList';



class App extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    // this.state= {
    //   masterKegList: {},
    //   selectedKeg: null
    // };
  }

  render(){
    return (
      <div className='container'>
        <Header/>
        <Switch>
          <Route exact path ='/' component={KegList}/>
          <Route exact path='/admin' component ={Admin}>
        </Switch>
      </div>
    );
  }
}

export default App;
