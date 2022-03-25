import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { supabase } from './supabaseClient';
import { Navbar } from './components/Navbar';
import { AuthenticatedRouter } from './components/AuthenticatedRouter';
import { PublicRouter } from './components/PublicRouter';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  const [session, setSession] = useState<any | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <Router>
      <Navbar loggedIn={!!session}/>
      <main className="container mx-auto">
        <ErrorBoundary>
          {!session ? <PublicRouter /> : <AuthenticatedRouter session={session} />}
        </ErrorBoundary>
      </main>
    </Router>
  )
};

export default App;
