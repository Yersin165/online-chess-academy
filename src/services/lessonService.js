const BASE_URL = "https://69edf76d9163f839f89259ed.mockapi.io/lessons";
const lessonService = {
  // GET all lessons
  getAll: async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch lessons");
    return response.json();
  },

  // POST a new lesson
  create: async (lesson) => {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lesson),
    });
    if (!response.ok) throw new Error("Failed to create lesson");
    return response.json();
  },

  // PUT update an existing lesson
  update: async (id, lesson) => {
    const response = await fetch(`${BASE_URL}/${String(id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lesson),
    });
    if (!response.ok) throw new Error("Failed to update lesson");
    return response.json();
  },

  // DELETE a lesson
  remove: async (id) => {
    const response = await fetch(`${BASE_URL}/${String(id)}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete lesson");
    return response.json();
  },

  // PUT toggle completed
  toggleCompleted: async (id, completed) => {
    const response = await fetch(`${BASE_URL}/${String(id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    });
    if (!response.ok) throw new Error("Failed to update lesson");
    return response.json();
  },
};

export default lessonService;