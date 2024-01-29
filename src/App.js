import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          {
            user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
          }
        </Routes>
        <Routes>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;