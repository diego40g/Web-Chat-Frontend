import './App.css';
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Chat from "./components/Chat/Chat";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <h1>1</h1>
      <div className="App">
        <Routes>
          <Route path='/' element={<Chat/>} />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
