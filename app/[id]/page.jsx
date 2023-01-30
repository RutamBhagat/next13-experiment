import React from "react";
import Image from "next/image";


export async function generateStaticParams(){
   const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
   );
   const data = await res.json();
   return data.results.map(movie => {
      return {
         movie: toString(movie.id)
      }
   })
}

const page = async ({ params }) => {
   const { id } = params;
   const imagePath = "https://image.tmdb.org/t/p/original";
   const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
      {
         next: { revalidate: 60 },
      }
   );
   const data = await res.json();

   return (
      <>
         <section class="bg-white dark:bg-gray-900 min-h-screen   ">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
               <div class="mr-auto place-self-center lg:col-span-7">
                  <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                     {data.title}
                  </h1>
                  <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                     {data.overview}
                     <br />
                     <span>{data.release_date}</span>
                  </p>
                  <a
                     href="#"
                     class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  >
                     Runtime: {data.runtime} min
                  </a>
                  <a
                     href="#"
                     class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                     {data.status}
                  </a>
               </div>
               <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <Image
                     className="m-12 w-full"
                     priority
                     src={imagePath + data.backdrop_path}
                     alt=""
                     width={1000}
                     height={1000}
                  />
               </div>
            </div>
         </section>
      </>
   );
};

export default page;
