import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import courses from "../data/courses";
import Footer from "../components/Footer";

function Home() {
  const { user } = useUser();

  return (
    <div className="app-container">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">🏆 #1 Online Chess Academy</span>
          <h1 className="hero-title">
            Master Chess.<br />
            One Lesson at a Time.
          </h1>
          <p className="hero-subtitle">
            Structured courses, real tactics, and expert guidance —
            whether you're picking up a pawn for the first time or
            preparing for tournament play.
          </p>
          <div className="hero-actions">
            <Link to="/courses" className="btn-primary">Browse Courses</Link>
            <Link to={user ? "/lessons" : "/login"} className="btn-secondary">
              {user ? "My Lessons" : "Get Started"}
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="chess-board">
            {Array.from({ length: 64 }, (_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              const isLight = (row + col) % 2 === 0;
              const pieces = {
                "0-0": { symbol: "♜", white: false },
                "0-1": { symbol: "♞", white: false },
                "0-2": { symbol: "♝", white: false },
                "0-3": { symbol: "♛", white: false },
                "0-4": { symbol: "♚", white: false },
                "0-5": { symbol: "♝", white: false },
                "0-6": { symbol: "♞", white: false },
                "0-7": { symbol: "♜", white: false },
                "1-0": { symbol: "♟", white: false },
                "1-1": { symbol: "♟", white: false },
                "1-2": { symbol: "♟", white: false },
                "1-3": { symbol: "♟", white: false },
                "1-4": { symbol: "♟", white: false },
                "1-5": { symbol: "♟", white: false },
                "1-6": { symbol: "♟", white: false },
                "1-7": { symbol: "♟", white: false },
                "6-0": { symbol: "♙", white: true },
                "6-1": { symbol: "♙", white: true },
                "6-2": { symbol: "♙", white: true },
                "6-3": { symbol: "♙", white: true },
                "6-4": { symbol: "♙", white: true },
                "6-5": { symbol: "♙", white: true },
                "6-6": { symbol: "♙", white: true },
                "6-7": { symbol: "♙", white: true },
                "7-0": { symbol: "♖", white: true },
                "7-1": { symbol: "♘", white: true },
                "7-2": { symbol: "♗", white: true },
                "7-3": { symbol: "♕", white: true },
                "7-4": { symbol: "♔", white: true },
                "7-5": { symbol: "♗", white: true },
                "7-6": { symbol: "♘", white: true },
                "7-7": { symbol: "♖", white: true },
              };
              const piece = pieces[`${row}-${col}`];
              return (
                <div
                  key={i}
                  className={`chess-cell ${isLight ? "cell-light" : "cell-dark"}`}
                >
                  {piece && (
                    <span
                      className="chess-piece"
                      style={{ color: piece.white ? "#fff" : "#1a1a1a",
                               textShadow: piece.white
                                 ? "0 1px 3px rgba(0,0,0,0.8)"
                                 : "0 1px 3px rgba(255,255,255,0.3)"
                             }}
                    >
                      {piece.symbol}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="home-stats">
        <div className="home-stats-grid">
          <div className="home-stat-item">
            <strong>5,000+</strong>
            <span>Students Worldwide</span>
          </div>
          <div className="home-stat-item">
            <strong>120+</strong>
            <span>Lessons Available</span>
          </div>
          <div className="home-stat-item">
            <strong>12</strong>
            <span>Expert Instructors</span>
          </div>
          <div className="home-stat-item">
            <strong>40+</strong>
            <span>Countries Reached</span>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="home-section">
        <div className="home-section-inner">
          <h2 className="section-title">Why Chess Academy?</h2>
          <p className="section-subtitle">
            Everything you need to go from beginner to advanced, in one place.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <span>🎯</span>
              <h3>Structured Path</h3>
              <p>Every lesson is designed with a clear progression — you always know what to study next.</p>
            </div>
            <div className="feature-card">
              <span>👨‍🏫</span>
              <h3>Expert Instructors</h3>
              <p>Learn from Grandmasters and International Masters with decades of teaching experience.</p>
            </div>
            <div className="feature-card">
              <span>⚡</span>
              <h3>Learn at Your Pace</h3>
              <p>Access all lessons anytime. No deadlines, no pressure — just pure learning.</p>
            </div>
            <div className="feature-card">
              <span>📊</span>
              <h3>Track Progress</h3>
              <p>Mark lessons complete, track your duration, and watch your progress grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED COURSES ── */}
      <section className="home-section home-section-alt">
        <div className="home-section-inner">
          <h2 className="section-title">Featured Courses</h2>
          <p className="section-subtitle">Start with our most popular courses.</p>
          <div className="courses-grid">
            {courses.map((course) => (
              <div
                key={course.id}
                className="course-card-link"
                onClick={() => {
                  if (!user) {
                    window.location.href = "/login";
                  } else {
                    window.location.href = `/courses/${course.id}`;
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="course-card">
                  {!user && (
                    <div className="course-lock">🔒 Login to access</div>
                  )}
                  <span className={`course-badge ${course.level.toLowerCase()}`}>
                    {course.level}
                  </span>
                  <h3>{course.title}</h3>
                  <p>{course.description.slice(0, 100)}...</p>
                  <div className="course-meta">
                    <span>📚 {course.lessons} lessons</span>
                    <span>⏱ {course.duration}</span>
                    <span>⭐ {course.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link to={user ? "/courses" : "/login"} className="btn-primary">
              {user ? "View All Courses" : "Login to View Courses"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="home-cta-inner">
          <h2>Ready to improve your game?</h2>
          <p>Join thousands of players who are getting better every day.</p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            {user ? (
              <Link to="/lessons" className="btn-primary">Go to My Lessons</Link>
            ) : (
              <>
                <Link to="/login" className="btn-primary">Get Started Free</Link>
                <Link to="/about" className="btn-secondary">Learn More</Link>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;