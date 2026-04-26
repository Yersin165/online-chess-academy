import React, { useState, useMemo, useCallback } from "react";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import LessonForm from "../components/LessonForm";
import LessonList from "../components/LessonList";
import StatsBlock from "../components/StatsBlock";
import Spinner from "../components/Spinner";
import Toast from "../components/Toast";
import Footer from "../components/Footer";
import lessonService from "../services/lessonService";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";

function Lessons() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const [editingLesson, setEditingLesson] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [actionError, setActionError] = useState(null);
  const [toast, setToast] = useState(null);

  const debouncedSearch = useDebounce(searchTerm, 400);

  const { loading, error } = useFetch(async () => {
    const data = await lessonService.getAll();
    setLessons(data);
    return data;
  }, []);

  const displayedLessons = useMemo(() => {
    let result = lessons.filter((l) =>
      l.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    if (selectedLevel !== "All") {
      result = result.filter((l) => l.level === selectedLevel);
    }
    if (sortOrder === "title") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "duration") {
      result = [...result].sort((a, b) => a.duration - b.duration);
    }
    return result;
  }, [lessons, debouncedSearch, selectedLevel, sortOrder]);

  const handleAddLesson = useCallback(async (newLesson) => {
    try {
      setActionError(null);
      if (editingLesson) {
        const updated = await lessonService.update(editingLesson.id, newLesson);
        setLessons((prev) => prev.map((l) => (l.id === updated.id ? updated : l)));
        setEditingLesson(null);
        setToast("Lesson updated successfully!");
      } else {
        const created = await lessonService.create({ ...newLesson, completed: false });
        setLessons((prev) => [...prev, created]);
        setToast("Lesson added successfully!");
      }
    } catch (err) {
      setActionError("Failed to save lesson. Please try again.");
    }
  }, [editingLesson]);

  const handleDeleteLesson = useCallback(async (id) => {
    try {
      setActionError(null);
      await lessonService.remove(id);
      setLessons((prev) => prev.filter((l) => l.id !== id));
      setToast("Lesson deleted.");
    } catch (err) {
      setActionError("Failed to delete lesson. Please try again.");
    }
  }, []);

  const handleToggleCompleted = useCallback(async (id) => {
    try {
      setActionError(null);
      const lesson = lessons.find((l) => l.id === id);
      const updated = await lessonService.toggleCompleted(id, !lesson.completed);
      setLessons((prev) => prev.map((l) => (l.id === updated.id ? updated : l)));
    } catch (err) {
      setActionError("Failed to update lesson. Please try again.");
    }
  }, [lessons]);

  const handleEditLesson = useCallback((lesson) => {
    setEditingLesson(lesson);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCancelEdit = useCallback(() => setEditingLesson(null), []);

  return (
    <div className="app-container">
      <div className="lessons-header">
        <h1>My Lessons</h1>
        <p>Manage your personal chess lesson library.</p>
      </div>

      <main className="main-content">
        {actionError && (
          <div className="error-banner">
            ⚠️ {actionError}
            <button onClick={() => setActionError(null)}>✕</button>
          </div>
        )}

        <StatsBlock lessons={lessons} />

        <div className="lessons-controls">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
          />
          <FilterPanel
            selectedLevel={selectedLevel}
            onLevelChange={(e) => setSelectedLevel(e.target.value)}
            sortOrder={sortOrder}
            onSortChange={(e) => setSortOrder(e.target.value)}
          />
        </div>

        <LessonForm
          onAddLesson={handleAddLesson}
          editingLesson={editingLesson}
          onCancelEdit={handleCancelEdit}
        />

        {loading && <Spinner />}

        {error && !loading && (
          <div className="error-banner">⚠️ Could not load lessons: {error}</div>
        )}

        {!loading && !error && lessons.length === 0 && (
          <div className="empty-state">
            <span>♟</span>
            <h3>No lessons yet</h3>
            <p>Add your first lesson using the form above.</p>
          </div>
        )}

        {!loading && !error && lessons.length > 0 && (
          <LessonList
            lessons={displayedLessons}
            onDeleteLesson={handleDeleteLesson}
            onToggleCompleted={handleToggleCompleted}
            onEditLesson={handleEditLesson}
          />
        )}
      </main>

      <Footer />
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}

export default Lessons;