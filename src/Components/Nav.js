import React from 'react';

const Nav = ({ items, activeNav, handleNavChange }) => {
  const complete=items.filter(item=>item.checked)
  const notComplete=(items.length)-(complete.length);
 
  
  return (
   <nav className="Nav">
   <ul>
     <li
       className={activeNav === 'all' ? 'active' : ''}
       onClick={() => handleNavChange('all')}
     >
       Total Items <span>{items.length}</span>
     </li>
     <li
       className={activeNav === 'completed' ? 'active' : ''}
       onClick={() => handleNavChange('completed')}
     >
       Completed <span>{complete.length}</span>
     </li>
     <li
       className={activeNav === 'notCompleted' ? 'active' : ''}
       onClick={() => handleNavChange('notCompleted')}
     >
       Not Completed <span>{notComplete}</span>
     </li>
   </ul>
 </nav>
  )
}

export default Nav