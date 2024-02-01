import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button, Link, LinkIcon } from "@nextui-org/react";
const EachCard = ({ heading, source, imgSrc, href }) => {
    function headingShortener(str) {
        return str.length > 90 ? str.substring(0, 90) + " ..." : str;
    }
    return (
        <Card className="py-4 hover:scale-105 SourceCodePro ">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
                <div className="flex items-center justify-between  w-full gap-4 mb-2">
                    <img
                        alt={`${source} logo`}
                        className="rounded-full"
                        height={30}
                        radius="sm"
                        src={`/${source}.jpeg`}
                        width={30}
                    />
                    <Link href={href} target="_blank" rel="norefferrer" >
                        <Button className="h-8 rounded-md" color="default" endContent={<LinkIcon />} variant="bordered" >
                            <span className="font-semibold  ">
                                Read News
                            </span>
                        </Button>
                    </Link>

                </div>
                <h4 className="font-bold text-large ">
                    {headingShortener(heading)}
                </h4>
            </CardHeader>

            <CardBody className="flex items-center justify-center overflow-visible py-2  ">
                <img
                    alt="Card background"
                    className=" rounded-xl mt-auto"
                    src={imgSrc}

                />
            </CardBody>
            <div className="flex items-center gap-3 mx-auto mt-2 ">
                <small className="text-default-500 ">Source: </small>
                <p className="text-tiny uppercase font-bold ">
                    {source}
                </p>
            </div>
        </Card>
    )
}

export default EachCard