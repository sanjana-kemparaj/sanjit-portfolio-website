import React from 'react'
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

const Contact = () => {
  return (
    <>
    <div data-aos="fade-up" id="contact" className= "bg-boxbg p-10 rounded-4xl flex flex-col mt-5 justify-center items-center">
    <p className="text-white text-5xl font-bold">Have a project in mind? </p>
    <div className='pt-10 grid grid-cols-1 md:grid-cols-2'>
        <button className="text-2xl font-medium bg-red-900 rounded-[6rem] h-20 w-100 m-5 hover:scale-103 hover:bg-red-800"><a href='https://www.linkedin.com/in/sanjit-shankar-bb348a140/'>Linkedin</a></button>
        
      <button variant="outline"
     onClick={async () => { 
    const emailToCopy = "sanjit.shankar@gmail.com";

    try {
      await navigator.clipboard.writeText(emailToCopy);
      toast("Hooray!", {
        description: "Email copied!",
      });
    } catch (err) {
      console.error('Failed to copy email: ', err);
      toast("Oops!", {
        description: "Could not copy email. Please try manually.",
      });
    }
  }}
       
        
       className="text-2xl font-medium bg-none border border-red-900 rounded-[6rem] h-20 w-100 m-5 hover:scale-103 "><a>sanjit@gmail.com</a></button>
    </div>
    </div>
    <div data-aos="fade-up" className= "bg-boxbg p-5 rounded-4xl flex my-5 justify-between">
    <p className="text-white text-sm font-bold">sanjit g shankar. </p>
    <p className="text-greytext text-md font-bold">all rights reserved.© 2025 </p>
    </div>
    </>

  )
}

export default Contact
