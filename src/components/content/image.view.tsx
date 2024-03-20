import { useChowStore } from "@/store/content.store";
import Image from "next/image";

export const ImageView = () => {
    const chow = useChowStore(state => state.chow);

    return (
        <div className="w-full h-2/4">
            <Image
                src={chow.image}
                alt="Background Image"
                className="w-full h-2/5"
                width={100}
                height={100}
            />
        </div>
    );
};