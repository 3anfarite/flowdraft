import React from 'react'
import Script from 'next/script'
import BlogCard from '../components/BlogCard'


const blog = () => {



  return (
    // <div><iframe src="https://macad.speckle.xyz/embed?stream=6928630d02&commit=449d11214e&transparent=true&autoload=true&hidecontrols=true&hidesidebar=true&commentslideshow=true" width="600" height="400" frameborder="0"></iframe></div>

    <>



      <Script  id='substack-feed-embed' >
        {`window.SubstackFeedWidget = {
          substackUrl: "mahmoudramdane.substack.com",
          posts: 12,
          layout: "center",
          colors: {
            primary: "#231F20",
            secondary: "#231F20",
            background: "#F1F1F1",
          }
        }; `}
      </Script>
      <Script src="https://substackapi.com/embeds/feed.js" async></Script>
      <section className="pt-20 px-10 lg:pt-[120px] pb-10 lg:pb-20">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">

              <h2
                className="font-bold text-5xl font-eb sm:text-4xl md:text-[40px] text-black mb-4"
              >
                Our Recent News
              </h2>
              <p className="text-base font-alt text-black">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap " >
          {/* <BlogCard />
          <BlogCard />
          <BlogCard /> */}
          <div id="substack-feed-embed" className="p-5 [&>a]:m-10 " ></div>
        </div>


      </section>
    </>

  )
}

export default blog