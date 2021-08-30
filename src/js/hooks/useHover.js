import { useState, useRef, useEffect } from "react";

function useHover() {
  const [width, setWidths] = useState(window.innerWidth);
  const initialHover = width <= 768 ? true : false;
  const [hovered, setHovered] = useState(initialHover);
  let ref = useRef(null);

  function handleWindowSizeChange() {
    const currentWidth = window.innerWidth;
    if (currentWidth <= 768) {
      setHovered(true);
    } else {
      setHovered(false);
    }
    setWidths(currentWidth);
  }

  function enter() {
    setHovered(true);
  }

  function leave() {
    if (width <= 768) {
      setHovered(true);
    } else {
      setHovered(false);
    }
  }

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);

  return [hovered, ref];
}

export default useHover;
