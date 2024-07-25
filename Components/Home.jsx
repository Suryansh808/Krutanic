import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay , EffectCoverflow, EffectCards} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Link} from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import Image1 from '../assets/dm.webp';
import Image2 from '../assets/fm.webp';
import Image3 from '../assets/h&n.webp';
import Image4 from '../assets/m&a.webp';
import { IoArrowDownSharp } from "react-icons/io5";
import { MdCallMade } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Home = () => {

    const Card = [
       { title : "Business idea", description : "Transform your business with advanced technologies", imageURL : "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
       { title : "Business idea", description : "Transform your business with advanced technologies", imageURL : "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     { title : "Business idea", description : "Transform your business with advanced technologies", imageURL : "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     { title : "Business idea", description : "Transform your business with advanced technologies", imageURL : "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { title : "Business idea", description : "Transform your business with advanced technologies", imageURL : "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { title : "Business idea", description : "Transform your business with advanced technologies", imageURL : "https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1c2luZXNzJTIwaWRlYXxlbnwwfHwwfHx8MA%3D%3D"}
    ]
    
    
  return (
    <>  
      <section className='swiper-slider'>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
      navigation
      autoplay
      loop={true}
      pagination={{ clickable: true }}
      className='w-full h-[90vh] max-[600px]:h-[35vh]'>
      <SwiperSlide ><img className='w-full h-full bg-cover bg-center' src={Image1}/></SwiperSlide>
      <SwiperSlide ><img className='w-full h-full bg-cover bg-center' src={Image2}/></SwiperSlide>
      <SwiperSlide ><img className='w-full h-full bg-cover bg-center' src={Image3}/></SwiperSlide>
      <SwiperSlide ><img className='w-full h-full bg-cover bg-center' src={Image4}/></SwiperSlide>
    </Swiper>
      </section>
     <section className='business-slider w-full bg-black text-white p-5 flex flex-col items-center gap-5'>
      <h2 className='font-medium text-[2rem] pt-4 uppercase'>Services</h2>
      <h1 className=' font-light text-2xl pb-2 pt-2'>Transform your business with advanced technologies</h1>
     <div className='business-slider w-full p-2'>
      <Swiper 
      className='p-2'
      modules={[EffectCards , Pagination]}
      pagination={{ clickable: true }}
    initialSlide={2}
    speed={500}
    rotate={true}
      effect='Cards'
      loop={true}
      grabCursor={true}
      slidesPerView={3}
      spaceBetween={5}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 80
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 50
        }
      }}
      >
        {Card.map((item, index) =>{
          return (<SwiperSlide key={index} className="p-2 bg-[#1c1a1a] text-white rounded-lg shadow-inherit transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className='overflow-hidden'><img className="w-full h-40 object-cover hover:scale-110 hover:ease-linear hover:duration-500 rounded-t-lg" alt="CardImage" src={item.imageURL}/></div>
            <div className="p-6">
              <h5 className="text-2xl font-bold">{item.title}</h5>
              <p className="text-gray-600">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                    <Link to='/' className="bg-black hover:bg-white hover:scale-110 hover:ease-linear hover:duration-500 hover:text-black text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 ">Learn More</Link>
                </div>
            </div>
            </SwiperSlide>
            )
            })}
      </Swiper>
      </div>
      <div className=' hover:bg-white hover:scale-110 ease-linear duration-700 hover:text-black inline  border rounded-full px-6 py-2'>
          <Link to='/career' className='flex items-center gap-3'>All businesses <IoArrowDownSharp /></Link>
        </div>
     </section>
     <section className='project w-full bg-  p-5 flex flex-col items-center  gap-5'>
       <h1 className='text-center text-[2rem] font-bold pb-2'>Our Projects</h1>
      <div className='project-slider w-full p-2'>
      <Swiper 
      className='p-5'
      modules={[EffectCoverflow , Pagination]}
      pagination={{ clickable: true }}
      effect='coverflow'
      loop={true}
      grabCursor={true}
      slidesPerView={3}
      spaceBetween={5}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 80
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 10
        }
      }}
      >
        {Card.map((item, index) =>{
          return (<SwiperSlide key={index} className="p-2 bg-[#1c1a1a] shadow-2xl text-white rounded-lg  transform hover:scale-150 transition-transform duration-500 ease-in-out">
           <div className='overflow-hidden w-full h-40'><img className="w-full h-full object-cover hover:scale-110 hover:ease-linear hover:duration-500 rounded-t-lg" alt="CardImage" src={item.imageURL}/></div>
            <div className="p-6">
              <h5 className="text-2xl font-bold">{item.title}</h5>
              <p className="text-gray-600">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                    <Link to='/' className="bg-black hover:bg-white hover:scale-110 ease-linear duration-500 hover:text-black text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2  ">Learn More</Link>
                </div>
            </div>
            </SwiperSlide>
            )
            })}
      </Swiper>
      </div>
       <div className='bg-black text-white hover:scale-110 ease-linear duration-700 hover:bg-[#1c1a1a] hover:text-white inline  border rounded-full px-6 py-2'>
          <Link to='/career' className='flex items-center gap-3'>View all projects <IoArrowDownSharp /></Link>
        </div>
     </section>
     <section className='join-our-team w-full px-5 py-20 bg-[#1E2222] text-white text-xl flex items-center flex-col justify-center'>
         <h1 className='text-center text-[3rem] pb-8 max-[600px]:leading-snug max-[600px]:text-[2rem]'>Uncover your future.</h1>
         <h1 className='text-center text-[1rem] pb-4 '>Realize your potential.</h1>
        <div className='hover:scale-110 ease-linear duration-700 hover:bg-white hover:text-black  border rounded-full px-8 py-2'>
          <Link to='/career' className='flex items-center gap-2' >Explore careers <MdCallMade /></Link>
        </div>
     </section>
     {/* <section className='social-media w-full bg-[#1E2222] text-white'>
      <div className='flex items-center justify-center pb-10'><div  className='hr w-[80vw] bg-[#f5f2f2] py-[0.1px]'></div></div>
      <div className="social-media w-full">
        <div className='px-[8.2rem] max-[600px]:px-[1rem] max-[600px]:tracking-tighter max-[600px]:leading-9 max-[600px]:text-[1rem] flex flex-col gap-3'>
          <h2 className='font-medium text-[1.2rem] max-[600px]:leading-tight'>Social.</h2>
          <h1 className='font-medium text-[2.5rem] max-[600px]:leading-tight max-[600px]:text-[1.5rem]'>Follow us for the latest updates</h1>
        </div>
          <div className='px-[8.2rem] max-[600px]:px-[1rem] max-[600px]:tracking-tighter max-[600px]:text-[1rem] pb-[2rem] flex flex-wrap items-center justify-between pt-8'>
           <Link to="/LinkedIn"> 
           <div className='Linkedin flex items-center gap-2'>
          <FaLinkedin className='text-[2.5rem] max-[600px]:text-[2rem] hover:scale-125 ease-linear duration-500'/>
          <div className='max-[600px]:hidden'>
            <h2>LinkedIn</h2>
            </div>
          </div>
            </Link>
           <Link to="/x">
           <div className='Twitter flex items-center gap-2'>
        <FaXTwitter className='text-[2.5rem] max-[600px]:text-[2rem] hover:scale-125 ease-linear duration-500'/>
          <div className='max-[600px]:hidden'><h2>X</h2></div>
          </div>
           </Link>
            <Link to="/instagram">
            <div className='instagram flex items-center gap-2'>
        <FaInstagram className='text-[2.5rem] max-[600px]:text-[2rem] hover:scale-125 ease-linear duration-500'/>
          <div className='max-[600px]:hidden'><h2>Instagram</h2></div>
          </div>
            </Link>
             <Link to="/youtube">
             <div className='Youtube flex items-center gap-2'>
             <FaYoutube className='text-[2.5rem] max-[600px]:text-[2rem] hover:scale-125 ease-linear duration-500'/>
            <div className='max-[600px]:hidden'><h2>Youtube</h2></div>
            </div>
             </Link>
             <Link to="/facebook">
             <div className='FaceBook flex items-center gap-2'>
            <FaFacebookF className='text-[2.5rem] max-[600px]:text-[2rem] hover:scale-125 ease-linear duration-500'/>
            <div className='max-[600px]:hidden'><h2>Facebook</h2></div>
            </div>
             </Link>
          </div>
      </div>
     </section> */}
     <hr />
     
    </>
    
  )
}

export default Home