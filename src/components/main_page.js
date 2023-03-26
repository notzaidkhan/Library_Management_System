import React from 'react';
import Search from './search';
import Bookitem from './bookitem';


const main_page = () => {
  return (
    <div className='sss'>
        <Search/>
        <ul>
            <li><Bookitem title="Fault in our Stars"/></li>
            <li><Bookitem title="A Song of ice and fire"/></li>
        </ul>
    </div>
  )
}


export default main_page;
