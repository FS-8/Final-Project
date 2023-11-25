import { Link } from 'react-router-dom';

function Products() {
  return (
    <div>
      <p>this products</p> <Link to="/admin"> Go to dashboard</Link>
    </div>
  );
}

export default Products;
