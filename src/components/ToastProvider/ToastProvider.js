import React from "react";

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <ToastsContext.Provider value={{ toasts, setToasts }}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
