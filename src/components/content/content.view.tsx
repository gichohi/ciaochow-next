import { ContentTitle } from "./content.title";
import { TabView } from "./tab.view";
import { TabText } from "./tab.text";

export const ContentView = () => {
    return (
        <div className="flex flex-col w-full h-3/5 rounded-2xl bg-white">
           <ContentTitle/>
           <TabView/>
           <TabText/>
        </div>
    );
};