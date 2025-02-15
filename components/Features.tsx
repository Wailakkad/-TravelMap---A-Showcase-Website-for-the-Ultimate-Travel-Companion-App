import React from 'react';
import Image from 'next/image';
import Camp from "../public/camping-tent.png";
import PhoneImg from "../public/phone.png";
import { FEATURES } from '@/constants';

const Features = () => {
  return (
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className='max-container padding-container relative w-full  flex justify-end'>
        <div className='flex flex-1 min-h-[500px] lg:min-h-[900px]'>
          <Image src={PhoneImg} width={440} height={1000} alt="phone" className='feature-phone' />
        </div>
        <div className='z-20 flex flex-col w-full lg:w-[60%]'>
          <div className='relative'>
            <Image src={Camp} alt='Camping Tent Icon' width={24} height={24} />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2  lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItems
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItems = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className='flex flex-col items-start'>
      <div className='p-4 lg:p-7 rounded-full bg-green-300'>
        <Image src={icon} alt='icon' width={24} height={24} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 text-gray-600 lg:mt-[30px]">
        {description}
      </p>
    </li>
  );
};

export default Features;