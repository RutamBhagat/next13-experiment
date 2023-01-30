import React from "react";
import Image from "next/image";

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
      <div>
         <div className="px-20 py-12">
            <h2 className="text-2xl">{data.title}</h2>
            <h2 className="text-lg">{data.release_date}</h2>
            <h2 className="">Runtime: {data.runtime} minutes</h2>
            <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md text-sm">{data.status}</h2>
            <Image className="m-12 w-full" priority src={imagePath + data.backdrop_path} alt="" width={1000} height={1000} />
            <p>{data.overview}</p>
         </div>
      </div>
   );
};

export default page;
