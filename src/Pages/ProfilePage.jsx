import { useEffect, useState } from 'react';

function ProfilePage  ()
{

    const [users, SetUsers] = useState([]);
    
      // State to handle loading status
      const [loading, setLoading] = useState(true);
    

      // useEffect hook to fetch products on component mount

  // Axios
  useEffect(() => {
    // Async function to fetch product data from API
    const fetchAPI = async () => {
      const response = await fetch("https://fakestoreapi.in/api/users"); // Fetch data from API
      const data = await response.json(); // Parse JSON response
      SetUsers(data.users); // Update product state
      setLoading(false); // Set loading to false once data is loaded
      console.log(data.users); // Log products to console for debugging
    };

    fetchAPI(); // Call the fetch function
  }, []); // Empty dependency array means this runs once when component mounts

  // Show loading message while data is being fetched
  if (loading) return <div>Loading products...</div>;


    return(
        
      <>
           
             {users.map(user => (
          <div key={user.id}> {/* Use product.id as key for optimal rendering */}
          <h2>First Name : {user.name.firstname}</h2>
          <h2>Last Name : {user.name.lastname}</h2>
          <p>City : {user.address.city}</p>
          <p>Street : {user.address.street}</p>
            <p>Zipcode : {user.address.zipcode}</p>
               <p>Phone : {user.phone}</p>
         
           <hr /> {/* Line between items */}
        </div>
      ))}

        </>
    )

}

export default ProfilePage