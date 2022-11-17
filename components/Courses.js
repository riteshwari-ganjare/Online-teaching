import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Courses = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href='/#'>Chanakya Academy</a>
  
  </nav>
<div className='container'>

<h1>My Courses</h1>
<h3>
This are the details of all of aur courses and bundles.
</h3>
<Link className='btn btn-primary mx-2' to="/courses/allcourses">Courses</Link> 
<Link className='btn btn-danger mx-2' to="/courses/bundles">Bundles</Link> 

<Outlet/>
</div>
</div>
  )
}

