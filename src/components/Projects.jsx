import speaker from '../assets/speaker.png'
import speaker_02 from '../assets/speaker_02.png'
import Sonos_Arc_Ultra from '../assets/Sonos_Arc_Ultra.png'
import proj_2 from '../assets/proj_2.png'
import { Card, CardContent } from "../components/ui/card"
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



const Projects = () => {
  const images =[carousel_1, carousel_2, carousel_3]
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
      
      {/* porject 1 */}
      <div data-aos="fade-left" className="bg-boxbg p-10 rounded-4xl grid grid-cols-2 gap-5 mb-5">
  <div className='col-span-2 grid sm:grid-cols-1 md:grid-cols-2 gap-5 p-5'>
    <div>
      <p className='text-white font-medium text-3xl'>Sonos Arc Ultra</p>
      <p className='text-greytext font-small text-2xl'>First consumer product</p>
    </div>
    <div className='text-white font-medium text-2xl'>
      <p>Mechanical design, simulation analysis for compliant parts of early SoundMotion prototypes</p>
    </div>
  </div>

  <div className='col-span-2 grid sm:grid-cols-1 md:grid-cols-2 gap-5'>
    <img src={Sonos_Arc_Ultra} className='w-full rounded-3xl my-4 px-4'/>
    <p className="text-gray-300 text-xl p-5 md:p-0 md:my-4">My contributions were primarily in the early stages of design and development of the compliant parts. The "spider" and the "surround". This involved mechanical design, simulation analysis and optimization of the parts to meet the constraints of a soundbar form factor.</p>
  </div>
</div>
      {/* project 2 */}
      <div data-aos="fade-right" className="bg-boxbg p-10 rounded-4xl grid grid-cols-2 gap-5 mb-5">
  <div className='col-span-2 grid sm:grid-cols-1 md:grid-cols-2 gap-5 p-5'>
    <div className='col-span-1'>
      <p className='text-white font-medium text-3xl'>Mayht Days</p>
      <p className='text-greytext font-small text-2xl'>First job</p>
    </div>
    <div className='col-span-1 text-white font-medium text-2xl'>
      <p>Mechanical design and various simulation work that helped realize a radical new transducer architecture in multiple form factors</p>
    </div>
  </div>

  <div className='col-span-2 grid sm:grid-cols-1 md:grid-cols-2 gap-5'>
    <img src={proj_2} className='w-full rounded-3xl my-6 px-4'/>
    <p className="text-xl p-5 md:p-0 md:my-4 text-gray-300">Contributed with mechanical design, simulation analysis and material selection of almost every component of the transducer. This included optimization of both mechanical and electromagnetic components.</p>
  </div>
</div>
      {/* project 3 */}
      <div data-aos="fade-left" className="bg-boxbg p-10 rounded-4xl grid grid-cols-2 gap-5 mb-5">
  <div className='col-span-2 grid sm:grid-cols-1 md:grid-cols-2 gap-5 p-5'>
    <div className='col-span-1'>
      <p className='text-white font-medium text-3xl'>Real-time Simulation</p>
      <p className='text-greytext font-small text-2xl'>Master Thesis</p>
    </div>
    <div className='col-span-1 text-white font-medium  text-2xl'>
      <p>A real-time simulator for the sport of skeleton. Work included track reconstruction, physics modelling for athlete-sled and sled-track interaction.</p>
    </div>
  </div>

  <div className='col-span-2 grid sm:grid-cols-1 md:grid-cols-2 md:gap-5'>
    <div className='flex justify-center sm:p-5'>
      <Carousel className="sm:w-full md:max-w-s md:mx-12">
        <CarouselContent>
          {images.map((_, index) => (
            <CarouselItem key={index}>
              <div className='pt-6'>
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
    <p className=" text-xl p-5 md:p-0 md:my-4 text-gray-300">
      Work involved reconstruction of a 3D skeleton track, modelling of the interaction between athlete and the sled; the sled and the track.
      The motivations for this work was to provide a safe virtual environment for athletes to train, which would also be cost efficient as athletes pay a fee for each time they make a practice run down a track. Last but not least, an accurate simulator allows for algorithmic optimization of control strategies.
    </p>
  </div>
</div>
    </>
  
  )
}

export default Projects