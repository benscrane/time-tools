import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Landing } from './Landing';
import { Auth } from './Auth';

export const PublicRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Auth />} />
        </Routes>
    );
};
