import React from "react";
import { Link } from "react-router-dom";
import './Home.css';


function Home() {
  return (
    <div className="home">
      <div className="register">
        <h1>
          <Link className="btn btn-outline-primary" to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link className="btn btn-outline-primary" to="/signup">Signup</Link>
        </h1>
      </div>

      

    
    </div>
  );
}

export default Home;