import React from "react";
import Movie from "./Movie";
import shortid from "shortid";

const page = async () => {
   const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
   );
   const data = await res.json();
   return (
      <main className="flex flex-col justify-center bg-orange-500 px-20 py-12 text-white items-center min-h-screen">
         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.results
               .sort((a, b) => a.title.length - b.title.length)
               .map((movie) => (
                  <Movie
                     key={shortid.generate()}
                     id={movie.id}
                     title={movie.title}
                     poster_path={movie.poster_path}
                     release_date={movie.release_date}
                  />
               ))}
         </div>
      </main>
   );
};

export default page;
