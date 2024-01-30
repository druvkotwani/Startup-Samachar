import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../icons/Icons";
import { SunIcon } from "../icons/Icons";

export default function App() {
    return (
        <Switch
            defaultSelected
            size="md"
            color="secondary"
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
