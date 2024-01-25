import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { requests, headers } from '../Request';

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    //     const headers = {
    //     accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTc1ZmNmNjg1MzU3N2VlNzBjZDJkMzczZWQyM2JmMCIsInN1YiI6IjY1YjJjMmJkY2VlNDgxMDE2MmE5ZWQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U-l5DH723KaywQj3-PskG01KF1dkNja3rjvp4eua4Wo',
    //   };

      axios.get(requests.requestPopular, {headers} ).then((response)=>{
        setMovies(response.data.results)
      })
  }, []);
  console.log(movie)


  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img
            className='w-full h-full object-cover' 
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
            alt={movie?.title} />
            <div>
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Watch Later</button>
            </div>
        </div>
     
    </div>
  );
};

export default Main;
