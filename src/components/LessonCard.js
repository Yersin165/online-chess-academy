import React from "react";

function LessonCard({ lesson, onDeleteLesson, onToggleCompleted }) {
  const { id, title, level, category, duration, completed } = lesson;

  return (
    <div className={`lesson-card ${completed ? "completed" : ""}`}>
      <h3>{title}</h3>
      <p><strong>Level:</strong> {level}</p>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Duration:</strong> {duration} min</p>
      <p>
        <strong>Status:</strong> {completed ? "Completed" : "Not completed"}
      </p>

      <div className="card-buttons">
        <button onClick={() => onToggleCompleted(id)}>
          {completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button onClick={() => onDeleteLesson(id)}>Delete</button>
      </div>
    </div>
  );
}

export default LessonCard;