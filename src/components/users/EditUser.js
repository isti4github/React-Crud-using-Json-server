import React, {useState,useEffect}  from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router";


const EditUser= () =>{

    const navigate = useNavigate();
    const { id } = useParams();
    

    const [user,setUser]= useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3004/users/${id}`, user);
    navigate('/');
  };


  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
            <h4 className="text-center m-4">Edit User</h4>
            <form onSubmit={e => onSubmit(e)}>
                 <div className="form-group m-2">
                     <input 
                     type="text" 
                     className="form-control form-control-lg"
                     placeholder="Your name"
                     name="name"
                     value={name}
                     onChange={e => onInputChange(e)}
                     />

                 </div>

                 <div className="form-group m-2">
                     <input 
                     type="text" 
                     className="form-control form-control-lg"
                     placeholder="Your User name"
                     name="username"
                     value={username}
                     onChange={e => onInputChange(e)}
                     />

                 </div>

                 <div className="form-group m-2">
                     <input 
                     type="email" 
                     className="form-control form-control-lg"
                     placeholder="Your email address"
                     name="email"
                     value={email}
                     onChange={e => onInputChange(e)}
                     />

                 </div>

                 <div className="form-group m-2">
                     <input 
                     type="text" 
                     className="form-control form-control-lg"
                     placeholder="Your phone number"
                     name="phone"
                     value={phone}
                     onChange={e => onInputChange(e)}
                     />

                 </div>

                 <div className="form-group m-2">
                     <input 
                     type="text" 
                     className="form-control form-control-lg"
                     placeholder="Your website"
                     name="website"
                     value={website}
                     onChange={e => onInputChange(e)}
                     />

                 </div>
                 <div className="form-group m-2">
                       <button className="btn btn-warning btn-block">Edit User</button>
                 </div>
                

            </form>
            </div>
        </div>
    )
}

export default EditUser;
