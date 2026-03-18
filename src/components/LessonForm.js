import React, { useState } from "react";

function LessonForm({ onAddLesson }) {
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !category.trim() || !duration.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const newLesson = {
      title,
      level,
      category,
      duration: Number(duration),
      completed: false,
    };

    onAddLesson(newLesson);

    setTitle("");
    setLevel("Beginner");
    setCategory("");
    setDuration("");
    setError("");
  };

  return (
    <form className="lesson-form" onSubmit={handleSubmit}>
      <h2>Add New Lesson</h2>

      {error && <p className="error-message">{error}</p>}

      <input
        type="text"
        placeholder="Lesson title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="number"
        placeholder="Duration in minutes"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <select value={level} onChange={(e) => setLevel(e.target.value)}>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <button type="submit">Add Lesson</button>
    </form>
  );
}

export default LessonForm;