import React, { useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../supabaseClient';

interface AccountProps {
    session: Session;
}

export const Account: React.FC<AccountProps> = ({ session }) => {
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        getProfile();
    }, [session]);

    const getProfile = async () => {
        try {
            setLoading(true);
            const user = supabase.auth.user();

            let { data, error, status } = await supabase
                .from('profiles')
                .select('username')
                .eq('id', user!.id) // shouldn't have to short circuit this
                .single();

            if (error && status !== 406) {
                throw error;
            }

            if (data) {
                setUsername(data.username);
            }
        } catch (err) {
            alert((err as any).message);
        } finally {
            setLoading(false);
        }
    };

    const updateProfile = async () => {    
        try {
          setLoading(true);
          const user = supabase.auth.user();
    
          const updates = {
            id: user!.id,
            username,
            updated_at: new Date(),
          };
    
          let { error } = await supabase.from('profiles').upsert(updates, {
            returning: 'minimal', // Don't return the value after inserting
          });
    
          if (error) {
            throw error;
          }
        } catch (err) {
          alert((err as any).message);
        } finally {
          setLoading(false);
        }
      };

    return (
        <div>
            {loading ? (
                'Loading'
            ) : (
                <div>
                <div>
                    Email: { session.user?.email }
                </div>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input type='text' value={username || ''} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <button onClick={updateProfile}>Update</button>
                </div>
            )}
        </div>
    )
}