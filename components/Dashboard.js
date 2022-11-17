import React from 'react'
import { useLocation } from 'react-router-dom'

export const Dashboard = () => {
    const location=useLocation();
  return (<div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href='/#'>Chanakya Academy</a>

</nav>
    <div>
        
        <div className="card">
      <div className="card-body">
        <h5 className="card-title">{location.state}</h5>
        <p className="card-text">Learn From Experts, we have 8-10 years of expert team.</p>
        

        
      </div>
    </div>
    </div>
    </div>
  )
}
