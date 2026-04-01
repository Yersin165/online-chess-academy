import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <div>
      <nav className="navbar">
  <h2 className="logo">Chess Academy</h2>

  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/courses">Courses</Link>
    <Link to="/contact">Contact</Link>
  </div>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/courses" element={<Courses />}>
          <Route path=":id" element={<CourseDetails />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;