import Link from "next/link"

const BlogCard = () => {
  return (
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] bg-white mx-auto  mb-10">
              <div className="overflow-hidden mb-3">
                <img src="https://source.unsplash.com/random" alt="image" className="w-full"
                />
              </div>
              <div className="p-5" >
                <span className="bg-cgrey rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-black mb-5">
                  Dec 22, 2023
                </span>
                <h3>
                  <a href="javascript:void(0)" className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-black hover:text-gray">
                    Meet AutoManage, the best AI management tools
                  </a>
                </h3>
                <p className="text-base text-body-color">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="mt-5 max-w-md mx-auto hidden md:flex md:mt-8">
                  <Link href="#">
                    <a className="inline-flex items-center font-ibm justify-center h-12 px-6 mr-6 font-semibold py-3 border-transparent text-white bg-black hover:bg-gray">
                      Read more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
  )
}

export default BlogCard