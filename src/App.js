import { useState } from 'react';
import { products as productsData } from './buy.json';
import Product from './Product';

function App() {
  const [products, setProducts] = useState(productsData);
  const [newProduct, setNewProduct] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    setProducts([...products, { name: newProduct }]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={newProduct}
            onChange={(event) => setNewProduct(event.target.value)}
        />
      </form>
      <ul>
        {products.map((product) => (
          <Product key={product.name} name={product.name}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
