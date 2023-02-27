import React from "react";
import { IMovie } from "../../../interface/Movie";
import {AiFillCalendar, AiFillClockCircle, AiFillStar} from "react-icons/ai";

async function getSingleMovie(id: string) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=52ce09d8&&i=${id}`);
  return res.json();
}

const Page = async ({ params }: { params: { id: string } }) => {
  const response: IMovie = await getSingleMovie(params.id);

  return (
    <div>
      <img
        src={response.Poster}
        className="absolute top-0 left-0 w-full h-screen -z-10 object-cover blur-md"
      />

      <div className="container flex flex-col justify-center h-[calc(100vh-4rem)] overflow-auto py-5">
        <div>
          <img
            src={response.Poster}
            alt={response.Title}
            className="w-48 h-72 rounded-lg object-fill"
          />
          <p className="text-lg lg:text-4xl mt-2 font-bold tracking-widest font-custom_font">
            {response.Title}
          </p>
          <p>Gentre: {response.Genre}</p>
          <p>Actor: {response.Actors}</p>
          <div className="mt-5">

            <div className="flex items-center">
              <AiFillStar className="mr-2 text-blue-500" />
              <p>IMDB: {response.imdbRating}</p>
            </div>

            <div className="flex items-center">
              <AiFillClockCircle className="mr-2 text-blue-500" />
              <p>Duration: {response.Runtime}</p>
            </div>

            <div className="flex items-center">
              <AiFillCalendar className="mr-2 text-blue-500" />
              <p>Year: {response.Year}</p>
            </div>

            <p className="mt-5">{response.Plot}</p>


            <button className="bg-blue-600 px-5 py-2 rounded-md mt-5">Watch Trailar</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
