import React, { Component } from 'react';
import Login from './Component/Login';
import Registration from './Component/Registration';
class App extends Component{
   render(){
      return(
         <div>
            <h1>Main Page</h1>

<Login />
<Registration />

         </div>
      );
   }
}
export default App;