import React, { useState,useEffect } from 'react'

export default function Movie({ title, image, year }) {
  return (
    <div className="shadow-lg p-6 w-80 h-96 rounded-xl flex items-center justify-center flex-col gap-10">
      <img src={image} alt="image_not_found" className='h-52 w-56 rounded-2xl shadow-blue-500' />
      <div className='flex-col justify-center items-center gap-5 gap-11'>
      <h3 className='font-semibold text-emerald-700'>{title}</h3>
      <p className='text-center font-thin '>{year}</p>
      </div>
    </div>
  );
}
