export const SearchMovies = () => (
  <form method="GET" action="/">
    <input type="text" name="q" className="mx-5 border" />
    <button className="px-5 border cursor-pointer">Search</button>
  </form>
);

// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";

// export const LiveSearch = () => {
//   const [query, setQuery] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     const inputValue = query.trim();

//     if (!inputValue) {
//       router.replace("/");
//       return;
//     }

//     if (inputValue.length < 3) return;

//     const timeout = setTimeout(() => {
//       router.replace(`/?q=${encodeURIComponent(query)}`);
//     }, 300);

//     return () => clearTimeout(timeout);
//   }, [query, router]);

//   return (
//     <input
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//       className="mx-5 border"
//     />
//   );
// };
