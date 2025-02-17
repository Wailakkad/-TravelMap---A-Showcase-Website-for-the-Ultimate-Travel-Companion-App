import Image from 'next/image'
import { Button } from './ui/button'
import img1 from "@/public/camping-tent.png";
import start from "@/public/star.png";
import closeIcon from "@/public/close.png";
import HeroBack from "@/public/hero.png";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-2 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src={img1}
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src={start}
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
         <Button className='bg-black text-white font-bold rounded-xl p-2 px-4 hover:bg-slate-400 hover:text-black transition-all duration-300'>Download App</Button>
         <Button className='text-black font-bold rounded-xl p-2 px-4 border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-300'>How we work?</Button>
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
         <div
          className="relative z-20 flex w-full max-w-[668px] flex-col h-[600px] gap-8 rounded-3xl bg-cover bg-center px-7 py-8"
          style={{ backgroundImage: `url(${HeroBack.src})` }}
        >
         <div className='bg-black p-6 rounded-xl'>
         <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src={closeIcon} alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
