import React,{ useState } from 'react'
import logo from '../Logo.webp'
import './Nav.css'
import { FaSearchPlus } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { GrLogin } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { Link,useNavigate} from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';


export default function Nav() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`); 
    } else {
      navigate(`/shop`); 
    }
  };
  
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    
    <><div className='header'>
        <div className='top_header'>
            <div className='logo'>
              <img  src={logo} alt="Gadgets Hub"   map name="image-map"
    area target="" title="About us" href="/about" coords="2088,1032,2135" shape="circle"
/>
             
           <h1>Gadgets Hub</h1>
            </div>
            <div className='search'>
                <input  type="text" placeholder='Search' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
                <button onClick={handleSearch}><FaSearchPlus /></button>
            </div>
            {
             isAuthenticated ?
             <div className='user'>
             <div className='icon'>
             <GrLogout />
             </div>
             <div className='btn'>
               <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LOGOUT</button>
             </div>
             </div>
             :
            
            <div className='user'>
              <div className='icon'>
              <GrLogin />
              </div>
              <div className='btn'>
                <button onClick={() => loginWithRedirect()}>LOGIN</button>
              </div>
            </div>
}
        </div>
        <div className='last_header'>
          <div className='user_profile'>
            {
                isAuthenticated ?
                <>
                <div className='info'>
                <img src={user.picture} />
                <h2>{user.name}</h2>
                </div>
                </>
                :
                <>
                <div className='icon2'>
                <FaUserAlt />
                </div>
                <div className='info'>
                  <p>Please Login</p>
                </div>
                </>
            }
          </div>
            <div className='nav'>
            <ul>
              <li><Link as={Link} to='/' className='link'>Home</Link></li>
              <li><Link as={Link} to='/shop' className='link'>Shop</Link></li>
              <li><Link as={Link} to='/cart' className='link'>My Cart</Link></li>
              <li><Link as={Link} to='/about' className='link'>About</Link></li>
              <li><Link as={Link} to='/contact' className='link'>Contact</Link></li>
            </ul>
            </div>
            <div className='offer'><button ><Link as={Link} to='/cart' id='cart'> Cart<FaCartShopping/> </Link></button>
            <p>Get 10% off on all first Orders</p>
            </div>
        </div>
    </div>
    </>
  )
}
