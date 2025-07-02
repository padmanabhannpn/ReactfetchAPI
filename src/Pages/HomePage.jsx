

import {useNavigate}  from 'react-router-dom';

function HomePage  ()
{
    const navigate = useNavigate();

    localStorage.removeItem("isLogin")
    localStorage.clear();
    localStorage.setItem("isLogin","Login")

    return(
        
            <div> <h1> This is Home Page </h1> 
            
            
            {/* <button onClick={() => navigate('/profile')}> Go to profile page</button> */}
            <button onClick={() => navigate('/about')}> Go to profile page</button>
            </div>


        
    )

}

export default HomePage