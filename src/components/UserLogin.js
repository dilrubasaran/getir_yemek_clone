// import React, { Component } from "react";
import Slider from "react-slick";
import {FiSearch} from 'react-icons/fi';
import {MdLocationSearching} from 'react-icons/md'; 
import ReactFlagsSelect from "react-flags-select";
import React, { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

const UserLogin = () => {
  
  const [selected, setSelected] = useState('TR');

  const windowWidth = useWindowWidth();

  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15',
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
  };
      return (
        <div>
        <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-[#5d3ebc]
        before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        {windowWidth >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com/_next/static/images/market-1-ae76901414c55d46ffc17ff0182c264b.jpg"
              alt="Getir 1"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px]"
              src="https://getir.com/_next/static/images/market-5-9585774ecca123da206c87c36f01e0e8.jpg"
              alt="Getir 2"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px]"
              src="https://getir.com/_next/static/images/market-7-8f621120b0e2786fad8389cd5b1718be.jpg"
              alt="Getir 3"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px]"
              src="https://getir.com/_next/static/images/market-2-4d10b864d127e72942af806876ff3f24.jpg"
              alt="Getir 4"
            />
          </div>
        </Slider>
      ) } 
        
      <div className="place-content-stretch ml-8 col-6 justify-self-end md:absolute top-0 left-0  md:left-3/4 translate-x-0 my-8    md:-translate-x-1/2  z-10	w-96 flex flex-col relative  bg-[#fafafa] rounded-lg py-4 box-border text-sm">
        <div className="w-full  md:w-[400px] md:rounded-lg  p-4 ">
        <h5 data-testid='title'  className="text-[#5d3ebc] text-center	 mb-3.5 font-semibold text-base">Adresine getiren restoranları gör</h5>
      
        <article className="relative">
          <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" className="react-autosuggest__container">
            <div className="border-inherit relative flex align-center shadow-[0px 2px 16px rgb(93, 62, 188, / 8%)] rounded-lg py-3 pr-3 pl-4 ">
            <div className="bg-[#fff] flex gap-x-3 px-3 py-4 ">
              <FiSearch size={18} className='flex-inline justify-center items-center	 ' color="#5d3ebc"/> 
              <div className="flex flex-col-reverse	justify-center relative "> 
                 <input type="text" placeholder="Örn. Etiler mh."  autoComplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" 
                 className="border-transparent leading-4 relative w-full h-full pr-3.5 rounded"
                  tabIndex="0"/>
              </div>
              <div kind="minimal" className="p-1 shrink-0 border-0 bg-[#f3f0fe] "> 
                  <button data-testid='button' aria-label="Find Location" type="button" className="w-full h-full inline-flex 		 text-center font-semibold border-0 cursor-pointer decoration-inherit border-inherit	bg-inherit rounded-lg ">
                    <div  > 
                      <MdLocationSearching size={18} color='#5d3ebc'
                      className='inline-flex  align-middle		justify-content font-semibold  ' viewBox="-2 -2 16 27"/> 
                    </div>
                    <span data-testid='text' type='primary' className="ml-1 text-[#5d3ebc] align-middle	 leading-4 tracking-normal px-2 py-2 " >Konumumu bul</span>
                  </button>
              </div>
            </div>  
           </div>
          </div>
          </article>
          <div className="text-center my-4  relative "> 
             <span data-testid='text' type='primary' className="text-[#697488]  font-semibold px py-3 leading-4 text-sm "> <div className='divider'><span className="divider::after 
             divider::before divider:not(:empty)::before divider:not(:empty)::after">veya</span> </div> 
             
             </span>
          </div>
          <h5 data-testid='title'  className="text-[#5d3ebc] text-center	 mb-3.5 font-semibold text-base">Giriş yap veya kayıt ol </h5>
          <div className="mx-2 grid gap-y-3">
            <div className="h-14 flex gap-x-2">
          <ReactFlagsSelect
            countries={Object.keys(phones)}
            customLabels={phones}
            selected={selected}
            onSelect={(code) => setSelected(code)}
            className="flag-select"
          />
           <label
            className="flex-1 relative group block cursor-pointer">
            <input type="tel" required  className="h-14 px-4 border-2  border-gray-200 rounded w-full transition-colors group-hover:border-[#5d3ebc] outline-none focus:border-[#5d3ebc] peer text-sm pt-2"  />
            <span className="absolute top-0 left-0 h-full px-4 flex items-center text-[#a2a2a2] text-sm  peer-focus:h-7  peer-focus:text-[#5d3ebc] peer-focus:text-xs peer-valid:h-7  peer-valid:text-[#5d3ebc] peer-valid:text-xs transition-all">
                  Telefon Numarası
                </span>
           </label>
           </div>
           <button className="bg-[#ffd300] text-[#5d3ebc]  p-3 font-semibold  rounded hover:bg-[#7849f7] hover:text-[#ffd300] ">Telefon numarası ile devam et </button>
          </div>
         </div>
       </div>
      </div>
    </div>
      );
    }

  export default UserLogin
  
