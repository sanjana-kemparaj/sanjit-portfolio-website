import React from 'react'
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

const Contact = () => {
  return (
    <>
    <div data-aos="fade-up" id="contact" className="bg-boxbg p-6 md:p-10 rounded-4xl flex flex-col mt-5 justify-center items-center">
    <p className="text-white text-3xl md:text-5xl font-bold text-center">Have a project in mind? </p>
    <div className='pt-6 md:pt-10 grid grid-cols-1 md:grid-cols-2'>
        <button className="text-base md:text-xl font-medium bg-red-900 rounded-[3rem] h-12 md:h-20 w-64 md:w-100 m-3 md:m-5 hover:scale-103 hover:bg-red-800"><a href='https://www.linkedin.com/in/sanjit-shankar-bb348a140/'>Linkedin</a></button>
        
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
       className="text-base md:text-xl font-medium bg-none border border-red-900 rounded-[3rem] h-12 md:h-20 w-64 md:w-100 m-3 md:m-5 hover:scale-103 "><a>sanjit.shankar@gmail.com</a></button>
    </div>
    </div>
    <div data-aos="fade-up" className="bg-boxbg p-4 md:p-5 rounded-4xl flex justify-between items-center my-5">
      <span className="text-white text-sm md:text-md font-semibold">
        &copy; {new Date().getFullYear()} Sanjit Shankar. All rights reserved.
      </span>
      <span className="text-greytext text-sm md:text-md font-semibold">
        Website developed by Sanjana Kemparaj.
      </span>
    </div>
    </>

  )
}

export default Contact
