import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <p>this dashboard</p> <Link to="products"> Go to products</Link>
    </div>
  );
}

export default Dashboard;
