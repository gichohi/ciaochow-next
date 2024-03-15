import { chowSelector } from "@/store/chow.slice";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";

export const ContentTitle = () => {
    const selector = useAppSelector(chowSelector);

    return (
        <div className="flex flex-row items-center justify-center">
            <div className="w-11/12">
                <p className="text-lg text-secondary font p-5 font-inter">{selector.chow.title}</p>
            </div>
            <div className="w-1/12">
                <Image
                    src={selector.chow.image}
                    alt="CiaoChow Logo"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    );
};