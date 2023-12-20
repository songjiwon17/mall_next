import { useTheme } from "@/lib/ThemeContext";

function Dropdown(){
    const theme = useTheme();

    return(
        <div>
            <select>
                <option value='dark'>dark</option>
                <option value='light'>light</option>
            </select>
        </div>
    )
}
export default Dropdown;