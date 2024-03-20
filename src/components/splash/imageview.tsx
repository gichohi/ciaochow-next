import Image from "next/image";

export const ImageView = () => {
    return (
        <div className="flex flex-row items-center justify-center h-2/4">
            <div className="justify-center">
                <Image
                    src="../../login.svg"
                    alt="login image"
                    width={100}
                    height={100}
                />
            </div>
            <div className="justify-center">
                <Image
                    src="../../register.svg"
                    alt="register image"
                    width={100}
                    height={100}
                />
            </div>
        </div>
    );
};