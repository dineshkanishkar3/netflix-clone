
import React from 'react';
import Home from './pages/home'
import { BrowserRouter as Router,Routes , Route } from 'react-router-dom';
import * as ROUTE from './constants/routes'
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Browse from './pages/browse';
import { IsUserRedirect,ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks/useAuth-Listener';
import './App.css';

function App() {
    // const user = null
    const {user}= useAuthListener()
  return (
    <Router>
    <Routes>
      <Route path={ROUTE.SIGN_IN} element={<IsUserRedirect user={user} redirect={ROUTE.BROWSE}/>}>
          <Route path={ROUTE.SIGN_IN} element={<SignIn/>}/>
      </Route>
    
      <Route path={ROUTE.SIGN_UP} element={<IsUserRedirect user={user} redirect={ROUTE.BROWSE}/>}>
          <Route path={ROUTE.SIGN_UP} element={<SignUp/>}/>
      </Route>
      <Route path={ROUTE.BROWSE} element={<ProtectedRoute user={user}/>}>
          <Route path={ROUTE.BROWSE} element={<Browse></Browse>}/>
      </Route>

      <Route path={ROUTE.HOME} element={<Home/>} />
    </Routes>
    </Router>
  );
}

export default App;
