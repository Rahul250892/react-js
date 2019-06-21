import React from 'react';

class Login extends React.Component{

    render(){
        return(
            <div className='container'>
               <form >
                   <h1>Login Form</h1>
                  
                   <input type="text" name="email" placeholder ="Email"></input><br/>
                   <input type="password" name="password" placeholder ="Password"></input><br/>
                   <input type="Submit" value="submit"></input>

               </form>
               
            </div>
        )
    }

}

export default Login;