import { useTheme } from "@/lib/ThemeContext";

function Dropdown(){
    const [theme, setTheme] = useTheme();

    return(
        <div>
            <select value={theme}>
                <option value='dark'>dark</option>
                <option value='light'>light</option>
            </select>
        </div>
    )
}
export default Dropdown;