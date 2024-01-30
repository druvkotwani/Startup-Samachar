import React from "react";
import { Button } from "@nextui-org/react";
import { LinkIcon } from "../icons/Icons";

export default function ButtonComponent({ href }) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="flex gap-4 items-center">
            <Button href="https://example.com/news" className="h-8 rounded-md" color="default" endContent={<LinkIcon />} variant="bordered" >
                <span className="font-semibold SourceCodePro ">
                    Read News
                </span>
            </Button>
        </a>
    );
}
