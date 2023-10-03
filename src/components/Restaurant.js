
const Restaurant = () => {
    return(
        <div className="bg-[url('https://getir.com/_next/static/images/partners-background-e516806adcf95650572224b0c2e681f3.jpg')] ">
           
            <div className="flex items-center truncate  mt-10 mb-4 rounded "> 
                <img src="https://cdn.getir.com/getirweb-images/common/partners-main.jpg" alt="restorant-açık" />

                <div className="flex flex-col ml-6 ">
                   <h3 className="inline-block text-[#5d3ebc] text-3xl font-bold	leading-9 mb-2 ">Restoran sahibi misiniz?</h3>
               <p className="text-[#697488] font-semibold mr-4 leading-5 text-base	">GetirYemek restoran iş ortaklarından biri olun, işinizi daha az maliyetle büyütün, müşteri memnuniyetini artırın.</p>  
                </div>  
             
            <div className="flex ">
                <a href="https://restoran.getiryemek.com/form/on-basvuru/" target="_blank" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 mr-9 rounded text-color-[#5d3ebc] px-8 py-4 shrink whitespace-nowrap ">
                   <div kind="transparent" className="select-none inline-flex text-[#5d3ebc] bg-[#0000] border-0 p rounded	">
                        <button aria-label="Apply Button" type="button" className="w-full h-full inline-flex items-center justify-center font-semibold leading-4 outline-0 border-0	 cursor-pointer	bg-inherit border-inherit	" >
                            Hemen Başvur
                        </button>
                   </div>
                </a>
            </div> 
          </div>
        </div>
    )
}

export default Restaurant