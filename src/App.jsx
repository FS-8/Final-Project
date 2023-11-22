import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-cyan-900" style={{ backgroundImage: "url('../src/Assets/bg.png')" }}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
