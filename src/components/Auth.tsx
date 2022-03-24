import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export const Auth: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    const handleLogin: JSX.IntrinsicElements['button']['onClick'] = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const { error } = await supabase.auth.signIn({ email });
            if (error) throw error;
            alert('Check your email for the login link');
        } catch (err) {
            alert((err as any).error_description || (err as any).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            
            <input
                type='email'
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                />
            <button onClick={handleLogin}>Send Magic Link</button>
        </div>
    )
}