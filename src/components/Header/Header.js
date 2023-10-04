import React from 'react'
import './style.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

function Header() {
  const [user, loading, error] = useAuthState(auth);

  function handleLogout() {
    try {
      signOut(auth).then(() => {
        toast.success("Sign Out Successfully");
      }).catch((error) => {
        toast.error(error.message);
      });
    }
    catch (e) {
      toast.error(error);
    }
  }

  return (
    <div className='navbar'>
      <p className='logo'>
        The Pizza Hub
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        {
          user ? <>
            <NavLink to={'/'} className='link'>Home</NavLink>
            {/* <NavLink to={'profile'} className='link'>Profile</NavLink> */}
            <NavLink to={'cart'} className='link'>Cart</NavLink>
            <p className='link' onClick={handleLogout}>Logout</p>
          </> : <>
            <NavLink to={'/'} className='link'>Home</NavLink>
            <NavLink to={'login'} className='link'>Login</NavLink>
          </>
        }
      </div>
    </div>
  )
}

export default Header