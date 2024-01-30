import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../icons/Icons";
import { SunIcon } from "../icons/Icons";
import { useEffect, useState } from "react";
export default function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])
    return (
        <Switch
            defaultSelected={theme === 'light' ? true : false}
            size="md"
            color="secondary"
            onChange={handleToggle}
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <SunIcon className={className} />
                ) : (
                    <MoonIcon className={className} />
                )
            }
        >
        </Switch>
    );
}
