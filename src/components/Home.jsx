import {useEffect, useRef} from 'react'
import photo from '../assets/photo.jpg'
import location from '../assets/location.png'
import gear_1 from '../assets/gear_1.png'
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { gsap } from 'gsap'; // Import GSAP



const Home = () => {
  const gear1Ref = useRef(null);
  const gear2Ref = useRef(null);
  const gear3Ref = useRef(null);

  useEffect(() => {
    // Ensure all refs are available before animating
    if (gear1Ref.current && gear2Ref.current && gear3Ref.current) {
      // Gear 1: Clockwise rotation
      gsap.to(gear1Ref.current, {
        rotation: 360, // Rotate 360 degrees
        duration: 10,   // Duration of one full rotation (in seconds)
        repeat: -1,    // Repeat indefinitely (-1)
        ease: 'none',  // Constant speed, no easing
        transformOrigin: 'center center' // Ensure rotation is around the center
      });

      // Gear 2: Anti-clockwise rotation
      gsap.to(gear2Ref.current, {
        rotation: -360, // Negative value for anti-clockwise
        duration: 10,    // Can have a different speed
        repeat: -1,
        ease: 'none',
        transformOrigin: 'center center'
      });

      // Gear 3: Anti-clockwise rotation
      gsap.to(gear3Ref.current, {
        rotation: 360,
        duration: 10,    // Can have another different speed
        repeat: -1,
        ease: 'none',
        transformOrigin: 'center center'
      });
    }

        // Cleanup function to kill tweens when the component unmounts
    return () => {
      if (gear1Ref.current) gsap.killTweensOf(gear1Ref.current);
      if (gear2Ref.current) gsap.killTweensOf(gear2Ref.current);
      if (gear3Ref.current) gsap.killTweensOf(gear3Ref.current);
    };
  }, []);
  return (
    <>
    {/* row 1 */}
    <div id="home" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
    <div data-aos="fade-right" className="bg-boxbg p-5 rounded-4xl">
    <div className="rounded-full bg">
    <img src={photo} alt="photo" className="rounded-full w-24 h-24 md:w-32 md:h-32 grayscale"/>
    </div>
    <p className="text-greytext text-2xl md:text-4xl lg:text-6xl font-medium p-3 md:p-5"><span className='text-white'>sanjit shankar
    simulation engineer </span>currently working at Sonos. </p>
    </div>
    <div data-aos="fade-left" className="bg-boxbg p-5 rounded-4xl flex flex-col justify-center items-center">
    <div className='flex ml-2 md:ml-8'>
    <div className='flex flex-col'>
    <div className='-ml-1 mt-2'>
      <img src={gear_1} ref={gear1Ref}  alt="logo" className='h-20 w-20 md:h-34 md:w-34'/>
    </div>
    <div className='flex mb-6 md:mb-10'>
    <div className='-ml-2 md:-ml-4 mb-2 md:mb-4'>
      <img src={gear_1} ref={gear2Ref} alt="logo" className='h-16 w-16 md:h-30 md:w-30'/>
    </div>
    <div className='mt-4 md:mt-8 mr-6 md:mr-16'>
      <img src={gear_1} ref={gear3Ref} alt="logo" className='h-12 w-12 md:h-24 md:w-24'/>
    </div>
    </div>
    </div>
    </div>
    <p className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center">Have a project in mind? </p>
    <button
      variant="outline"
      onClick={async () => { 
        const emailToCopy = "sanjit.shankar@gmail.com";
        try {
          await navigator.clipboard.writeText(emailToCopy);
          toast("Hooray!", { description: "Email copied!" });
        } catch (err) {
          console.error('Failed to copy email: ', err);
          toast("Oops!", { description: "Could not copy email. Please try manually." });
        }
      }}
      className="text-base md:text-xl font-medium bg-red-900 rounded-[3rem] h-12 w-64 md:h-20 md:w-100 m-4 md:m-8 hover:scale-103 hover:bg-red-800"
    >
      <a>sanjit.shankar@gmail.com</a>
    </button>
    </div>
    </div>
    {/* row 2 */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 ">
    <div data-aos="fade-right" className= "bg-boxbg p-10 rounded-4xl md:col-span-1">
    <div className="rounded-full bg">
    <img src={location} className="w-48 h-48 animate-bounce"/>
    </div>
    <p className="text-white text-4xl md:text-5xl font-medium ">Based in <br/>The Hague,<br/> Netherlands <br/> <span className="text-greytext">GMT+1</span> </p>
    </div>
    <div data-aos="fade-left" className= "bg-boxbg rounded-4xl flex flex-col justify-center p-10 items-center md:col-span-2">
    <p className="text-white text-4xl md:text-5xl font-medium">As an engineer who codes<br/>
    I model physical systems to uncover their hidden behaviors, then build web tools to share those insights. <span className="text-greytext">I believe transformative engineering starts with three principles: rigorous simulation, translating complexity into clarity, and building tools that empower others to learn. </span></p>
    </div>
    </div>
    <Toaster />

    </>

  )
}

export default Home
