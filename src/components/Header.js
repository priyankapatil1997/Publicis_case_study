import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const count = 0;
    const loginCheck = false;
    return (
        <body>
            <header>
                <nav className='navbar'>
                    <div className='navbar-link'>
                        <div className='navbar-brand'>
                            <img src={"/static/images/logo.png"} className="image-resp" />
                        </div>
                        <div className='navbar-items'>
                            <ul>
                                <li><Link class="active" to="/">Home</Link></li>
                                <li><Link to="/productinfo">Products</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='navbar-cart'>
                        <div className='navbar-login'>
                            {!loginCheck ? <ul>
                                <li><Link class="active" to="/login">Sign In</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </ul> : <ul>
                                <li><Link class="active" to="/login" >LogOut</Link></li>

                            </ul>
                            }
                        </div>
                        <div className='navbar-icon'>
                            <i className="fa fa-shopping-cart icon" ></i><span>{count ? count : 0} Items</span>
                        </div>
                    </div>
                </nav>
            </header>
        </body>
    );
}

export default Header;
