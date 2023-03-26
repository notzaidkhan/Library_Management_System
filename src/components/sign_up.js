import React from 'react';


const sign_up = () => {
  return (
    <div className='lagin'>
      <form>
        <label for = "uname">Username:</label>
        <input type="text" name="uname" id="uname"></input>
        <label for = "pass">Password:</label>
        <input type="text" name="pass" id="pass"></input>
        <label for = "name">Name:</label>
        <input type="text" name="name" id="name"></input>
        <input type="submit" value="Create Account"></input>
      </form>
    </div>
  )
}


export default sign_up;
