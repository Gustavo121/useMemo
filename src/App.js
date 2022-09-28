import { useState, useMemo } from 'react';
import { products as productsData } from './buy.json';
import Product from './Product';
import ExampleTitle from './ExampleTitle';

function App() {
  const [products, setProducts] = useState(productsData);
  const [newProduct, setNewProduct] = useState('');
  const [title] = useState('TÍTULO DE EXEMPLO');

  function handleSubmit(event) {
    event.preventDefault();

    setProducts([...products, { name: newProduct }]);
  }

  const memorizedExampleTitle = useMemo(() => <ExampleTitle title={title} />, [title])

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
      {memorizedExampleTitle}
    </div>
  );
}

export default App;
