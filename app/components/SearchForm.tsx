export const SearchForm = () => 
    <form method="GET" action="/movies">
        <input type="text" name="q" className="mx-5 border"/>
        <button className="p-3 border">Search</button>
    </form>