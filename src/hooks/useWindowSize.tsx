import useOrientation from "./useOrientation";
import { useEffect, useState } from "react";

const useWindowSize = (options?: { isWatch: boolean }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const orientation = useOrientation();

  useEffect(() => {
    // Update size on rotation because iOS device do not trigger resize event on rotation
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, [orientation]);

  useEffect(() => {
    if (options?.isWatch) return

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [options?.isWatch]);

  useEffect(() => {
    if (!options?.isWatch) return

    let id: number
    const watchingSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });

      id = requestAnimationFrame(watchingSize)
    }

    requestAnimationFrame(watchingSize)

    return () => {
      cancelAnimationFrame(id)
    }
  }, [options?.isWatch]);

  return windowSize;
};

export default useWindowSize;
