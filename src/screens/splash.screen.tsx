import { TitleView } from "@/components/splash/titleview"
import { useRouter } from "next/navigation";

const SplashScreen = () => {

    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center mt-7 border border-gray-200 rounded-xl bg-primary">
            <TitleView />
            <div className="flex items-center justify-center mt-20">
                <h2 >Hungry? CiaoChow helps <br /> you find something to eat.</h2>
            </div>
            <button onClick={() => router.push('/login')} className="flex justify-center w-3/4 my-20 py-2 items-center bg-white rounded-lg h-1/6">
                <h3 className="text-primary">Get Started</h3>
            </button>
        </div>
    );
};

export default SplashScreen;