const { useState, useLayoutEffect } = require('react');

//https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

// function ShowWindowDimensions(props) {
//   const [width, height] = useWindowSize();
//   return (
//     <span>
//       Window size: {width} x {height}
//     </span>
//   );
// }