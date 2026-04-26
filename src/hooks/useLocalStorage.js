import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("localStorage error:", error);
    }
  }, [key, storedValue]);

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
  };

  const removeValue = () => {
    localStorage.removeItem(key);
    setStoredValue(initialValue);
  };

  return [storedValue, setValue, removeValue];
}

export default useLocalStorage;