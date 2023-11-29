import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Shared/Layout';
import Dashboard from './Components/Admin/Dashboard';
import Products from './Components/Admin/Products';
import LoginAdmin from './Components/Admin/LoginAdmin';
import Orders from './Components/Admin/Orders';
import Settings from './Components/Admin/Settings';
import Customers from './Components/Admin/Customers';
import Profile from './Components/Admin/Profile';
import EditCustomers from './Components/Admin/EditCustomers';

function Admin() {
  return (
    <div>
      {/* admin-route */}
      <Routes>
        <Route path="admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* admin-login-route */}
        <Route path="login-admin" element={<LoginAdmin />} />
        <Route path="profile" element={<Profile />} />
        <Route path="edit-customers" element={<EditCustomers />} />
      </Routes>
    </div>
  );
}

export default Admin;