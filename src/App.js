import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { useUser } from "./context/UserContext";
import Lessons from "./pages/Lessons";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className={theme}>
      <nav className="navbar">
        <h2 className="logo">♟ Chess Academy</h2>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-active" : ""}>Home</NavLink>
          <NavLink to="/lessons" className={({ isActive }) => isActive ? "nav-active" : ""}>Lessons</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-active" : ""}>About</NavLink>
          <NavLink to="/courses" className={({ isActive }) => isActive ? "nav-active" : ""}>Courses</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-active" : ""}>Contact</NavLink>
          {user ? (
            <>
              <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-active" : ""}>
                👤 {user.name}
              </NavLink>
              <button onClick={handleLogout} className="nav-theme-btn">Logout</button>
            </>
          ) : (
            <NavLink to="/login" className={({ isActive }) => isActive ? "nav-login-btn" : "nav-login-btn"}>Login</NavLink>
          )}
          <button onClick={toggleTheme} className="nav-theme-btn">
            {theme === "light" ? " Dark" : "Light"}
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />}>
          <Route path=":id" element={<CourseDetails />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/lessons" element={<ProtectedRoute><Lessons />
        </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        {/* 404 — must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;