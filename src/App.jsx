import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // State to store the product list
  const [product, SetProduct] = useState([]);

  // State to handle loading status
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch products on component mount
  useEffect(() => {
    // Async function to fetch product data from API
    const fetchAPI = async () => {
      const response = await fetch("https://fakestoreapi.in/api/products"); // Fetch data from API
      const data = await response.json(); // Parse JSON response
      SetProduct(data.products); // Update product state
      setLoading(false); // Set loading to false once data is loaded
      console.log(data.products); // Log products to console for debugging
    };

    fetchAPI(); // Call the fetch function
  }, []); // Empty dependency array means this runs once when component mounts

  // Show loading message while data is being fetched
  if (loading) return <div>Loading products...</div>;

  // Render product list once loading is complete
  return (
    <>
      {product.map(product => (
        <div key={product.id}> {/* Use product.id as key for optimal rendering */}
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}

      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;