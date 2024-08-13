import React, { useEffect, useState } from 'react'

export default function Products() {
  const [products, setProduts] = useState([])
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => {
        data.splice(22,64)
        data.splice(0,1)
        setProduts(data)
    })
  },[])
  return (
    <div>
      <h1 className='text-center mt-[30px] text-[50px] mb-[50px] text-blue-600'>Products List</h1>
      <ul className='list-none flex flex-wrap justify-between px-[50px] gap-[20px] '>
        {products.map(item => (
            <li className='border-[1px] border-blue-400 w-[30%] rounded-md' key={item.id}>
                <img src={item.images[1]} alt="image"  className='w-[100%] h-[50%] rounded-tl-md rounded-tr-md' />
                <div className='p-[20px] flex flex-col items-center space-y-[15px] '>
                   <h2 className='text-center text-blue-700 text-[30px] h-[90px ]'>{item.title}</h2>
                   <p className='text-blue-900 text-[25px]'>Price : {item.price}</p>
                   <p className='text-justify text-blue-500'>{item.description}</p>
                </div>
            </li>
        ))}
      </ul>
    </div>
  )
}
