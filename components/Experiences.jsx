import React from 'react'
import Title from './Title.jsx'

const Experiences = () => {
  return (
    <section id='work' className='mt-20'>
      <Title text={'Some of my works'} />
      <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 mx-10 my-20 '>
        <div className='flex flex-col bg-black-900 '>
                <img src="../img/projects/project1.png" className=' object-contain' alt="" />
            <div className=' text-white my-2'>
                <h2 className=' font-bold text-xl my-2' >On-Demand Rides Made Simple with a Pawerful, user-Friendly App cakked Ryde</h2>
                <p className='text-sm'>Ann app built with React Native, Expo & TaillwindCSS for a fast, user-Friendly experience.  </p>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <div>
                <div className=' bg-blue-950 rounded-2xl px-10'>
                    <img src="../img/projects/project2.png"  className=' object-contain' alt="" />
                </div>
                <div className=' text-white my-2'>
                <h2 className=' font-bold text-xl my-2' >The Library Management Platform.</h2>
                
            </div>
            </div>
            <div>
                <div className=' bg-red-400 rounded-2xl px-10'>
                    <img src="../img/projects/project3.png"  className=' object-contain' alt="" />
                </div>
                <div className=' text-white my-2'>
                <h2 className=' font-bold text-xl my-2' >Pitch Your StartUp. <p className='text-xs font-medium' >Submit ideas, wote on pitches and get noticed.</p> </h2>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences