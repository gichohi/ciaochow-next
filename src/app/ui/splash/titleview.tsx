import Image from "next/image";
import { Title } from "./title";


export const TitleView = () => {
    return (
        <div className="flex flex-col justify-center items-center relative rounded-xl h-2/4">
            <Image
                src="../../ellipse.svg"
                alt="Background Image"
                className="w-full h-2/4"
            />
            <div className="absolute inset-10 flex items-start justify-center">
                <Title />
            </div>
            <div className="absolute top-24 flex items-center justify-center h-full">
                <div className="h-full">
                    <Image
                        src="../../login.svg"
                        alt="login image"
                    />
                </div>
                <div className="h-full">
                    <Image
                        src="../../register.svg"
                        alt="register image"
                    />
                </div>
            </div>

        </div>
    )
}