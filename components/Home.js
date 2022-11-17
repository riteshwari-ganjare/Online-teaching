import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href='/#'>Chanakya Academy</a>

</nav>

        <div className='container'>
        <h1>Our Best Courses</h1>
        <Link className='btn btn-primary' to="/courses">See All Courses</Link>
        </div>
    </div>
  )
}

export default Home
    