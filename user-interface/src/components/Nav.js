import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
const Nav=()=>{
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const logout = ()=>{
        localStorage.clear(); 
        navigate('/signup');

    }
    return(
        <div>
            <li><Link><img className='logo' src='https://diginsights.com/wp-content/uploads/2024/03/starbsloh.png.jpeg' /></Link></li>
           { auth ?<ul className='nav-ul'>              
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link onClick={logout} to="/logout">Logout ({JSON.parse(auth).name})</Link></li>   
            </ul>
            :
            <ul className='nav-ul nav-right'>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log</Link></li>
            </ul>
           }
        </div>
    );
}

export default Nav;