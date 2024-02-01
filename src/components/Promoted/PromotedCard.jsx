import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button, Link, LinkIcon } from "@nextui-org/react";
// import ButtonComponent from './Button'

const PromotedCard = ({ option }) => {


    return (
        <Link className="cursor-pointer " href="https://github.com/druvkotwani/Startup-Samachar" >
            <Card className="py-4 hover:scale-105 ">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
                    <div className="flex items-center justify-center bg-secondary-100 px-4 py-1  w-full gap-2 mb-2  rounded-md">
                        <img
                            alt="nextui logo"
                            className="rounded-full"
                            height={26}
                            radius="sm"
                            src={`/16.png`}
                            width={26}
                        />
                        <h4 className="font-bold text-large SourceCodePro">Startup Samachar</h4>
                    </div>
                    <h4 className="font-bold text-large SourceCodePro">
                        {option.heading}
                    </h4>
                </CardHeader>

                <CardBody className="flex items-center justify-center overflow-visible py-2  ">
                    <img
                        alt="Card background"
                        className="object-cover  rounded-xl mt-auto"
                        src='/promoted1.png'
                        height={270}
                        width={270}
                    />
                </CardBody>
                <div className="flex items-center gap-3 mx-auto mt-2 bg-default-300  px-16 py-2 rounded-md ">
                    <p className="text-tiny uppercase font-bold SourceCodePro">
                        Promoted
                    </p>
                </div>
            </Card>
        </Link>
    )
}

export default PromotedCard