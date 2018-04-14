import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Router from './Route';
import Stylecss from '../public/styles/index.scss';


// class App extends Component() {
//     render(){
//         return(
//             <h1>Hello... Welcome to weconnect</h1>
//         );
//     }
// }

const App = () => {
    return(
    <div>
         <Router />
     </div>
        );
    
  
}
export default App;