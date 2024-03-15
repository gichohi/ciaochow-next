import { chowSelector } from "@/store/chow.slice";
import { useAppSelector } from "@/store/hooks";

export const TabText = () => {
    const selector = useAppSelector(chowSelector);

    return (
        <div className="flex w-full px-5 mt-5 items-start justify-start">
            <p className="text-tertiary text-xxs font-inter">{selector.chow.description}</p>
        </div>
    );
}