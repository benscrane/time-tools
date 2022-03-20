import React, {useState, useEffect} from 'react';
import { supabase } from './supabaseClient';
import { Auth } from './components/Auth';
import { Account } from './components/Account';
import logo from './logo.svg';
import './App.css';

function App() {
  const [session, setSession] = useState<any | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
      </header>
    </div>
  );
}

export default App;
