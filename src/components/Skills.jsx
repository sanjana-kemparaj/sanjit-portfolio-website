import React from 'react'
import screen from '../assets/screen.png'
import gear from '../assets/gear.png'
import spanner from '../assets/spanner.png'
import bolt from '../assets/bolt.png'

const Skills = () => {
  return (
   <>
    <div id="skills" className="flex">
    <div data-aos="fade-right" className="rounded-4xl h-12 md:h-16 w-36 md:w-48 bg-boxbg flex justify-center items-center text-white text-2xl md:text-3xl font-medium">skills<span className="text-red-800">.</span></div>
    <div data-aos="fade-left" className="rounded-full h-12 md:h-16 w-12 md:w-16 bg-boxbg flex justify-center items-center text-white text-2xl md:text-3xl font-medium ml-2">
        <img src={screen} className='h-6 w-6 md:h-8 md:w-8'/>
    </div>
    <div data-aos="fade-left" className="rounded-full h-12 md:h-16 w-12 md:w-16 bg-boxbg flex justify-center items-center text-white text-2xl md:text-3xl font-medium ml-2">
        <img src={gear} className='h-6 w-6 md:h-8 md:w-8'/>
    </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 ">
    <div data-aos="fade-right" className= "bg-boxbg p-5 md:p-10 rounded-4xl ">
    <div className="flex">
        <h1 className="text-2xl md:text-4xl font-semibold">Mechanical</h1>
    </div>
        <div className="flex">
        <div className="pt-2 md:pt-4">
        <p className="text-lg md:text-2xl my-1 md:my-2 text-greytext font-semibold">Structural Mechanics</p>
        <p className="text-lg md:text-2xl my-1 md:my-2 text-greytext font-semibold">Multibody Dynamics</p>
        <p className="text-lg md:text-2xl my-1 md:my-2 text-greytext font-semibold">CAD/CAM</p>
        <p className="text-lg md:text-2xl my-1 md:my-2 text-greytext font-semibold">Material Science</p>
        </div>
        <div> 
            <img src={bolt} className="h-4 w-4 md:h-5 md:w-5 absolute right-[38px] md:right-[37px] top-[10px] md:top-[17px] animate-[circular-rotate_8s_linear_infinite] rotate-[46deg]"/>
            <img src={spanner} className="h-16 w-6 md:h-24 md:w-10 absolute right-4  origin-[50%_20%] animate-[circular-rotate_5s_linear_infinite]" style={{
            right: 'calc(24px + 0.5rem)',
            top: 'calc(0.5rem + 0.25rem)'
    }}></img> 
        </div>
        </div>
    </div>
    <div data-aos="fade-left" className= "bg-boxbg rounded-4xl p-5 md:p-10">
        <h1 className="text-2xl md:text-4xl font-semibold">Computational</h1>
        <div className="pt-2 md:pt-4">
        <p className="text-lg md:text-2xl my-1 md:my-2 text-greytext font-semibold">Finite Element Methods</p>
        <p className="text-lg md:text-2xl my-1 md:my-2 text-greytext font-semibold">Reduced-Order Modeling</p>
        <p className="text-lg md:text-2xl my-1 md:my-2 text-greytext font-semibold">Numerical Simulations</p>
        </div>
    </div>
    <div data-aos="fade-left" className= "bg-boxbg rounded-4xl p-5 md:p-10">
        <h1 className="text-2xl md:text-4xl font-semibold">Programming</h1>
        <div className="pt-2 md:pt-4">
        <p className="text-lg md:text-2xl my-1 md:my-2 text-greytext font-semibold">Python</p>
        <p className="text-lg md:text-2xl my-1 md:my-2 text-greytext font-semibold">Matlab</p>
        <p className="text-lg md:text-2xl my-1 md:my-2 text-greytext font-semibold">C++</p>
        </div>
    </div>
    </div>
   </>
  )
}

export default Skills
