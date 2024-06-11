import React, { useState } from 'react';
import logo from '/home/gangadhar/quiz/src/main/resources/Quiz/src/components/layout/images/logistics.png'
import '/home/gangadhar/quiz/src/main/resources/Quiz/src/components/layout/Home.css';
import { useNavigate } from "react-router-dom";



const Home = () => {
    const navigate = useNavigate()
    const goToAdmin= () =>{
        if(uname === Admin.id && pword === Admin.password){
            navigate('/Admin');
        }
    }
    const goToUser= () =>{
        if(uname === User.id && pword === User.password){
            navigate('/User');
        }
    }


    const [name, setName] = useState("");
  const [uname, setUname] = useState("");
  const [pword, setPword] = useState("");

  const User = {
    id: "2406",
    password: "User@",
  };

  const Admin = {
    id: "3406",
    password: "Admin@",
  };

  function handleInput(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUname("");
    setPword("");
    navigate('/Admin');
    navigate('/User');
  }

  function authenticate(){
    if (uname === User.id && pword === User.password) {
      console.log("Success! Logged in.");
      
    } else {
      console.log("Invalid Employee ID and/or password");
    }
    handleSubmit(e);
  }

     
  return (

	<div className='main-container'>
			<img src={logo} alt=''  className='logo'/>
			<div className="container">
                    <div className="screen">
                        <div className="screen__content">
                            <form className="login">
                                <div className="login__field">
                                    <i className="login__icon fa fa-user"></i>
                                    <input type="input" className="username-input" placeholder="Employee ID" onChange={(e) => setUname(e.target.value)} value={uname} autoComplete="off" />
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fa fa-lock"></i>
                                    <input className="password-input" type="password" placeholder="Password" onChange={(e) => setPword(e.target.value)} value={pword} autoComplete="off" />
                                </div>
                                <div className='button-container'>
                                    <button className="button submit-btn" type="submit" onClick={(handleSubmit, authenticate, goToAdmin)}>
                                        <span className="button-ext">Admin</span>
                                    </button>	
                                    <button className="button submit-btn" type='submit' onClick={(handleSubmit, authenticate, goToUser)}>
                                        <span className="button-text">User</span>
                                    </button>				
                                </div>
                                
                            </form>
                        </div>
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>		
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>		
                    </div>
                </div>
	</div>
  );
};

export default Home;
