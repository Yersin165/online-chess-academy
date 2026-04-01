import { Link, Outlet } from "react-router-dom";

function Courses() {
  return (
    <div>
      <h1>Courses Page</h1>
      <p>Select a course:</p>

      <ul>
        <li>
          <Link to="1">Beginner Chess</Link>
        </li>
        <li>
          <Link to="2">Middle Game Strategies</Link>
        </li>
        <li>
          <Link to="3">Endgame Basics</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Courses;