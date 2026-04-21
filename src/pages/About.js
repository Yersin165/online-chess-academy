function About() {
  return (
    <div className="page-container">
      <div className="about-hero">
        <h1>About Chess Academy</h1>
        <p>We believe chess is the ultimate mental sport — and everyone deserves access to world-class coaching.</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <span className="about-icon">♟</span>
          <h3>Our Mission</h3>
          <p>To make professional chess education accessible to players of all skill levels — from absolute beginners to competitive tournament players.</p>
        </div>
        <div className="about-card">
          <span className="about-icon">🎓</span>
          <h3>Expert Instructors</h3>
          <p>Our courses are taught by Grandmasters and International Masters with decades of teaching and competitive experience.</p>
        </div>
        <div className="about-card">
          <span className="about-icon">📈</span>
          <h3>Structured Learning</h3>
          <p>Every lesson is carefully crafted with a clear progression path — so you always know what to study next and why.</p>
        </div>
        <div className="about-card">
          <span className="about-icon">🌍</span>
          <h3>Global Community</h3>
          <p>Join thousands of students from over 40 countries who are improving their chess every single day.</p>
        </div>
      </div>

      <div className="about-stats">
        <div className="about-stat"><strong>5,000+</strong><span>Students</span></div>
        <div className="about-stat"><strong>40+</strong><span>Countries</span></div>
        <div className="about-stat"><strong>120+</strong><span>Lessons</span></div>
        <div className="about-stat"><strong>12</strong><span>Instructors</span></div>
      </div>
    </div>
  );
}

export default About;