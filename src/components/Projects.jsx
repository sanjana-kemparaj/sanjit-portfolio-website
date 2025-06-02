import speaker from '../assets/speaker.png'
import speaker_02 from '../assets/speaker_02.png'
import Sonos_Arc_Ultra from '../assets/Sonos_Arc_Ultra.png'
import proj_2 from '../assets/proj_2.png'
import { Card, CardContent } from "../components/ui/card"
import sound from '../assets/sound-animation.json';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import carousel_1 from '../assets/carousel_1.png'
import carousel_2 from '../assets/carousel_2.png'
import carousel_3 from '../assets/carousel_3.png'
import waves from '../assets/waves.json'



const Projects = () => {
  const images =[carousel_1, carousel_3, carousel_2]
  return (
    <>
    <div id="projects" className="flex">
    <div data-aos="fade-right"  className="rounded-4xl h-16 w-48 bg-boxbg flex justify-center items-center text-white text-3xl font-medium mb-5">works<span className="text-red-800">.</span></div>
      <div data-aos="fade-left" className="rounded-full h-16 w-16 bg-boxbg flex justify-center items-center text-white text-3xl font-medium ml-2">
      <img src={speaker} className='h-8 w-8'/>
      </div>
      <div data-aos="fade-left" className="rounded-full h-16 w-16 bg-boxbg flex justify-center items-center text-white text-3xl font-medium ml-2">
      <img src={speaker_02} className='h-8 w-8'/>
      </div>
    </div>
      
      {/* project 1 */}
      <div data-aos="fade-left" className="bg-boxbg p-10 rounded-4xl grid grid-cols-2 gap-5 mb-5">
  <div className='col-span-3 grid sm:grid-cols-1 md:grid-cols-2 p-5'>
    <div className='flex'>
    <div>
    <p className='text-white font-medium text-3xl'>Sonos Arc Ultra</p>
    <p className='text-greytext font-small text-2xl'>First consumer product</p>
    </div>
    <div className="h-20 w-50 -ml-10 mt-3"> 
        <lottie-player src={sound} background="transparent" speed="1" loop autoplay> </lottie-player> 
    </div> 
    </div>
    <div className='text-white font-medium text-2xl'>
      <p>Commercial realization of novel loudspeaker transducer technology. </p>
    </div>
  </div>
  <div className='col-span-2 grid sm:grid-cols-1 md:grid-cols-2'>
    <img src={Sonos_Arc_Ultra} className='w-full rounded-3xl my-4 px-4'/>
    <div>
    <div className='flex'>
    <p className="text-4xl font-bold text-gray-300 mr-4 mt-4">1<span className="text-red-800 text-4xl">.</span></p>
    <p className="text-xl p-5 md:p-0 md:my-4 text-gray-300">Mechanical design, simulation analysis and development of “spider” and “surround” for early prototypes.</p>
    </div>
    <div className='flex'>
    <p className="text-4xl font-bold text-gray-300 mr-4 mt-4">2<span className="text-red-800 text-4xl">.</span></p>
      <p className="text-xl p-5 md:p-0 md:my-4 text-gray-300">Setting up tools and workflow at component and system level to optimize transducer performance.</p>
    </div> 
    <div className='flex'>
    <p className="text-4xl font-bold text-gray-300 mr-4 mt-4">3<span className="text-red-800 text-4xl">.</span></p>
    <p className="text-xl p-5 md:p-0 md:my-4 text-gray-300">Went from making a few hundred prototypes to millions of units per year.</p>
    </div>
    </div>
    
  </div>
</div>
      {/* project 2 */}
      <div data-aos="fade-right" className="bg-boxbg p-10 rounded-4xl grid grid-cols-2 gap-5 mb-5">
  <div className='col-span-3 grid sm:grid-cols-1 md:grid-cols-2 p-5'>
    <div className="flex">
    <div>
      <p className='text-white font-medium text-3xl'>Mayht</p>
      <p className='text-greytext font-small text-2xl'>Starting Up</p>
    </div>
     <div className="h-20 w-50 -ml-10 mt-3"> 
        <lottie-player src={sound} background="transparent" speed="1" loop autoplay> </lottie-player> 
    </div> 
    </div>
    <div className='col-span-1 text-white font-medium text-2xl'>
      <p>Development of novel loudspeaker transducer technology. 
</p>
    </div>
  </div>

  <div className='col-span-2 grid sm:grid-cols-1 md:grid-cols-2'>
    <img src={proj_2} className='w-full rounded-3xl my-6 px-4'/>
    <div>
    <div className='flex'>
    <p className="text-4xl font-bold text-gray-300 mr-4 mt-4">1<span className="text-red-800 text-4xl">.</span></p>
    <p className="text-xl p-5 md:p-0 md:my-4 text-gray-300">Started out with no reliable prototype and ended at a few hundred prototypes in various form factors.</p>
    </div>
    <div className='flex'>
    <p className="text-4xl font-bold text-gray-300 mr-4 mt-4">2<span className="text-red-800 text-4xl">.</span></p>
      <p className="text-xl p-5 md:p-0 md:my-4 text-gray-300">Gained expertise in the design, optimization, and material selection for loudspeaker transducer components and complete transducers.</p>
    </div> 
    </div>
  </div>
</div>
      {/* project 3 */}
      <div data-aos="fade-left" className="bg-boxbg p-10 rounded-4xl grid grid-cols-2 gap-5 mb-5">
  <div className='col-span-2 grid sm:grid-cols-1 md:grid-cols-2 p-5'>
    <div className='col-span-1'>
      <p className='text-white font-medium text-3xl'>Real-time Simulation</p>
      <p className='text-greytext font-small text-2xl'>Master Thesis</p>
    </div>
    <div className='col-span-1 text-white font-medium  text-2xl'>
      <p>A real-time simulator for the sport of skeleton. </p>
    </div>
  </div>

  <div className='col-span-2 grid sm:grid-cols-1 md:grid-cols-2 md:gap-5 relative'>
    <div className='flex justify-center sm:p-5'>
      <Carousel className="sm:w-full md:max-w-s md:mx-12">
        <CarouselContent>
          {images.map((_, index) => (
            <CarouselItem key={index}>
              <div>
                <Card className="bg-black p-0">
                  <CardContent className="flex p-0">
                    <img src={_} className='w-full rounded-xl max-h-68'/>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-grey-100"/>
        <CarouselNext className="bg-grey-100"/>
      </Carousel>
    </div>
    <div className='relative'>
      <div className='flex'>
        <p className="text-4xl font-bold text-gray-300 mr-4 mt-4">1<span className="text-red-800 text-4xl">.</span></p>
        <div>
          <p className="text-xl p-5 md:p-0 md:my-4 text-gray-300">Works</p>
          <div>
            <p className="text-xl p-5 md:p-0 md:my-4 text-gray-300">Developed a precise 3D reconstruction of the skeleton track at Park City, Utah.</p>
            <p className="text-xl p-5 md:p-0 md:my-4 text-gray-300">Modeling of athlete-sled and sled-track physics interactions.</p>
          </div>
        </div>
      </div>
      <div className='flex'>
        <p className="text-4xl font-bold text-gray-300 mr-4 mt-4">2<span className="text-red-800 text-4xl">.</span></p>
        <div>
          <p className="text-xl p-5 md:p-0 md:my-4 text-gray-300">Goals</p>
          <div>
            <p className="text-xl p-5 md:p-0 md:my-4 text-gray-300">Provide an accurate simulator for algorithmic optimization of control strategies.</p>
            <p className="text-xl p-5 md:p-0 md:my-4 text-gray-300">Enable a safe and cost-efficient virtual training environment for athletes.</p>
          </div>
        </div>
      </div>
     
    </div>

  </div>
       {/* waves animation in bottom right */}
      <div className="absolute -bottom-8 right-0 w-40 h-40 pointer-events-none z-10">
        <lottie-player src={waves} background="transparent" speed="1" loop autoplay></lottie-player>
      </div>
</div>
    </>
  
  )
}

export default Projects