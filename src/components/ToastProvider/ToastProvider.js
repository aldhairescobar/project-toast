import React from "react";
import useEscapeKey from "../../hooks/use-escape-key-hook";

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => {
    setToasts([]);
  });

  return (
    <ToastsContext.Provider value={{ toasts, setToasts }}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
