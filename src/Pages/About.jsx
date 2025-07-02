
function About  ()
{

    const getLogin = localStorage.getItem("isLogin")

   

    return(
        <>
         {getLogin === "Login" ? (<div><p>Login</p></div>):(<div><p>Login Fail</p></div>)}
        
            
            <div> <h1> This is About </h1> </div>

            </>
        
    )

}

export default About