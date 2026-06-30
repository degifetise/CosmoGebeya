import { createContext, useContext, useEffect, useState } from "react";

const CursorAuth = createContext();
export function CursorProvider({ children }) {
  const [MousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <CursorAuth.Provider value={{ MousePosition }}>
      {children}
    </CursorAuth.Provider>
  );
}

export default function UseCursor() {
  return useContext(CursorAuth);
}
