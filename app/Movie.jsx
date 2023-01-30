import Link from "next/link";
import Image from "next/image";

const Movie = ({ title, id, poster_path, release_date }) => {
   const imagePath = "https://image.tmdb.org/t/p/original";

   return (
      <>
         <div class="bg-white border flex flex-col border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={`/${id}`}>
               <Image class="rounded-t-lg" src={`${imagePath}${poster_path}`} alt={title} width={800} height={800} />
            </a>
            <div class="p-5 flex flex-col flex-1">
               <a href={`/${id}`}>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
               </a>
               <p class="mb-3 mt-auto font-normal text-gray-700 dark:text-gray-400">{release_date}</p>
                  <Link
                     href={`/${id}`}
                     class="inline-flex w-[130px] items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                     Read more
                     <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fill-rule="evenodd"
                           d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                           clip-rule="evenodd"
                        ></path>
                     </svg>
                  </Link>
            </div>
         </div>
      </>
   );
};

export default Movie;
