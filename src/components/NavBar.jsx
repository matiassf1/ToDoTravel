import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='flex justify-center space-x-4'>
          <ul className='flex justify-center space-x-4'>
            <NavLink
                className={ ({ isActive }) => `font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" `}
                to="/">
                Home
            </NavLink>
            <NavLink
                className={ ({ isActive }) => `font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" `}
                to="/contact">
                Contact Us
            </NavLink>
        
          </ul>
          
    </nav>
  );
};
