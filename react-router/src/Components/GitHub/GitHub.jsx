import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshChoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GitHub followers: {data.followers}
      <img className='text-center' src={data.avater_url} alt="Git Picture" />
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/hiteshChoudhary') 
   return response.json()
}
