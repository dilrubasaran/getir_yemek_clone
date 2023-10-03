import { useEffect, useState } from "react";
import kitchensData from '../api/kitchensData.json';

import Title from './ui/Title';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Kitchens = () => {

    const[kitchens, setKitchens] =useState([]);

    useEffect(()=>{
        setKitchens(kitchensData);
    }, []);

    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "40px",
      slidesToShow: 8,
      swipeToSlide: true,
      arrows: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };

 return(
 <div>
    <div  className=" container mx-auto mb-2 py-4">
      
        <Title className="mx-1"> Mutfaklar</Title>
    </div>
    <div>
      <Slider {...settings}>
        {kitchensData.map((item)=>(
          <div className="mb-5 container">
            <div className="mx-1">
              <img className="text-[#5d3ebc] w-40 h-35 rounded  " src={item.image} alt={item.title}/>
              <hr className="w-40 h-35 "/> 
              <h1 className="text-[#5d3ebc] text-sm font-semibold items-center text-center bg-white " >{item.title}</h1> 
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
    </div>
 )
}

export default Kitchens