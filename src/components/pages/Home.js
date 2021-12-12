import React, { useState, useEffect } from "react";

import axios from "axios";
import {Link, NavLink} from "react-router-dom";


const Home = () => {
    const [users, setUser] = useState([]);
    
    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3004/users");
        setUser(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3004/users/${id}`);
        loadUsers();
      };
    return (


        <div className="container">
            <div className="py-4">
                <h1>Home page</h1>
            </div>
            <p className="lead">
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>


            <table class="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        users.map( (user,index) =>(
                            <tr>
                                <td scope="row">{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                <Link class="  btn btn-primary" to={`/user/view/${user.id}`}>View</Link>
                                <Link class="btn btn-warning m-2" to={`/user/edit/${user.id}`}>Edit</Link>
                                <Link class="btn btn-danger" onClick={() => deleteUser(user.id)} to="#">Delete</Link>
                                </td>
                            </tr>
                            

                        ) )

                        
                    }

                    

                </tbody>
            </table>
            <br /> <br /><br /><br /><br />

        </div>



    )

};
export default Home;