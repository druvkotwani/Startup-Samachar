import React from "react";
import { Button } from "@nextui-org/react";
import { GoTo } from "./icons";

export default function ButtonComponent({ href }) {
    return (
        <a href={href} target="_blank" rel="norefferrer" className="flex gap-4 items-center">
            <Button href="https://example.com/news" className="h-8 rounded-md" color="default" endContent={<GoTo />} variant="bordered" >
                <span className="font-medium ">
                    Read News
                </span>
            </Button>
        </a>
    );
}
