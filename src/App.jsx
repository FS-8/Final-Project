import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Layout from './Components/Shared/Layout';
import Dashboard from './Components/Admin/Dashboard';
import Products from './Components/Admin/Products';
import Loginadmin from './Components/Admin/Logindmin';

function App() {
  return (
    <div>
      {/* user-route */}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<div>this landing page</div>} />
      </Routes>

      {/* admin-route */}
      <Routes>
        <Route path="admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>
        {/* admin-login-route */}
        <Route path="loginadmin" element={<Loginadmin />} />
      </Routes>
    </div>
  );
}

export default App;
