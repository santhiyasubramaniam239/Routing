
import { Link } from "react-router-dom"; // ✅ Add this at the top

const NotFound = () => {
  return (
    <div>
      <h1>404 | Page Not Found</h1>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default NotFound;
