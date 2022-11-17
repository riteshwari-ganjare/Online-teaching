import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SingleCourses = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  return (
    <div className="container">
     
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Course Name</h5>
        <p className="card-text">{id}</p>
        <a onClick={()=>navigate("/dashboard",{state: id })} className="card-link" href=" ">More Information</a>
        {/* <Link to="/dashboard" state={"id"} className="card-link" >More Information</Link> */}
        <Link to="/dashboard" state={"All Test are in 5000 only. and total 30 paper sets.Result will be display on weekend only"} className="card-link" >Test Course</Link>
      </div>
    </div>
    </div>
  );
};

export default SingleCourses;
