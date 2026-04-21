import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { useUser } from "./context/UserContext";

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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
          {user ? (
            <>
              <Link to="/profile" className="nav-user">👤 {user.name}</Link>
              <button onClick={handleLogout} className="nav-theme-btn">Logout</button>
            </>
          ) : (
            <Link to="/login" className="nav-login-btn">Login</Link>
          )}
          <button onClick={toggleTheme} className="nav-theme-btn">
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
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
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;