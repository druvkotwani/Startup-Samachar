import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";
const EachCard = ({ heading, by, read = 3, img, src }) => {
    return (
        <Card className="py-4 hover:scale-105 cursor-pointer ">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Image
                    alt="nextui logo"
                    className="rounded-full"
                    height={30}
                    radius="sm"
                    src={`/${src}.jpeg`}
                    width={30}
                />
                <h4 className="font-bold text-large SourceCodePro">{heading}</h4>

            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl mt-auto"
                    src={img}
                    height={270}
                    width={270}
                />
            </CardBody>
            <div className="flex items-center gap-3 mx-auto mt-2">
                <p className="text-tiny uppercase font-bold SourceCodePro">
                    {by} |
                </p>
                <small className="text-default-500 SourceCodePro">{read} Min read</small>
            </div>
        </Card>
    )
}

export default EachCard