import { Link, NavLink } from 'react-router-dom'
import './Navigation.css'
import { useEffect } from 'react'


export default function Navigation() {
       useEffect(function(){
              document.addEventListener('scroll', () => {
                     const navigation = document.querySelector(".navigation")
                     if(window.scrollY > 200){
                         navigation.classList.add("scrolled")
                     }else{
                         navigation.classList.remove("scrolled")
                     }
              }) 
       },[])

       return (
              <header className='position-fixed w-100'>
              <nav className="navigation | navbar navbar-expand-lg align-items-center container">
                     <Link to='/' className='logo'>Start Framework</Link>

                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                     </button>

                     <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                     <menu className='navbar-nav m-0'>
                            <li><NavLink className="nav-link mt-3 mt-lg-0" aria-current="page" to='/About'>About</NavLink></li>
                            <li><NavLink className="nav-link mt-3 mt-lg-0" to='/Portfolio'>Portfolio</NavLink></li>
                            <li><NavLink className="nav-link mt-3 mt-lg-0" to='/Contact'>Contact</NavLink></li>
                     </menu>
                     </div>
              </nav>
              </header>
       )
}

