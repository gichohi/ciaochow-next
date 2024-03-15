import { useTabStore } from "@/store/tab.store";
import { useUserStore } from "@/store/user.store";

export const TabView = () => {
    const activeStore = useTabStore();

    return (
        <div className="w-full flex flex-row items-center justify-center bg-white border-b-2 border-tertiary">
            <div onClick={() => activeStore.setActive(0)} className="flex items-center justify-center px-2">
                <p className="text-primary my-1 text-xm font-inter">Description</p>
            </div>
            <div onClick={() => activeStore.setActive(1)} className="flex items-center my-1 justify-center px-2 font-inter">
                <p className="text-black text-xm">Nutrition facts</p>
            </div>
        </div>
    );
}