/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import Header from '@/components/layout/Header'
import { UserButton } from '@clerk/clerk-react'
import { AtomIcon, Code, Code2, Edit, Edit2, Edit2Icon, EditIcon, Share2 } from 'lucide-react'
import React from 'react'

function Home() {
  return (
    <div>
      <Header/>
      <div>
      {/* <img src={'/grid.svg'} className="absolute z-[-10] w-full" 
      width={1200} height={300} /> */}
      {/* <Header/> */}
     <section className=" z-50">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Build Your Resume <span className='text-primary'>With AI</span> </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Effortlessly Craft a Standout Resume with Our AI-Powered Builder</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/auth/sign-in" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="/dashboard" className="inline-flex gap-2 justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Edit <EditIcon/>
            </a>  
        </div>
        
    </div>
</section>
<section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
<h2 className="font-bold text-3xl">How it Works?</h2>
<h2 className="text-md text-gray-500">Create your resume in just 3 easy steps</h2>

<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="flex flex-col items-center rounded-xl border bg-white
         border-gray-200 p-8 shadow-xl transition
         hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/auth/sign-in"
      >
       <AtomIcon className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Create/Login  your account</h2>

        <p className="mt-1 text-sm text-gray-600">
          Create or Login into your accounts with multiple  options. 
        </p>
      </a>

      <a
        className="flex flex-col items-center rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/dashboard"
      >
      <Edit className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Create/Edit Your Resume </h2>

        <p className="mt-1 text-sm text-gray-600">
          Create your resume by filling your details in the form, with the multiple color options 
        </p>
      </a>

      <a
        className="flex flex-col items-center rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="/dashboard"
      >
      <Share2 className='h-8 w-8' />

        <h2 className="mt-4 text-xl font-bold text-black">Download & Share  your Resume</h2>

        <p className="mt-1 text-sm text-gray-600">
          You can also download and share your resume
        </p>
      </a>

    
    </div>

    <div className="mt-12 text-center">
      <a
        href="/"
        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a>
    </div>
    </section>
  </div>
 
    </div>
  )
}
export default Home