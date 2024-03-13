import { Button } from "@/components/splash/button"
import { TitleView } from "@/components/splash/titleview"

const SplashPage = () => {

    const handleClick = () => {
        console.log("Clicked");
    }

    return (
        <div className="flex flex-col items-center justify-center mt-7 border border-gray-200 rounded-xl bg-primary">
            <TitleView />
            <div className="flex items-center justify-center mt-20">
                <h2 >Hungry? CiaoChow helps <br /> you find something to eat.</h2>
            </div>
            <Button onClick={handleClick}/>
        </div>
    );
};

export default SplashPage;