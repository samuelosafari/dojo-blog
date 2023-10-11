import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry!!</h2>
      <p>Page Does Not Exist</p>
      <Link to="/">Back to Home...</Link>
    </div>
  );
};

export default NotFound;
