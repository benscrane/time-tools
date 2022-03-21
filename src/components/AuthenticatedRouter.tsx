import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Account } from './Account';

interface AuthenticatedRouterProps {
    session: any;
}

export const AuthenticatedRouter: React.FC<AuthenticatedRouterProps> = ({session}) => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/account" element={<Account session={session}/>} />
        </Routes>
    );
};
