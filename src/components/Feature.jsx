import React from "react";
import {BiTimer} from "react-icons/bi"
import {BsRobot} from "react-icons/bs"
import {MdMoneyOffCsred} from "react-icons/md"
import third from "../assets/third.png"

export const FeatureThree = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24 relative">
      {/* third section bg image */}
      <div className="absolute -z-0 top-0 opacity-0 sm:left-[0] xl:left-[23%] sm:opacity-70 xl:opacity-100">
        <img src={third} height={200} width={200} loading="lazy"/>
      </div>
      

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-indigo-600">
            <p className="text-xs font-semibold tracking-widest text-white uppercase">
              Quick+ Ai assist Code conversions
            </p>
          </div>
          <h2 className="relative mt-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
          Transform Your Code Effortlessly with Our AI-powered Converter
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
          Convert code to any language in seconds with our easy-to-use tool
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
          <div className="transition-all duration-200 bg-white hover:shadow-xl rounded-lg">
            <div className="py-10 px-9 text-gray-800">
              <div className="text-[50px] flex justify-center text-indigo-600">
                <BiTimer/>
              </div>
              
              <h3 className="mt-8 text-lg font-semibold text-black">
              Quick and Efficient Conversion
              </h3>
              <p className="mt-4 text-base text-gray-600">
              Our AI-powered tool ensures lightning-fast conversion times
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 bg-white hover:shadow-xl rounded-xl">
            <div className="py-10 px-9 text-gray-800">
            <div className="text-[50px] flex justify-center text-indigo-600">
                <BsRobot/>
              </div>

              <h3 className="mt-8 text-lg font-semibold text-black">
              AI-assisted Conversion
              </h3>
              <p className="mt-4 text-base text-gray-600">
              Leverage the power of AI to convert code with ease.
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 bg-white hover:shadow-xl rounded-xl">
            <div className="py-10 px-9 text-gray-800">
            <div className="text-[50px] flex justify-center text-indigo-600">
                <MdMoneyOffCsred/>
              </div>

              <h3 className="mt-8 text-lg font-semibold text-black">
              Easy and Free to Use
              </h3>
              <p className="mt-4 text-base text-gray-600">
              Our user-friendly interface makes code conversion a breeze + Our tool is completely free, with no hidden costs or fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeatureThree.displayName = "FeatureThree";
