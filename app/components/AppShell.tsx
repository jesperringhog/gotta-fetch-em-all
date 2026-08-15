"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { WatchListContext } from "./contexts/WatchListContext";
import { useStorage } from "./hooks/useStorage";
import { Movie } from "../models/Movie";

export const AppShell = ({ children }: { children: React.ReactNode }) => {
    const [watchList, setWatchList] = useState<Movie[]>([]);

    useStorage(watchList);

  return (
    <>
      <WatchListContext.Provider value={{watchList, setWatchList}}>
        <Header />
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <main className="w-full p-10 flex flex-1 flex-col items-center gap-10 dark:bg-black">
            {children}
          </main>
        </div>
      </WatchListContext.Provider>
    </>
  );
};
