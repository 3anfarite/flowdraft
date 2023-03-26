import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const HeroForm = () => {

   const [title, setTitle] = useState("");
   const [para, setPara] = useState("");

   const handleSave = async () => {
      const newData = {
        hero: 
          {
            title: title || '',
            para: para || '',
          },
        
      };
      try {
        const response = await axios.post('/api/validate-hero', newData);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

   return (
      <>
         <div className="px-6 my-24 py-12 md:px-12 bg-gray-50 text-black text-center lg:text-left">

            <div class="mb-6">
               <label for="base-input" className="block mb-2 text-sm font-medium text-black ">Edit Hero Title</label>
               <input onChange={(e) => setTitle(e.target.value)} type="text" id="base-input" className="bg-white border border-gray-300 text-black text-sm  focus:gray focus:gray block w-1/2 p-2.5 " />
            </div>
            <div className="mb-6">
               <label for="large-input" className="block mb-2 text-sm font-medium text-black ">Edit Hero Paragraph</label>
               <textarea onChange={(e) => setPara(e.target.value)} type="text" id="large-input" className="block w-1/2 p-4 text-black border border-gray-300  bg-white sm:text-md focus:gray focus:gray " />
            </div>

            <div className="mt-5 mx-auto hidden md:flex md:mt-8" onClick={handleSave} >
               <a className=" inline-flex items-center font-ibm justify-center h-12 px-6 mr-6 font-semibold py-3 border-transparent text-white bg-black hover:bg-gray">
                  Edit
               </a>
            </div>
         </div>
      </>
   )
}

export default HeroForm