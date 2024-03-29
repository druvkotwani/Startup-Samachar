import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button, Link, LinkIcon } from "@nextui-org/react";
// import ButtonComponent from './Button'

const PromotedCard = ({ option }) => {

    return (
        <Card className="py-4 hover:scale-105 " >
            <a href="https://github.com/druvkotwani/Startup-Samachar" target="_blank" rel="noreferrer" className="flex gap-4 items-center">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
                    <div className="flex items-center justify-center bg-secondary-100 px-4 py-1  w-full gap-2 mb-2  rounded-md">
                        <img
                            alt="nextui logo"
                            className="rounded-full"
                            height={26}
                            radius="sm"
                            src={`/16.webp`}
                            width={26}
                        />
                        <h4 className="font-bold text-large SourceCodePro">Startup Samachar</h4>
                    </div>
                    <h4 className="font-bold text-large SourceCodePro">
                        {option.heading}
                    </h4>
                </CardHeader>
            </a>
            <a href="https://github.com/druvkotwani/Startup-Samachar" target="_blank" rel="noreferrer" className="flex items-center justify-center flex-col mt-auto">
                <CardBody className="flex items-center justify-center overflow-visible py-2 mt-auto ">

                    <picture>
                        <source srcSet={option.imgSrc} type="image/webp" width="320" height="67" />
                        <img src={option.imgSrc} alt="Startup Samachar" width="320" height="67" className="rounded-xl" />
                    </picture>

                </CardBody>
                <div className="flex items-center gap-3 mx-auto mt-2 bg-default-300  px-16 py-2 rounded-md ">
                    <p className="text-tiny uppercase font-bold SourceCodePro">
                        Promoted
                    </p>
                </div>
            </a >
        </Card >
    )
}

export default PromotedCard