import { Link, Outlet, useParams } from "react-router-dom";
import courses from "../data/courses";

function Courses() {
  const { id } = useParams();

  return (
    <div className="page-container">
      {!id && (
        <>
          <div className="courses-header">
            <h1>Our Courses</h1>
            <p>Choose your level and start improving today.</p>
          </div>
          <div className="courses-grid">
            {courses.map((course) => (
              <Link to={course.id} key={course.id} className="course-card-link">
                <div className="course-card">
                  <span className={`course-badge ${course.level.toLowerCase()}`}>{course.level}</span>
                  <h3>{course.title}</h3>
                  <p>{course.description.slice(0, 100)}...</p>
                  <div className="course-meta">
                    <span>📚 {course.lessons} lessons</span>
                    <span>⏱ {course.duration}</span>
                    <span>⭐ {course.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
}

export default Courses;