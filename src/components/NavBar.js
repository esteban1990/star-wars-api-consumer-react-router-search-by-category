import React from 'react'
import {Link} from 'react-router-dom'





export const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                           <Link class='navbar-brand' to='/'>
                               <a class="nav-link" href="#">Home</a>
                               </Link>
                        </li>
                        <li class="nav-item">
                        <Link class='navbar-brand' to='/people'>
                               <a class="nav-link" href="#">People</a>
                               </Link>
                        </li>
                        <li class="nav-item">
                        <Link class='navbar-brand' to='/planets'>
                               <a class="nav-link" href="#">Planets</a>
                               </Link>
                        </li>
                        <li class="nav-item">
                        <Link class='navbar-brand' to='/films'>
                               <a class="nav-link" href="#">Films</a>
                               </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
