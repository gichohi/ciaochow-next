import Image from "next/image";

export const ImageView = () => {
    return (
        <div className="w-full h-2/4">
            <img
                src="https://images.unsplash.com/photo-1633380110125-f6e685676160"
                alt="Background Image"
                className="w-full h-2/5"
                width={100}
                height={100}
            />
        </div>
    );
};