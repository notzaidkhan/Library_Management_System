import React from 'react';
import { PropTypes } from "prop-types";


const nav = ({title}) => {
  return (
    <div className='navbar'>
       <ul>
        <li style={{float:"left"}}>{title}</li> 
        <li><button>Signup</button></li> 
        <li><button>Login</button></li> 
        {/* <li><button>Home</button></li> */}
      </ul> 
    </div>
  )
}

nav.defaultProps = {
  title: "Fuddi"
}

nav.propTypes = {
  title: PropTypes.string.isRequired
}


export default nav;
