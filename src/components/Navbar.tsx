import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

interface NavbarProps {
    loggedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ loggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        supabase.auth.signOut();
        navigate('/');
    };
    
    return (
        <header className="p-2 shadow flex justify-between mb-8">
            <Link to={loggedIn ? '/' : '/'}>Time Tools</Link>
            <nav className="flex space-x-2">
                {loggedIn ? (
                    <>
                        <button onClick={handleLogout}>Logout</button>
                        <Link to="/account">Account</Link>
                    </>
                ): (
                    <>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </nav>
        </header>
    );
};
