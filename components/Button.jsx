import React from "react";
import { Button } from "@nextui-org/react";
import { GoTo } from "./icons";

export default function App({ href }) {
    return (
        <div className="flex gap-4 items-center">

            <Button className="h-8 rounded-md" color="default" endContent={<GoTo />} variant="bordered" >
                <span className="font-medium ">
                    Read News
                </span>
            </Button>
        </div>
    );
}
