import React from "react";

export default function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        callback(event);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);
}
