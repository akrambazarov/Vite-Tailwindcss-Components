import React from 'react'
import PC from './assets/img/PC';
import FaceBookIcon from './assets/icons/faceBookIcon';
import Instagram from './assets/icons/Instagram';
import Twitter from './assets/icons/Twitter';
import Button from './assets/icons/button';
import Star from './assets/icons/star';
const Footer = () => {
  return (
    <div className="overflow-hidden relative content-block ">
    <div className="absolute max-md:top-[30rem] max-sm:top-[58rem] max-sm:right-[-5rem]  rounded-full blur-2xl top-[15rem] right-0 w-[24rem] h-[24rem] bg-radial from-[#4c9ba5] to-[#638bd6] "></div>

  <div className="container mx-auto px-4 py-16">
  <div className="relative h-0 z-0">
    <div className='absolute top-60 lef-0 blur-3xl max-sm:w-full size-64 rounded-full bg-radial-[at_50%_75%] from-[#27c3dd] via-[#36a5b7] to-[#566bf9] to-90% '></div>
<div className="absolute rounded-full radial-gardient"></div>
  <div className=" gradient-border "></div>
  <div className='radial-gradient-big relative rounded-full p-[1rem] w-[85rem] h-[85rem] left-2/6 max-md:left-2/16 max-md:-top-[80rem] -top-[53rem]'></div>
</div>
    <div className="grid max-sm:flex max-sm:flex-col z-20 relative lg:grid-cols-2 gap-12 items-center">
      <div className="">
        
      <PC/>
      </div>
      
      <div className=" text-white max-sm:w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Get what you need online, completely undetected.
        </h1>
        
        <p className="text-lg mb-8 text-gray-200">
          30 Day money back guarantee. If you're not 100% satisfied with vping. We'll refund your payment. No hassle, no risk.
        </p>
        
        <div className="mb-8">
        <div className="flex gap-2.5 items-end">
  <Star className="size-8 max-sm:size-6 fill-white stroke-white"/>
  <h4 className='font-bold text-2xl max-sm:text-xl'>Trustpilot</h4>
  <div className="w-1/4 ">
  <div className="flex">
  <Star className ="stroke-white "/>
  <Star className ="stroke-white "/>
  <Star className ="stroke-white "/>
  <Star className ="stroke-white "/>
  </div>
 
</div>
<span className='font-medium text-end'>4.7 out of 5</span>

</div>

        </div>
        
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <span className="text-gray-200">Start from</span>
            <span className="text-yellow-400 text-3xl font-bold">$2.99</span>
            <span className="text-gray-200">/ month</span>
          </div>
        </div>

        <Button 
          text="Get Started"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 font-sans text-lg font-semibold rounded-lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  </div>
  <footer className=" relative text-white py-8 px-4 md:px-8 max-w-6xl mx-auto">
  <div className="absolute rounded-full z-0 -bottom-48 -left-[12rem] w-[32rem] border-[3rem] h-[32rem] border-[#5d91d6] "></div>


<div className="grid grid-cols-1 z-20 relative md:grid-cols-[35%_20%_15%_20%] gap-8">
<div className="mb-6">
<h2 className='uppercase text-white  font-extrabold max-md:text-xl'>vpng<span className='text-amber-200'>.</span></h2>
<p className="text-sm">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
</p>
</div>
{/* Product Column */}
<div>
<h3 className="font-semibold text-lg mb-4">Product</h3>
<ul className="space-y-2">
  <li><a href="#" className="hover:text-gray-900 transition">Download</a></li>
  <li><a href="#" className="hover:text-gray-900 transition">Pricing</a></li>
  <li><a href="#" className="hover:text-gray-900 transition">Server</a></li>
  <li><a href="#" className="hover:text-gray-900 transition">VPN for Business</a></li>
  <li><a href="#" className="hover:text-gray-900 transition">VPN for Non-Profit</a></li>
</ul>
</div>

{/* Company Column */}
<div>
<h3 className="font-semibold text-lg mb-4">Company</h3>
<ul className="space-y-2">
  <li><a href="#" className="hover:text-gray-900 transition">What's is VPN?</a></li>
  <li><a href="#" className="hover:text-gray-900 transition">FAQ</a></li>
  <li><a href="#" className="hover:text-gray-900 transition">Tutorials</a></li>
  <li><a href="#" className="hover:text-gray-900 transition">About us</a></li>
  <li><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
</ul>
</div>

{/* Connect with us Column */}
<div>
<h3 className="font-semibold text-lg mb-4">Connect with us</h3>
<div className="flex space-x-4">
  <a href="#" className="text-white hover:text-zinc-300 transition">
    <FaceBookIcon/>
  </a>
  <a href="#" className="text-white hover:text-zinc-300 transition">
    <Twitter/>
  </a>
  <a href="#" className="text-white hover:text-zinc-300 transition">
    <Instagram/>
  </a>
</div>
</div>
</div>

</footer>
</div>
  )
}

export default Footer