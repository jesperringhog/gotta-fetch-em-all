"use client";

export const MovieForm = () =>
    <form className="w-full flex justify-center gap-10" onSubmit={(e) => {
    }}>
      <label htmlFor="movieInput"></label>
      <input type="text" placeholder="Movie" />
      <button>Search</button>
    </form>