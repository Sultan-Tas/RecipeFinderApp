import { useTheme } from '../contexts/ThemeContext'

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
        onClick={toggleTheme}
        className="p-2 rounded-3"
        style={{border: "1px solid"}}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode ️'}
        </button>
    )
}

export default ThemeToggle;