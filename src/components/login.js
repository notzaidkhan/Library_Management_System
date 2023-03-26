import React from 'react';


const login = () => {
  return (
    <div className='lagin'>
      <form>
        <label for = "uname">Username:</label>
        <input type="text" name="uname" id="uname"></input>
        <label for = "pass">Password:</label>
        <input type="text" name="pass" id="pass"></input>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  )
}


export default login;
