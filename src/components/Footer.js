import { useEffect, useState } from "react";
import footerData from '../api/footer.json';
import SocialMedia from "./SocialMedia";
import { Collapse } from 'react-collapse';
import { useWindowWidth } from '@react-hook/window-size';
import { RiArrowDownSLine } from 'react-icons/ri';
import lib from "react-slick";

const Footer = ({title, items, url, title2 }) => {

    const[footerMenu, setFooterMenu] =useState([]);

    useEffect(()=>{
        setFooterMenu(footerData);
    }, []);

    const windowWidth = useWindowWidth();
    const [isOpen, setIsOpen] = useState(true);
  
    const toogleCollapse = () => {
      if (windowWidth <= 768) {
        setIsOpen(!isOpen);
      }
    };
  
    useEffect(() => {
      if (isOpen && windowWidth <= 768) {
        setIsOpen(false);
      }
      if (!isOpen && windowWidth > 768) {
        setIsOpen(true);
      }
    }, [windowWidth, isOpen]);

    return(
        <div className="bg-white mt-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-4 pt-10">
              <section>
                <nav className="grid gap-y-4  ">
                  <h6 className="text-lg text-[#5d3ebc]">Getiri indirin
                  </h6> 
                  <a href="#">
                    <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="app store" />
                  </a>
                  <a href="#">
                  <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="google play store" />
                  </a>
                  <a href="#">
                    <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="app gallery" />
                  </a>
                </nav>
              </section>
                  
               {footerMenu.map((menu, index) => ( 
                     
                    <nav key={index} className="grid gap-y-2 md:gap-y-4">
                      <h6
                     
                      className="text-lg text-[#5d3ebc] mb-3 flex items-center justify-between">
                     
                      {menu.title}
                      <button className="w-8 h-8  
                        md:hidden rounded-lg bg-[#5d3ebc] bg-opacity-5  text-[#5d3ebc] flex items-center justify-center">
                        
                      </button>
                      
                    </h6> 
                    <ul>{menu.items.map((menuItem, itemIndex)=> <li key={itemIndex}><a href={menuItem.url}>{menuItem.text}</a></li>)}</ul>
                  </nav>
                  ))}
                  
                </div>
              <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t      
              border-gray-200 mt-6 py-6">
              <div className="text-xs text-gray-700 flex 
               gap-x-8">
                &copy; 2022 Getir
                <a href="#" className="text-[#5d3ebc] relative before:w-0.5 before:h-0.5 before:bg-black before:absolute before:-left-5 before:top-1/2 before:-translate-y-1/2
                before:rounded-full">Bilgi Toplumu Hizmetleri </a>
              </div>
              <SocialMedia/>
            </div> 
          </div>
       </div>
    )
}

export default Footer