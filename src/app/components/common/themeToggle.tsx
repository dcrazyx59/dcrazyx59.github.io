import { useState } from "react"

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

    const [theme, setTheme] = useState<Theme>(themes.sun);
    type Theme = {
        name: string;
        path: string;
        isDark: boolean;
    };
      
    const handleTheme = () => {
        setTheme(prevTheme => 
            prevTheme.name === 'moon' ? themes.sun : themes.moon
        );
    };

    return (
        <>
        <div className="fixed bottom-0 left-0 p-4 shadow-lg mix-blend-difference z-20">
            <button className="" onClick={() => handleTheme()}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className=""><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d={theme.path} /></svg>
            </button>
        </div>
        </>
    )
}