export const SearchMovies = () => (
  <form
    method="GET"
    action={"/movies"}
    className="w-full flex justify-center gap-10"
  >
    <label htmlFor="movieInput"></label>
    <input id="movieInput" type="text" name="q" placeholder="Movie" />
    <button className="cursor-pointer">Search</button>
  </form>
);
