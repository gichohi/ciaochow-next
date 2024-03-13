import Image from "next/image";
import { Title } from "./title";


export const TitleView = () => {
    return (
        <div className="flex flex-col justify-center items-center relative rounded-xl h-2/4">
            <Image
                src="../../ellipse.svg"
                alt="Background Image"
                className="w-full h-2/4"
                width={100}
                height={100}
            />
            <div className="absolute top-60 left-5 flex items-start justify-start">
                <Title />
            </div>
            <div className="absolute top-20 right-5 flex items-end justify-end h-full">
                    <Image
                        src="../../login.svg"
                        alt="login image"
                        width={100}
                        height={100}
                    />
            </div>

        </div>
    )
}