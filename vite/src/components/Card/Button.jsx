import React from "react";
import { Button } from "@nextui-org/react";
import { LinkIcon } from "../icons/Icons";
import Link from "next/link";

export default function ButtonComponent({ href }) {
    return (
        <Link href={href} target="_blank" rel="norefferrer" className="flex gap-4 items-center">
            <Button href="https://example.com/news" className="h-8 rounded-md" color="default" endContent={<LinkIcon />} variant="bordered" >
                <span className="font-semibold SourceCodePro ">
                    Read News
                </span>
            </Button>
        </Link>
    );
}
