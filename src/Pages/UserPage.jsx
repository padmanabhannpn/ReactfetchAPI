import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserPage  ()
{

    const [users, SetUsers] = useState({});
    
      // State to handle loading status
      const [loading, setLoading] = useState(true);

      const{id} = useParams();

     
    

      // useEffect hook to fetch products on component mount

  // Axios
  useEffect(() => {
    // Async function to fetch product data from API
    const fetchAPI = async () => {
      const response = await fetch(`https://fakestoreapi.in/api/users/${id}`  ); // Fetch data from API
      const data = await response.json(); // Parse JSON response
      SetUsers(data.user); // Update product state
      setLoading(false); // Set loading to false once data is loaded
      console.log(data.user); // Log products to console for debugging
    };

    fetchAPI(); // Call the fetch function
  }, []); // Empty dependency array means this runs once when component mounts

  // Show loading message while data is being fetched
  if (loading) return <div>Loading products...</div>;


    return(
        
      <>
           

           <h2>First Name : {users.name.firstname}</h2>
          <h2>Last Name : {users.name.lastname}</h2>

             {/* {users.map(user => (
          <div key={user.id}> 
          
          <p>City : {user.address.city}</p>
          <p>Street : {user.address.street}</p>
            <p>Zipcode : {user.address.zipcode}</p>
               <p>Phone : {user.phone}</p>
         
           <hr /> 
        </div>
      ))} */}

        </>
    )

}

export default UserPage


//  <div key={user.id}>
//           <Link to={`/users/${user.id}`}>
//             {user.name.firstname} {user.name.lastname}
//           </Link>
//           <hr />
//         </div>