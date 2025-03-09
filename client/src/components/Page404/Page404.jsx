
import { Link } from "react-router-dom";

import "./Page404.css";
import error from "../../assets/error.jpg";


const Page404 = () => {
  
  return (
    
    <div>
         <div className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
     <Link className="homeButton" to="/">Go Back to Home</Link>
    </div>
     <img className="error" src={error} alt="error" />
</div>

  )
};

export default Page404;