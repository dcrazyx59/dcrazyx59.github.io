import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const themes = {
  moon: {
    name: "moon",
    path: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
    isDark: true
  },
  sun: {
    name: "sun",
    path: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
    isDark: false
  }
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(themes.sun);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme === 'dark' ? themes.moon : themes.sun);
    } else if (systemPrefersDark) {
      setTheme(themes.moon);
    }
  }, []);
  
  useEffect(() => {
    if (theme.isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(prevTheme => 
      prevTheme.name === 'moon' ? themes.sun : themes.moon
    );
  };

  return (
    <div className="fixed bottom-0 left-0 p-4 shadow-lg mix-blend-difference z-20">
      <button onClick={handleTheme} className="relative w-6 h-6 cursor-pointer hover:text-hovered">
        <AnimatePresence mode="wait">
          <motion.svg
            key={theme.name}
            initial={theme === themes.sun ? { rotate: -50, opacity: 0 } : { rotate: 50, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={theme === themes.sun ? { rotate: -50, opacity: 0 } : { rotate: 50, opacity: 0 }}
            transition={{ duration: 0.15, type: "spring" }}
            whileHover={{ scale: 1.1 }}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={theme.path} />
          </motion.svg>
        </AnimatePresence>
      </button>
    </div>
  );
}