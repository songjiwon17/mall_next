import { useTheme } from "@/lib/ThemeContext";

function Dropdown(){
    const theme = useTheme();
    
    return(
        <div>
            <select className='input'>
                <option value='dark'>dark</option>
                <option value='light'>light</option>
            </select>
        </div>
    )
}
export default Dropdown;