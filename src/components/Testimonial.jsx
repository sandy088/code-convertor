import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Loading from "./Loading";
import sandy from "../assets/sandy.png"

export const TestimonialOne = () => {

    const {randomQ, randomQoute, isLoading} = useContext(AppContext)

    useEffect(()=>{
        randomQoute()
    },[])
  return (
    <section className="mx-auto px-10  py-10 bg-slate-800 flex items-center">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8 bg-[#0f172a] p-8 rounded-xl py-10">
        <div className="flex items-center justify-center space-x-14 flex-wrap md:flex-nowrap">
          <div className="relative flex-shrink-0 w-48 h-48 flex-wrap">
            <img
              className="relative object-cover w-48 h-48 rounded-full"
              // change your image from here
              src= {sandy}
              alt="Sandeep Singh"
              loading="lazy"
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-xl text-black dark:text-white">
                {
                    isLoading? (<Loading/>) : randomQ
                }
                
              </p>
            </blockquote>
            <p className="text-lg font-semibold text-black dark:text-white mt-7">
              Sandeep Singh
            </p>
            <p className="mt-1 text-base text-gray-600">
              Frontend Developer at C-con
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

TestimonialOne.displayName = "TestimonialOne";
