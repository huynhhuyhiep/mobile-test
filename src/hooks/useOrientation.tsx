import { useEffect, useState } from "react";

const useOrientation = () => {
  const [orientation, setOrientation] = useState<"portrait" | "landscape">(
    "portrait"
  );

  useEffect(() => {
    const portrait = window.matchMedia("(orientation: portrait)");

    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) {
        setOrientation("portrait");
      } else {
        setOrientation("landscape");
      }
    };

    handleChange(portrait);
    portrait.addEventListener("change", handleChange);

    return () => {
      portrait.removeEventListener("change", handleChange);
    };
  }, []);

  return orientation;
};

export default useOrientation;
