import { useParams, Link } from "react-router-dom";
import courses from "../data/courses";

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="page-container">
        <p>Course not found. <Link to="/courses">Go back</Link></p>
      </div>
    );
  }

  return (
    <div className="course-detail">
      <Link to="/courses" className="back-link">← Back to Courses</Link>

      <div className="course-detail-header">
        <span className={`course-badge ${course.level.toLowerCase()}`}>{course.level}</span>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <div className="course-meta">
          <span>👨‍🏫 {course.instructor}</span>
          <span>📚 {course.lessons} lessons</span>
          <span>⏱ {course.duration}</span>
          <span>⭐ {course.rating}</span>
        </div>
      </div>

      <div className="course-detail-body">
        <div className="course-topics">
          <h3>What you'll learn</h3>
          <ul>
            {course.topics.map((topic, i) => (
              <li key={i}>✓ {topic}</li>
            ))}
          </ul>
        </div>
        <div className="course-enroll">
          <div className="enroll-card">
            <p className="enroll-price">Free</p>
            <button className="auth-btn">Enroll Now</button>
            <p className="enroll-note">Full access · No credit card needed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;