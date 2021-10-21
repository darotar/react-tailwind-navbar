import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import Sidebar from "./Sidebar";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <div className="flex">
      <Sidebar />
      <div
        className="flex flex-col items-center h-full
        w-full mt-0 ml-0 mx-auto px-0 py-12
        overflow-y-scroll"
      >
        <button onClick={handleMode}>
          {darkTheme ? (
            <FaSun size="24" className="top-navigation-icon" />
          ) : (
            <FaMoon size="24" className="top-navigation-icon" />
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
