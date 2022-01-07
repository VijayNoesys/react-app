import react,{ useState } from "react";
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: "admin@noesyssoftware.com",
    password: "admin"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details =>{
    if (details.email == adminUser.email && details.password == adminUser.password && details.name != ""){
      setUser({
        name:details.name,
        email: details.email
      });
    }else if(details.name == ""){
        setError("*Enter the Name");
    }
    else{ 
      //setError("Details not found");
      setError("*Invalid Username or password");
    }
  }

  const Logout = () => {
    setUser({name: "", email: ""});
    setError("");
  }
  return (
    <div className="App">
      {(user.email !="") ? (
           <div className="Noesys">
             <h2>
               Hey, <span>{user.name}</span> Welcome to Noesys
             </h2>
              <div className="table-group">
                        <label htmlFor="name">Name:<span>{user.name}</span></label><br/>
                        <label htmlFor="email">Email:<span>{user.email}</span></label><br/>
                        <label htmlFor="age">Age:22</label><br/>
                        <label htmlFor="dob">Date of Birth:07/12/1999</label><br/>
                        <label htmlFor="Role">Role:Trainee</label>
              </div>
             <button onClick={Logout}>Logout</button>
             
           </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
