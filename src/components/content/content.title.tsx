import Image from "next/image";

export const ContentTitle = () => {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="w-11/12">
                <p className="text-lg text-secondary font p-5 font-inter">Carrot</p>
            </div>
            <div className="w-1/12">
                <Image
                    src="../../carrot.svg"
                    alt="CiaoChow Logo"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    );
};