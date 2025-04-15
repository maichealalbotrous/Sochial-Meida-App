import './App.css';
import {Routes,Route, Navigate } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import SignIn from './Compenent/SignIn/SignIn';
import SignUp from './Compenent/SignUp/SignUp';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <main>
     <Routes>
        {/* Defult Login/SignUp */}
        <Route path="/" element={<Navigate to="/Login/SignUp" />} />
        
        {/*  LoginPage */}
        <Route path="/Login" element={<Login />}>
          <Route path="SignUp" element={<SignUp />} />
          <Route path="SignIn" element={<SignIn />} />
        </Route>

        {/* HomePage*/}
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>

    </main>
  );
}

export default App;
