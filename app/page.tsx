import Card from "@/components/UI/Card";
import { background } from "@/data";
import { IResponse } from "@/interface/Movie";
import { Inter } from "@next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

async function getMovies(params: string) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=52ce09d8&&s=${params}`
  );
  return res.json();
}

export default async function Home({ searchParams }: { searchParams?: any }) {
  let keyword = "spider man";
  if (searchParams?.s) keyword = searchParams.s;
  const response: IResponse = await getMovies(keyword);
  return (
    <div>
      <img
        src={background}
        className="fixed top-0 left-0 w-full h-screen -z-10 object-cover blur-sm"
      />

      <main className="container">
        <p>All Movies</p>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mt-5">
          {response.Search &&
            response?.Search?.map((movie, index) => {
              return (
                <Link href={`detail/${movie.imdbID}`} key={index}>
                  <Card
                    Poster={movie.Poster}
                    Title={movie.Title}
                    imdbID={movie.imdbID}
                  />
                </Link>
              );
            })}
        </div>
      </main>
    </div>
  );
}
