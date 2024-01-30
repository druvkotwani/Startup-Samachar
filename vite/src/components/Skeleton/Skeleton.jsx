import React from "react";
import { Card, CardHeader, Skeleton } from "@nextui-org/react";

export default function SkeletonComponent() {
    return (
        <Card className="py-4 hover:scale-105 mx-6 sm:m-0 ">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <div className="flex items-center justify-evenly    w-full gap-4 mb-2">
                    <div>
                        <Skeleton className="flex rounded-full w-12 h-12" />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <Skeleton className="h-3 w-3/5 rounded-lg" />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2 mt-4">
                    <Skeleton className="h-3 w-1/5 rounded-lg" />
                    <Skeleton className="h-3 w-2/5 rounded-lg" />
                    <Skeleton className="h-3 w-3/5 rounded-lg" />
                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                    <Skeleton className="h-3 w-full rounded-lg" />
                </div>
            </CardHeader>

            <div className="flex items-center justify-center overflow-visible pt-8 pb-3">
                <Card className="mx-auto w-[238px]  space-y-5 p-4" radius="lg">
                    <Skeleton className="rounded-lg">
                        <div className="h-32  rounded-lg bg-default-300"></div>
                    </Skeleton>
                </Card>
            </div>
            <div className="flex items-center gap-3 mx-auto">
                <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
            </div>
            <div className="w-full items-center justify-center flex flex-col gap-2 mt-2">
                <Skeleton className="h-3 w-2/5 rounded-lg" />
            </div>
        </Card>

    );
}
