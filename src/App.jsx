import './index.css';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Body from './Components/Body.jsx';
import Profile from './Components/Profile.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Login from './Components/Login.jsx';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Utils/firebase.js'; // Removed redundant "../src"
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './Utils/userSlice'; // Import Redux actions

const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    // Firebase Authentication Observer
  onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid, email, displayName })); // Store user in Redux
          } else {
            // User is signed out
            dispatch(removeUser());
          }
        });

  }, [dispatch]); // Dependency array includes `dispatch`

  return (
 
    <BrowserRouter>
    <Routes>
      {/* Parent Route (Body) */}
      <Route path="/" element={<Body />}>
        {/* Child Routes (Rendered inside <Outlet /> in Body.jsx) */}
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>

  );
};

export default App;
