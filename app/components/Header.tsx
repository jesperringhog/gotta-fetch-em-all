import Link from "next/link";
import { useContext } from "react";
import { WatchListContext } from "./contexts/WatchListContext";
import { useWatchList } from "./hooks/useWatchList";

export const Header = () => {
  const { watchList } = useWatchList();

  return (
    <header className="p-5 border">
      <nav className="flex">
        <div className="flex-1"></div>
        <Link href="/" className="flex-1">
          The Movies
        </Link>
        <div className="flex gap-2">
          <Link href="/watchlist">Watchlist</Link>
          <span>{watchList.length}</span>
        </div>
      </nav>
    </header>
  );
};
