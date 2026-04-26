// Format duration from minutes to a readable string
export const formatDuration = (minutes) => {
    if (minutes < 60) return `${minutes} min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m === 0 ? `${h}h` : `${h}h ${m}min`;
  };
  
  // Capitalize first letter of a string
  export const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  // Truncate text to a given length
  export const truncate = (str, length = 100) => {
    if (!str) return "";
    return str.length > length ? str.slice(0, length) + "..." : str;
  };