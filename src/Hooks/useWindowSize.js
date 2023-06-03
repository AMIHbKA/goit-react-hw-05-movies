const { useState, useLayoutEffect } = require('react');

const debounce = (callback, delay) => {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};

export const usePlayerSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateSize = () => {
      const height = Math.floor((window.innerHeight / 10) * 9);
      const width = Math.floor((window.innerWidth / 10) * 9);
      let ratioHeight = Math.floor(width / 1.77);
      let ratioWidth = width;

      if (ratioHeight > height) {
        ratioHeight = height;
        ratioWidth = Math.floor(height * 1.77);
      }

      setSize([ratioWidth, ratioHeight]);
    };

    const debouncedUpdateSize = debounce(updateSize, 300);

    window.addEventListener('resize', debouncedUpdateSize);

    updateSize();

    return () => {
      window.removeEventListener('resize', debouncedUpdateSize);
    };
  }, []);
  return size;
};
