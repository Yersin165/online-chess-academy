import React from "react";

function LessonCard({ lesson, onDeleteLesson, onToggleCompleted, onEditLesson }) {
  const { id, title, level, category, duration, completed } = lesson;

  return (
    <div className={`lesson-card ${completed ? "completed" : ""}`}>
      <div className="lesson-card-header">
        <h3>{title}</h3>
        <span className={`level-badge ${level.toLowerCase()}`}>{level}</span>
      </div>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Duration:</strong> {duration} min</p>
      <p><strong>Status:</strong> {completed ? "✅ Completed" : "⏳ In Progress"}</p>
      <div className="card-buttons">
        <button onClick={() => onToggleCompleted(id)}>
          {completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button onClick={() => onEditLesson(lesson)} className="edit-btn">Edit</button>
        <button onClick={() => onDeleteLesson(id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
}

export default LessonCard;