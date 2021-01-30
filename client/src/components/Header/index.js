import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import React from 'react';


function Header() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header>
            <div className='nav-wrap'>
                <Link to="/" className="nav-title">
                    <h1>Warp <i>Speed</i></h1>
                </Link>
                <nav className='navbar'>
                    {
                        <>
                            <Link to='/courses' className='list-item'>Courses</Link>
                            <Link to='/profile' className='list-item'>Profile</Link>
                            <Link to='/dashboard' className='list-item'>Dashboard</Link>
                            <Link to='/logout' className='list-item' onClick={logout}>logout</Link>
                        </>
                    }
                </nav>
            </div>
        </header>
    );
}

export default Header;