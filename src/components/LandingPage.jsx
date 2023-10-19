import { Link } from "react-router-dom";

const LandingPage = () => {

    return (
        <>
        <div className="container">

        <p>Welcome to out store</p>
        
        <Link to="/shop">
        <button className="btn btn-primary">Start Shopping</button>
      </Link>
        </div>
        </>
        )
}

export default LandingPage;