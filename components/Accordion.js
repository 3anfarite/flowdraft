import React, {useEffect} from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import courses from '../assets/data/courseDetails.json'


const Accordion = ({item}) => {

  useEffect(() => {
    console.log(item)
  }, [])
  

   return (
      <>
      
          <Disclosure  >
          {({ open }) => (
            <div>
              <Disclosure.Button  className="flex w-full justify-between border border-b bg-white px-4 py-5 text-left text-base font-semibold font-alt text-black hover:opacity-75 ">
                <span>{item.title} </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm font-semibold  border border-b whitespace-pre-line  text-black bg-white">
              {item.description} 
              </Disclosure.Panel>
            </div>
         
          )}
         </Disclosure>

      </>
   )
}

export default Accordion