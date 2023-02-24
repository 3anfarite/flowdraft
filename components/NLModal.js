import Image from 'next/image';
import Script from 'next/script';
import logo from '../assets/workflowLogo.png'


const NLModal = ({ onClose, visible }) => {



   if (!visible) return null

   return (

      <>

         

         <Script  id="custom-substack-embed" >
            {`window.CustomSubstackWidget = {
               substackUrl: "mahmoudramdane.substack.com",
            placeholder: "example@gmail.com",
            buttonText: "Subscribe",
            theme: "custom",
            colors: {
               primary: "#231F20",
            input: "#F1F1F1",
            email: "#231F20",
            text: "#FFFFFF",
               }
            };`}
         </Script>
         <Script src="https://substackapi.com/widget.js" async></Script>


         <div className='fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ' >

            {/* <!-- Main modal --> */}
            <div className="rounded p-5 bg-white overflow-hidden">
               <div class="flex items-start justify-between ">

                  <button type="button" onClick={onClose} className="text-black bg-transparent rounded-lg text-sm m-1.5 ml-auto inline-flex items-center " data-modal-hide="staticModal">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
               </div>
               <div className="container px-4 mx-auto">
                  <div className="text-center max-w-xl mx-auto">
                     <div className="mb-6 relative mx-auto ">
                        <Image width={75} height={30} className="absolute top-0 left-0" src={logo} alt="" />
                     </div>
                     <h2 className="mb-3 text-4xl md:text-5xl text-center font-bold font-eb tracking-px-n leading-tight">Join Our Newsletter</h2>
                     <p className="mb-11 font-medium text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condimentum vitae vel purus.</p>

                     {/* SUBSTACK NEWSLETTER */}

                     <div>
                        <div id="custom-substack-embed" className='inline-flex items-center pb-10' ></div>
                     </div>
                     
                     
                     <div className="flex flex-wrap justify-center items-center -m-1.5">
                        <div className="w-auto p-1.5">
                           <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.00033 10.0002V11.3336M4.00033 14.0002H12.0003C12.7367 14.0002 13.3337 13.4033 13.3337 12.6669V8.66691C13.3337 7.93053 12.7367 7.33358 12.0003 7.33358H4.00033C3.26395 7.33358 2.66699 7.93053 2.66699 8.66691V12.6669C2.66699 13.4033 3.26395 14.0002 4.00033 14.0002ZM10.667 7.33358V4.66691C10.667 3.19415 9.47308 2.00024 8.00033 2.00024C6.52757 2.00024 5.33366 3.19415 5.33366 4.66691V7.33358H10.667Z" stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round"></path>
                           </svg>
                        </div>
                        <div className="w-auto p-1.5">
                           <p className="font-sans text-sm text-gray-600">We never share your information to any third party</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </>
   )
}

export default NLModal