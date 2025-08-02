import React from 'react'
import { Link } from 'react-router-dom';

const PostNavbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:px-12 py-8 px-6 lg:px-40 gap-6 md:gap-16">
        <div className='border rounded border-slate-950 p-20 w-4/5 md:w-1/2'>
          <img src="" alt="" />
        </div>

        <div className='flex flex-col flex-1 lg:p-10 space-y-3 md:space-y-4'>
          <h1 className='font-bold text-2xl md:text-3xl'>About Us</h1>
          <p className='font-semibold text-lg md:text-2xl'>Fast, Reliable & Affordable Mobile Repairs</p>
          <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam, ex nostrum quos perferendis et officia officiis corrupti laudantium in praesentium itaque error facere eaque, placeat nobis asperiores? Quasi, ducimus.</p>
          <Link to="/about"> <button className='border rounded-3xl border-black text-xs font-bold px-3 py-2'>Read More</button></Link>
        </div>

      </div>
  )
}

export default PostNavbar