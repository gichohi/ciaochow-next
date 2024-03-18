"use client";

import ContentScreen from "@/screens/content.screen";


const Content = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <ContentScreen />
      </div>
    </main>
  );
}

export default Content;