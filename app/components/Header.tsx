import Link from "next/link";
import { useContext } from "react";
import { WatchListContext } from "./contexts/WatchListContext";

export const Header = () => {
  const { watchList } = useContext(WatchListContext);

  return (
    <header className="p-5 border">
      <nav className="flex">
        <div className="flex-1"></div>
        <Link href="/" className="flex-1">
          The Movies
        </Link>
        <Link href="/watchlist">Watchlist</Link>
        <span>{watchList.length}</span>
      </nav>
    </header>
  );
};
