import { BASE_URL } from "@/constants";
import { Chow } from "@/types";
import { Button } from "@/components/content/button";
import { ContentView } from "@/components/content/content.view";
import { ImageView } from "@/components/content/image.view";
import { useState } from "react";
import { useUserStore } from "@/store/User.Store";
import { getChows } from "@/api";
import { useChowStore } from "@/store/Content.Store";

const ContentPage = ()=> {

    const user = useUserStore(state => state.user);
    const chowStore = useChowStore();

    const [error, setError] = useState("");


    const chowsHandler = () => {
        const num = Math.floor(Math.random() * 2); 
        console.log("Index", num);
        getChows(user.token)
        .then((response) => {
            if(response != undefined) {
                const chow: Chow = {
                    title: response.data[num].attributes.Title,
                    description: response.data[num].attributes.Description,
                    image: BASE_URL + response.data[num].attributes.Image.data[0].attributes.url
                }
                console.log("Image", chow.image);
                chowStore.setChow(chow);
                
            } else {
                setError("Chows  Error");
            }
        })
        .catch((error) => {
            setError(error);
        })
    }
    return(
        <div className="flex flex-col items-center justify-center mt-7 border border-gray-200 rounded-2xl bg-white">
            <ImageView/>
            <ContentView/>
            <Button onClick={chowsHandler}/>
        </div>
    );
}

export default ContentPage;