import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {

  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isLoading, setIsLoading] = useState(false);



  const handleSubmit = async (userName, subject, email, message) => {
    const ErrorNotify = () => toast("An Error has occured please try again later!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type:'error',
      });
    const SuccessNotify = () => toast("Email sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type:'success',
      });
    const ErrorInputNotify = () => toast("Please fill the fields", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type:'warning',
      });

    const data = {
      userName,
      subject,
      email,
      message,
    };
if(data.email!=="" || data.subject !=="" || data.userName !=="" || data.message !==""  ){
    try {
      setIsLoading(true);
      
      const response = await axios.post('/api/send-mail', data);
      console.log(response);
      SuccessNotify();

      setIsLoading(false);
      
    } catch (error) {
      setIsLoading(true)
      console.log(error);
      setIsLoading(false);
      ErrorNotify();
    }
  }else ErrorInputNotify();
  };

  return (
    <section className="text-black body-font relative">
      <ToastContainer />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-5xl text-2xl font-semibold font-eb mb-4 text-black">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed font-alt text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm font-ibm text-black">Name</label>
                <input type="text" id="name" name="name" className="w-full  border border-black bg-white focus:bg-opacity-50 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={userName} onChange={(e) => setName(e.target.value)} required />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm font-ibm text-black">Email</label>
                <input type="email" id="email" name="email" className="w-full  border border-black bg-white focus:bg-opacity-50 text-base outline-none  text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="subject" className="leading-7 text-sm font-ibm text-black">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full  border border-black bg-white focus:bg-opacity-50 text-base outline-none  text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={subject} onChange={(e) => setSubject(e.target.value)} required></input>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="message" className="leading-7 text-sm font-ibm text-black">Message</label>
                <textarea type="text" id="message" name="message" className="w-full  border border-black bg-white focus:bg-opacity-50 text-base outline-none  h-32  text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
              </div>
            </div>

            {isLoading ?
              <div className="mt-5 max-w-md mx-auto hidden md:flex justify-center items-center md:mt-8" role="status">
                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-white animate-spin fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              :
              <button id="handle-submit-email" type='button' onClick={() => handleSubmit(userName, subject, email, message)} className="bg-black mt-5 max-w-md mx-auto md:flex justify-center items-center md:mt-8">
                <a className="inline-flex items-center font-ibm justify-center h-12 px-6 font-semibold py-3 -transparent text-white  hover:bg-gray">
                  Send
                </a>

              </button>
            }

            <div className="p-2 w-full pt-8 mt-8 -t text-center">
              <p className="leading-normal my-5">49 Smith St.
                <br />Saint Cloud, MN 56301
              </p>
              <span className="inline-flex ">
                <a className="text-black p-5 ">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-black  p-5">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-black p-5">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-4 text-black p-5">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactPage