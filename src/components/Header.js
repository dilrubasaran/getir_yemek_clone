import '../styles.css';
import GetirYemek from '../assets/GetirYemek.svg';
import Getir from '../assets/Getir.svg';
import GetirBuyuk from '../assets/GetirBuyuk.svg';
import GetirSu from '../assets/GetirSu.svg';
import GetirCarsi from '../assets/GetirCarsi.svg';
import { BiGlobe } from 'react-icons/bi';
import { RiUserFill } from 'react-icons/ri';
import { FaUserPlus } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="bg-[#4c3398]">
            <div className="h-11 z-10 shrink-0">
                <div className='flex items-center justify-between w-full mx-auto h-full'>
                    <div className='inline-flex items-center h-full'>
                        <div className='gap-x-px inline-flex mt-1'>
                            <div data-testid="link" className='inline-flex items-center h-full py-1.5 px-1 hover:bg-[#ffffffa6] hover:rounded-t-md' style={{
                                filter: "brightness(5%) invert(90%) sepia(72%) saturate(3333%) hue-rotate(180deg) contrast(102%)",
                            }}>
                                <a href="#"> <img src={Getir} alt="getir" /></a>
                            </div>
                        </div>

                        <div className='inline-flex mt-1 pointer-events-none	bg-[#ffffffa6] rounded-t-md py-1.5 pl-3'>
                            <a href="+"><img src={GetirYemek} alt="getiryemek" /></a>
                        </div>

                        <div className='inline-flex mt-1'>
                            <div data-testid="link" className='inline-flex items-center h-full py-1.5 px-1 hover:bg-[#ffffffa6] hover:rounded-t-md' style={{
                                filter: "brightness(5%) invert(90%) sepia(72%) saturate(3333%) hue-rotate(180deg) contrast(102%)",
                            }}>
                                <a href="$"><img src={GetirBuyuk} alt="getirbüyük" /></a>
                            </div>
                        </div>

                        <div className='inline-flex mt-1'>
                            <div data-testid="link" className='inline-flex items-center h-full py-1.5 px-1 hover:bg-[#ffffffa6] hover:rounded-t-md' style={{
                                filter: "brightness(5%) invert(90%) sepia(72%) saturate(3333%) hue-rotate(180deg) contrast(102%)",
                            }}>
                                <a href="-"><img src={GetirSu} alt="getirsu" /></a>
                            </div>
                        </div>

                        <div className='inline-flex mt-1'>
                            <div data-testid="link" className='inline-flex items-center h-full py-1.5 px-1 hover:bg-[#ffffffa6] hover:rounded-t-md' style={{
                                filter: "brightness(5%) invert(90%) sepia(72%) saturate(3333%) hue-rotate(180deg) contrast(102%)",
                            }}>
                                <a href="}"><img src={GetirCarsi} alt="getircarsi" /></a>
                            </div>
                        </div>
                    </div>

                    <nav className="flex gap-x-8 items-center text-sm font-semibold ">
                        <a href="" className='flex select-none items-center border-0 p-0 rounded-none text-right gap-x-2 text-[#dbdbff] '>
                            <BiGlobe size={20} />
                            Türkçe (Tr)
                        </a>

                        <a href="" className='flex items-center text-[#dbdbff] select-none items-center border-0 p-0 rounded-none gap-x-2  '>
                            <RiUserFill size={20} />
                            Giriş Yap
                        </a>

                        <a href="" className='flex items-center text-[#dbdbff] select-none items-center border-0 p-0 rounded-none gap-x-2 '>
                            <FaUserPlus size={20} />
                            Kayıt Ol
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
