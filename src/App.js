import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
// import Films from './containers/Films/Films';
import FilmContainer from './containers/Films/FilmContainer/FilmContainer';
// import Books from './containers/Books/Books';
import BookContainer from './containers/Books/BookContainer/BookContainer';
//import Singers from './containers/Singers/Singers';
import SingerContainer from './containers/Singers/SingerContainer/SingerContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />  
        <Route exact path="/" component={Home} />    
        {/* <Route path="/films" component={Films} />     */}
        {/* <Route path="/films" render={() => <Films title="The Films Page.." />} />     */}
        <Route path="/films" component={FilmContainer} />
        {/* <Route path="/books" component={Books} /> */}
        <Route path="/books" component={BookContainer} />
        {/* <Route path="/singers" component={Singers} /> */}
        <Route path="/singers" component={SingerContainer} />
      </div>
    );
  }
}

export default App;
