import { useContext } from "react"
import { WatchListContext } from "../contexts/WatchListContext"

export const useWatchList = () => {
    const context = useContext(WatchListContext);

    if (!context) throw new Error("context must be used within a provider");

    return context;
}