import React, { useState, useEffect } from "react";

function LessonForm({ onAddLesson, editingLesson, onCancelEdit }) {
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingLesson) {
      setTitle(editingLesson.title);
      setLevel(editingLesson.level);
      setCategory(editingLesson.category);
      setDuration(String(editingLesson.duration));
    } else {
      setTitle(""); setLevel("Beginner"); setCategory(""); setDuration("");
    }
  }, [editingLesson]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !category.trim() || !duration.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    onAddLesson({ title, level, category, duration: Number(duration), completed: editingLesson?.completed || false });
    setTitle(""); setLevel("Beginner"); setCategory(""); setDuration(""); setError("");
  };

  return (
    <form className="lesson-form" onSubmit={handleSubmit}>
      <h2>{editingLesson ? "Edit Lesson" : "Add New Lesson"}</h2>
      {error && <p className="error-message">{error}</p>}
      <input type="text" placeholder="Lesson title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input type="number" placeholder="Duration in minutes" value={duration} onChange={(e) => setDuration(e.target.value)} />
      <select value={level} onChange={(e) => setLevel(e.target.value)}>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      <div style={{ display: "flex", gap: "10px" }}>
        <button type="submit">{editingLesson ? "Save Changes" : "Add Lesson"}</button>
        {editingLesson && (
          <button type="button" onClick={onCancelEdit} className="cancel-btn">Cancel</button>
        )}
      </div>
    </form>
  );
}

export default LessonForm;