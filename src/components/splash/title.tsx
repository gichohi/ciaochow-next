import Image from "next/image";

export const Title = () => {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="w-11/12">
                <h2 className="text-2xl font-bold text-white">CiaoChow</h2>
            </div>
            <div className="w-1/12">
                <Image
                    src="../../carrot.svg"
                    alt="CiaoChow Logo"
                />
            </div>
        </div>
    );
};