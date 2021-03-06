 import React, {useState} from 'react';
 import Logo from '../components/noesysLogo.jpg'
 function LoginForm({Login, error}){
     const [details, setDetails] = useState({name:"", email:"", password:""});

     const submitHandler = e =>{
         e.preventDefault();

         Login(details);
     }

    return(
        <div className="form">
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <img src={Logo} width="100px" alt="img"/>
                    <h2>Login</h2>
                    {(error != "") ? (<div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={e=> setDetails({...details, name: e.target.value})} value={details.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e=> setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e=> setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="usertype">User:</label>
                        <input type="text" name="text" id="password" onChange={e=> setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div> */}
                    <input type="submit" value="Login"/>
                </div>
            </form>
        </div>
    )
 }

export default LoginForm;