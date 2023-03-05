import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const Accordion = () => {
   return (

      <>
       <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between border border-b bg-white px-4 py-5 text-left text-base font-semibold font-alt text-black hover:opacity-75 ">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm border border-b text-black bg-white">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
         
          )}
         </Disclosure>

         <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between border border-b bg-white px-4 py-5 text-left text-base font-semibold font-alt text-black hover:opacity-75 ">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm border border-b text-black bg-white">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
         
          )}
         </Disclosure>

         <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between border border-b bg-white px-4 py-5 text-left text-base font-semibold font-alt text-black hover:opacity-75 ">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm border border-b text-black bg-white">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
         
          )}
         </Disclosure>
      </>
   )
}

export default Accordion