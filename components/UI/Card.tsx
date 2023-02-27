import { background } from '@/data'
import React from 'react'
import { IMovies } from '../../interface/Movie';

const Card = ({Title, Poster}: IMovies) => {
  return (
    <div className='card border rounded-lg overflow-hidden relative group h-64'>
       <img src={Poster} 
       className='w-full h-full group-hover:scale-105 transition-all object-cover group-hover:blur-sm' />
       <div className='absolute bottom-0 left-0 w-full bg-blue-600 flex justify-center items-center h-[20%] translate-y-full group-hover:translate-y-0 transition-all px-2'>
            <p className='text-sm lg:text-md truncate'>{Title}</p>
        </div> 
    </div>
  )
}

export default Card