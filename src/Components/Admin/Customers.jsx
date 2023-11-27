import { getOrderStatus } from '../../lib/helpers/index';
import { useNavigate } from 'react-router-dom';
const Customer = [
  {
    id: '1',
    name: 'tShirley A. Lape',
    customer_id: '23143',
    customer_name: 'Shirley A. Lape',
    customer_email: 'shirley@shirley',
    status: 'active',
    address: 'Cottage Grove, OR 97424',
  },
  {
    id: '2',
    name: 'tShirley A. Lape',
    customer_id: '23143',
    customer_name: 'Shirley A. Lape',
    customer_email: 'shirley@shirley',
    status: 'active',
    address: 'Cottage Grove, OR 97424',
  },
];
function Customers() {
  const navigate = useNavigate();
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Cutomers</strong>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full mt-4">Adddddddddd</button>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700 ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Status</th>
              <th className="flex flex-row">Action</th>
            </tr>
          </thead>
          <tbody>
            {Customer.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.customer_name}</td>
                <td>{customer.customer_email}</td>
                <td>{customer.address}</td>
                <td>{getOrderStatus(customer.status)}</td>
                <tr>
                  <td>
                    <button onClick={() => navigate('/edit-customers')} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Delete</button>
                  </td>
                </tr>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
