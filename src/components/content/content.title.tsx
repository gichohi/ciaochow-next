import { useChowStore } from "@/store/content.store";
import Image from "next/image";

export const ContentTitle = () => {

    const chow = useChowStore(state => state.chow);

    return (
        <div className="flex flex-row items-center justify-center">
            <div className="w-11/12">
                <p className="text-lg text-secondary font p-5 font-inter">{chow.title}</p>
            </div>
            <div className="w-1/12">
                <Image
                    src={chow.image}
                    alt="CiaoChow Logo"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    );
};