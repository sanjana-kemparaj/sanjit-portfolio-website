import React from 'react'
import screen from '../assets/screen.png'
import gear from '../assets/gear.png'
import spanner from '../assets/spanner.png'
import bolt from '../assets/bolt.png'

const Skills = () => {
  return (
   <>
    <div id="skills" className="flex">
    <div data-aos="fade-right" className="rounded-4xl h-16 w-48 bg-boxbg flex justify-center items-center text-white text-3xl font-medium">skills<span className="text-red-800">.</span></div>
    <div data-aos="fade-left" className="rounded-full h-16 w-16 bg-boxbg flex justify-center items-center text-white text-3xl font-medium ml-2">
        <img src={screen} className='h-8 w-8'/>
    </div>
    <div data-aos="fade-left" className="rounded-full h-16 w-16 bg-boxbg flex justify-center items-center text-white text-3xl font-medium ml-2">
        <img src={gear} className='h-8 w-8'/>
    </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 ">
    <div data-aos="fade-right" className= "bg-boxbg p-10 rounded-4xl ">
    <div className="flex">
        <h1 className="text-4xl font-semibold">Mechanical</h1>
    </div>
        <div className="flex">
        <div className="pt-4">
        <p className="text-2xl my-2 text-greytext font-semibold">Structural Mechanics</p>
        <p className="text-2xl my-2 text-greytext font-semibold">Multibody Dynamics</p>
        <p className="text-2xl my-2 text-greytext font-semibold">CAD/CAM</p>
        <p className="text-2xl my-2 text-greytext font-semibold">Material Science</p>
        </div>
        <div> 
            <img src={bolt} className="h-5 w-5 absolute right-[58px] top-[17px] animate-[circular-rotate_8s_linear_infinite] rotate-[46deg]"/>
            <img src={spanner} className="h-24 w-10 absolute right-9 origin-[50%_20%] animate-[circular-rotate_5s_linear_infinite]" style={{
            right: 'calc(44px + 0.5rem)',
            top: 'calc(0.5rem + 0.25rem)' 
    }}></img> 
        </div>
        </div>
        
       
    </div>
    <div data-aos="fade-left" className= "bg-boxbg rounded-4xl p-10">
        <h1 className="text-4xl font-semibold">Computational</h1>
        <div className="pt-4">
        <p className="text-2xl my-2 text-greytext font-semibold">Finite Element Methods</p>
        <p className="text-2xl my-2 text-greytext font-semibold">Reduced-Order Modeling</p>
        <p className="text-2xl my-2 text-greytext font-semibold">Numerical Simulations</p>
        </div>
        
    </div>
    <div data-aos="fade-left" className= "bg-boxbg rounded-4xl p-10">
        <h1 className="text-4xl font-semibold">Programming</h1>
        <div className="pt-4">
        <p className="text-2xl my-2 text-greytext font-semibold">Python</p>
        <p className="text-2xl my-2 text-greytext font-semibold">Matlab</p>
        <p className="text-2xl my-2 text-greytext font-semibold">C++</p>
        </div>
        
    </div>
    </div>
   </>
  )
}

export default Skills
