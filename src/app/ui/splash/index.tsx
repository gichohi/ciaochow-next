
import { Button } from "./button";
import { TitleView } from "./titleview";

export const Splash = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-7 border border-gray-200 rounded-xl bg-primary">
            <TitleView />
            <div className="flex items-center justify-center mt-20">
                <h2 >Hungry? CiaoChow helps <br /> you find something to eat.</h2>
            </div>
            <Button/>
        </div>
    )
}