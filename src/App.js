import React, { useState } from 'react';
import './App.scss';

const App = () => {
  const [action,setAction]=useState("Home");
  return (
    <div className="App">
      <div className='home'>
      <nav>
        <ul><li><a href='#' onClick={()=>{setAction("Sign Up")}} >Sign Up</a></li><li><a href='#' onClick={()=>{setAction("Log In")}} >Log In</a></li></ul>
      </nav>
      <div className='hero' id='hr'>
        <strong>Ace your sport. Find your tribe.</strong>
        <p>Discover sports events, enthusiasts and teams near you. Enter the world of sports and create your own teams, showcase your skills and compete with each other.</p>
      </div>
      </div>
      <div className='sign-in' id='sign'>
        <form>
          <button onClick={()=>{setAction("Home")}} >X</button>
          <h1>{action}</h1>
          <label>Full Name</label>
          <input type='text' placeholder='ABC' required></input>

          <label>Email</label>
          <input type='email' placeholder='ABC@mail.com' required></input>


          <label>Password</label>
          <input type='password' placeholder='pass@#832' required></input>

          <label>Contact No</label>
          <input type='number' placeholder='123456789' required></input>
          <input type='submit' value="Submit"></input>
        </form>
      </div>
      
      
      <div className='log-in' id='log'>
        <form>
        <button type='button'onClick={()=>{setAction("Home")}} >X</button>
        <h1>{action}</h1>
          <label>Email</label>
          <input type='email' placeholder='ABC@mail.com' required></input>


          <label>Password</label>
          <input type='password' placeholder='pass@#832' required></input>
          <input type='submit' value="Submit"></input>
         
        </form>
   
      </div>
      <style jsx >{`
      .App .home{
        display:${action==="Home"? "block":"none"};
      }
      .App .sign-in{
        display:${action==="Sign Up"? "flex":"none"};
      }
      .App .log-in{
        display:${action==="Log In"?"flex":"none"};
      }

      `}</style>
    </div>
    
  );
};


export default App;
