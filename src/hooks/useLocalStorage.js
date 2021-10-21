import { useState, useEffect } from "react";

const useLocalStorage = (key, value = null) => {
  const initialVal = localStorage.getItem(key) || value;
  const [item, setItem] = useState(initialVal);

  useEffect(() => {
    if (item === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, setItem];
}

export default useLocalStorage;