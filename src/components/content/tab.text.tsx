import { useChowStore } from "@/store/content.store";
import { useTabStore } from "@/store/tab.store";

export const TabText = () => {

    const active = useTabStore(state => state.active);
    const chow = useChowStore(state => state.chow);


    return (
        <div className="flex w-full px-5 mt-5 items-start justify-start">
            <p className="text-tertiary text-xxs font-inter">
                {
                    active == 0 ? chow.description : "Nutrition"
                }
            </p>
        </div>
    );
}