import React from 'react';

class Registration extends React.Component{

    render(){
        return(
            <div >
               <form >
                   <h1>Registration Form</h1>
                   <input type="text" name="firstname" placeholder ="FirstName"></input><br/>
                   <input type="text" name="lastname" placeholder ="LastName"></input><br/>
                   <input type="text" name="email" placeholder ="Email"></input><br/>
                   <input type="username" name="username" placeholder ="UserName"></input><br/>
                   <input type="password" name="password" placeholder ="Password"></input><br/>
                   <input type="Submit" value="submit"></input>
                   
               </form>
               
            </div>
        )
    }

}

export default Registration;