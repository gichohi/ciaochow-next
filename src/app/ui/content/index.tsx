import { Button } from "./button"
import { ContentView } from "./content.view"
import { ImageView } from "./image.view"

export const Content = () => {
    return(
        <div className="flex flex-col items-center justify-center mt-7 border border-gray-200 rounded-2xl bg-white">
            <ImageView/>
            <ContentView/>
            <Button/>
        </div>
    );
}