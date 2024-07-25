import React from 'react';
import {Link} from 'react-router-dom';
import video from '../assets/bgvideo.mp4';
import image from '../assets/designing.webp'
import { BsArrowRightCircle } from "react-icons/bs";
import TabPart from '../Components/TabPart';


const Career = () => {
  return (
    <>
    <section className='top-video-part' >
      <div className="container-video w-full h-full relative">
              <video src={video} muted autoPlay loop ></video>
              <div className='w-full h-full absolute top-0 bg-gradient-to-l from-[#00000063] to-[#141414cf]'>
                <div className='w-full flex flex-col px-[15vw] mt-[10vh] max-[600px]:mt-0   text-white '>
                  <h1 className='text-[2.5rem] max-[600px]:text-[1.5rem] font-medium'>Career</h1>
                  <hr className='w-[70vw]'/>
                  <h2 className='pt-5 text-[2rem] max-[600px]:text-[1.5rem] max-[600px]:tracking-tight max-[600px]:leading-tight'>Empower your passion, Elevate your career.</h2>
                   <Link to='/StudentSignup' className='mt-10 max-[600px]:mt-5 text-xl font-semibold flex items-center gap-3'>Apply now <BsArrowRightCircle className='text-2xl'/></Link>
                </div>
              </div>
      </div>
    </section>
    <section className='join-us'>
      <div className='container flex gap-2 items-center w-full p-5 mt-5 max-[600px]:flex-wrap'>
        <div className='content-join-us w-1/2 max-[600px]:w-full shadow-lg px-4 flex flex-col items-center gap-5'>
          <h1 className='text-[1.5rem] font-medium max-[600px]:text-center'>Join Us</h1>
          <h2 className='text-[1.4rem] max-[600px]:text-center'>Shape the future of technology</h2>
          <p className='text-[1rem] max-[600px]:text-center tracking-tight'>As a global company with unparalleled scale, a track record of pioneering innovation, and a huge and influential client base, we offer associates a chance to drive change and improve the lives of millions of people around the world.</p>
        </div>
        <div className='container-image w-1/2 max-[600px]:w-full shadow-lg'>
          <div className='image w-full h-full overflow-hidden'>
            <img className='hover:scale-110 ease-linear duration-500' src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
    <section className='tab-part mt-5 mb-10'>
         <div className='px-10 max-[600px]:px-0 border'> 
         <TabPart/>
         </div>
    </section>
    <section className='w-full h-[100vh] relative bg-cover bg-center bg-[url("https://s7ap1.scene7.com/is/image/TCSCOMprod/leadership-banner?wid=1400&hei=788&dpr=off")]'>
      <div className='w-full h-full absolute top-0 bg-gradient-to-l from-[#00000049] to-[#141414a2]'>
        <div className='w-full h-full mt-10 flex flex-col items-center'>
          <h1 className='text-[1.4rem] text-white uppercase'>About Us</h1>
          <h2 className='text-[1rem] pt-2 text-center text-white'>We are a global
            technology company that designs, develops, and sells hardware and software products for the creation, distribution,
            and enjoyment of digital media.</h2>
        </div>
      </div>
    </section>
    {/* <section className='cards w-full max-[600px]:hidden'>
      <div className="cards w-full bg-red-900 relative">
         <div className="w-full card absolute z-[999] p-2 max-[600px]:flex-col -top-[16vh] flex items-center justify-center gap-5">
             <div className="w-72 h-80 max-[600px]:w-50 max-[600px]:h-60 mx-auto hover:scale-110 ease-linear duration-300 bg-gray-100 rounded-xl shadow-2xl">
                    <div className="flex items-center p-3">
                      <div className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
                      </div>
                      <div className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
                      </div>
                      <div className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
                      </div>
                    </div>
                    <h1>hello</h1>
             </div>
             <div className="w-72 h-80 max-[600px]:w-50 max-[600px]:h-60 mx-auto hover:scale-110 ease-linear duration-300 bg-gray-100 rounded-xl shadow-2xl">
                    <div className="flex items-center p-3">
                      <div className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
                      </div>
                      <div className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
                      </div>
                      <div className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
                      </div>
                    </div>
                    <h1>hello</h1>
             </div>
             <div className="w-72 h-80 max-[600px]:w-50 max-[600px]:h-60 mx-auto hover:scale-110 ease-linear duration-300 bg-gray-100 rounded-xl shadow-2xl">
                    <div className="flex items-center p-3">
                      <div className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
                      </div>
                      <div className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
                      </div>
                      <div className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
                      </div>
                    </div>
                    <h1>hello</h1>
             </div>
             <div className="w-72 h-80 max-[600px]:w-50 max-[600px]:h-60 mx-auto hover:scale-110 ease-linear duration-300 bg-gray-100 rounded-xl shadow-2xl">
                    <div className="flex items-center p-3">
                      <div className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
                      </div>
                      <div className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
                      </div>
                      <div className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
                      </div>
                    </div>
                    <h1>hello</h1>
             </div>
         </div>
      </div>
    </section> */}
    </>
  )
}

export default Career