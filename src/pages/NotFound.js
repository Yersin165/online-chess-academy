import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page-container">
      <div className="notfound">
        <span>♟</span>
        <h1>404</h1>
        <p>This page doesn't exist.</p>
        <Link to="/" className="auth-btn notfound-btn">Go Home</Link>
      </div>
    </div>
  );
}

export default NotFound;