
import './App.css'
import './index.css'
import Header from './header'
import Button from './assets/icons/button';
import Star from './assets/icons/star';
import serverOne from './assets/img/server.png'
import R from './assets/icons/R';
import L from './assets/icons/l';
import Youtube from './assets/icons/Youtube';
import Netflix from './assets/icons/netflix';
import PrimeVideo from './assets/icons/primeVideo';
import Nbo from './assets/icons/nbo';
import ServerVector from './assets/img/serverVector';
import LaptopVector from './assets/img/laptopVector';
import MoneyVector from './assets/img/MoneyVector';
import ButtonGreen from './assets/icons/buttonGreen';
import Done from './assets/icons/done'
import PremiunCard from './assets/icons/premiunCard';
import Fast from './assets/icons/fast';
import Safe from './assets/icons/safe';
import Security from './assets/icons/security';
import Fastest from './assets/icons/fastest';
import BgBackLogo from './assets/icons/bgBackLogo';
import MenAvatar from './assets/img/MenAvatar';
import Avatar from './assets/img/avatar.png'
import Footer from './footer';
function App() {
  const faqQuestion = [
    { question: "Which plan is right for me?" },
    { question: "How does your pricing work?" },
    { question: "What if I change my mind?" },
    { question: "Can I change my plan?" },
    { question: "How can I manage my billing" },
    { question: "What payment methods do you accept?" },
    { question: "Can I use my account on multiple devices?" },
    { question: "What is the 30-days money back policy?" },
  ];
  return (
   <div className='overflow-hidden'>
    <div className=' w-full h-fit content-block overflow-hidden'>
    <Header/>
    {/* Hero Block */}
    <div className="relative w-[80%] mx-auto max-lg:w-[90%]">
      {/* radial-gradient */}
      <div className="relative h-0">
    <div className="absolute rounded-full radial-gardient"></div>
      <div className=" gradient-border "></div>
      <div className='radial-gradient-big relative rounded-full p-[1rem] w-[85rem] h-[85rem] left-2/6 max-md:left-2/16 max-md:-top-[80rem] -top-[53rem]'></div>
    </div>
    {/* Section Descreption */}
    <section className='grid md:grid-cols-2 max-lg:w-full w-[80%] mx-auto z-10 relative gap-12 md:w-auto max-w-7-xl'>
    <div className="flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Get access to worldwide content
          </h1>
          <p className="text-gray-100 mb-8">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
          </p>
          <div className="space-y-4">
            <div className="flex items-baseline gap-2 text-xl">
              <span>Start from</span>
              <span className="text-yellow-400 font-bold font-mono text-3xl">$2.99</span>
              <span>/ month</span>
            </div>
            <Button text="Get Started" className=" hover:bg-yellow-400 bg-amber-300 text-black transition-all font-semibold w-fit" size="lg">
              Get Started
            </Button>
            <p className="text-sm text-gray-200">*30-Days money back guarantee</p>
          </div>
    </div>
    <div className="absolute max-md:top-[30rem]  rounded-full blur-2xl top-[-25px] right-0 w-[24rem] h-[24rem] bg-radial from-[#4c9ba5] to-[#638bd6] "></div>
        
    <div className="relative">
          <img
            src={serverOne}

            alt="Server"
            className="w-full h-auto z-20 object-contain"
          />
        </div>
    </section>

    </div>

    </div>
{/* Walwe gradient */}
    <div className="relative h-[2rem] w-full">
    <svg 
      className="absolute top-0 left-0 w-full h-full"
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient 
          id="waveGradient" 
          x1="0%" 
          y1="0%" 
          x2="100%" 
          y2="0%"
          gradientTransform="rotate(25)"
        >
          <stop offset="5%" stopColor="#518fff" />
          <stop offset="60%" stopColor="#578aea" />
          <stop offset="90%" stopColor="#5f83d0" />
          <stop offset="100%" stopColor="#578aec" />
        </linearGradient>
      </defs>
      
      <path 
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        fill="url(#waveGradient)"
      />
    </svg>
  </div>
{/* Trustpilot */}
  <div className="flex w-full p-6 py-32  max-md:flex-col max-md:py-16 max-md:gap-16 md:gap-24 items-center justify-center text-black">
    <div className="flex items-center ">
    <L/>
      
      <h4 className='text-center max-md:text-start text-[12px] '><span className='max-md:hidden'>Trusted by</span> <br /><span className='font-bold max-md:text-xs text-[12px]'>Over 100 milion members</span><br /><span className='max-md:hidden'>worlwide</span></h4>
     <R/>
    </div>
    <div className="text-center grid gap-1">
    <div className="flex gap-2.5 items-end">
      <Star className="size-8 fill-amber-300 stroke-amber-300"/>
      <h4 className='font-bold text-2xl'>Trustpilot</h4>
    </div>
    <div className=" ">
      <div className="flex">
      <Star className ="stroke-amber-500"/>
      <Star className ="stroke-amber-500"/>
      <Star className ="stroke-amber-500"/>
      <Star className ="stroke-amber-500"/>
      <Star className ="stroke-amber-500"/>
      </div>
      <span className='font-medium text-end'>4.7 out of 5</span>
    </div>
    </div>

    <div className="flex items-center ">
      <L/>
      <h4 className='text-center max-md:text-start text-[12px] '><span className='max-md:hidden'>Trusted by</span> <br /><span className='font-bold max-md:text-xs text-[12px]'>Over 100 milion members</span><br /><span className='max-md:hidden'>worlwide</span></h4>
      <R/>
    </div>
    
  </div>


{/* Laptop Vector Block */}
  <div className="container w-[90%] mx-auto max-md:h-full flex items-center md:flex-row max-md:flex-col gap-16 py-6">
    <div className="md:w-1/3 max-sm:w-[19rem] flex justify-center ">
    <LaptopVector/>
    
    </div>
    <div className="md:w-1/2 max-sm:w-full flex flex-col">
      <h2 className="text-3xl md:text-4xl max-sm:text-xl font-bold mb-5">
        One gateway endless entertainment
      </h2>
      <p className="mb-7 text-gray-700">
        Content at the tip of your fingers! With thousands of servers and millions of IPs, you can access websites and enjoy your favourite movies, TV shows, games, and more; in over 190 countries.
      </p>
      <div className="svgIcons grid gap-2 justify-center lg:grid-cols-4 items-center grid-cols-2 mt-2">

        <Netflix/>
        <Youtube/>
        <PrimeVideo/>
        <Nbo/>
      </div>
    </div>

  </div>
{/* Server Vector Block*/}
  <div className="container w-[90%] px-6 max-md:w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-12 mt-28">
    <div className="md:w-1/2 flex flex-col">
    <h2 className="text-3xl md:text-4xl font-bold mb-5">Putting power back<br />into your hands</h2>
    <p className="text-gray-700  mb-8">Instant protection to enhance your online privacy. Browse the internet safely and anonymously.</p>
    <ButtonGreen text="Get Started"/>
    </div>
    <div className='md:w-1/2 max-sm:w-[23rem] flex justify-center'>
    <ServerVector/>
    </div>
  </div>

{/* Money Vector Block */}
    <div className="container w-[90%] mx-auto max-md:h-full flex items-center md:flex-row max-md:flex-col gap-16 py-6">
      <div className="md:w-1/3 max-md:w-[18rem] flex justify-center">
      <MoneyVector/>
      </div>
      <div className="md:w-full flex flex-col">
      <h2 className="font-bold text-3xl md:text-4xl mb-6">
      30 Days money back <br /> guarantee
      </h2>
    <p className="text-gray-700 mb-6">Since we trust that you will fall in love with vping, we offer our users the option to try it for 30 days. If you don’t enjoy the experience, we will give you a 100% refund.</p>
    <ButtonGreen text="Get Started"/>
    </div>
    </div>
{/*Tarifs Company */}
  <div className="container max-md:h-full max-md:w-full justify-center items-center flex flex-col w-[90%] mx-auto gap-12 py-6 ">
  <div className="text-center max-sm:w-full">
    <h2 className='font-bold md:text-4xl text-3xl  max-sm:text-2xl mb-4 '>Save big with our annual plans</h2>
    <p className='text-gray-700'>Sign up and save a ton! No logs. No hidden fees.</p>
  </div>
  </div>
  <div className='grid max-md:grid-cols-1 max-md:gap-8 lg:grid-cols-[repeat(3,302px)] grid-cols-3 w-full h-fit justify-center pt-2 pb-12'>
 {/* tarif Premium */}
  <div className="max-md:bg-[linear-gradient(360deg,#a263e13b,#ffffffff)] max-md:border-2 max-md:border-purple-400 p-6 max-lg:px-0 max-md:w-[302px] mx-auto py-12 rounded-2xl ">
    <div className="py-2 px-8 flex flex-col  gap-6 ">
    <Button 
  text="Premium plan" 
  className="bg-[#D9CCE6] ml-2 text-xs hover:bg-[#bc9ed9] transition-all rounded-md text-[#410182] font-sans" 
    />
    <h4 className='text-left text-xs font-semibold -mb-4 '>3 Years</h4>
    <h2 className='text-2xl font-bold'>$2.99 <span className='text-xs font-medium'>/ month</span></h2>
    <h4 className='font-semibold text-[14px] -my-4 text-[#410182]'>$107.55
      <span className='relative ml-2'>
      <span className='text-[14px] ml-2.5  text-gray-400 font-medium'>$537.30
      </span>
      
      <span className="absolute top-2.5 left-1 w-full h-0.5 bg-gray-400 -translate-y-1/2 -z-10"></span>
      </span>
      </h4>
      <h4 className='text-xs -mt-2 font-medium text-gray-600 '>Build every 3 years</h4>
      <h4 className='flex items-center -mb-4 text-zinc-600'><Done/><span className='ml-4'> Unlimited bandwitch</span></h4>
      <h4 className='flex items-center -mb-4 text-zinc-600'><Done/><span className='ml-4'> Encrypted connection</span></h4>
      <h4 className='flex items-center -mb-4 text-zinc-600'><Done/><span className='ml-4'> No traffic logs</span></h4>
      <h4 className='flex items-center -mb-4 text-zinc-600'><Done/><span className='ml-4'> Works on all devices</span></h4>
      <h4 className='flex items-center -mb-4 text-zinc-600'><Done/><span className='ml-4'> Instant setup</span></h4>
      <h4 className='flex items-center  text-zinc-600'><Done/><span className='ml-4'> Torrent allowed</span></h4>
    <Button text="Subscribe" className="max-md:bg-[#e69eff] hover:bg-[#d393e9] transition-all text-white  bg-[#01BDAA] w-full border-2 rounded-lg  "/>
    </div>
  
  </div>
   {/* tarif Popular Plan */}
  <div className="p-6 max-md:w-[302px] mx-auto max-lg:px-0 bg-[linear-gradient(358deg,#01bdaa24,#27BEAF00)] border-2 py-12 rounded-2xl border-[#01BDAA]">
    <div className="py-2 px-8 flex flex-col  gap-6 ">
    <Button 
  text="Popular Plan" 
  className="bg-[#d5fbf7] ml-2 text-xs hover:bg-[#CCF2EE] transition-all rounded-md text-[#01BDAA] font-sans" 
    />
    <h4 className='text-left text-xs font-semibold -mb-4 '>1 Years</h4>
    <h2 className='text-2xl font-bold'>$7.59 <span className='text-xs font-medium'>/ month</span></h2>
    <h4 className='font-semibold text-[14px] -my-4 text-teal-500'>$92.26
      <span className='relative ml-2'>
      <span className='text-[14px] ml-2.5  text-gray-400 font-medium'>$177.80
      </span>
      
      <span className="absolute top-2.5 left-1 w-full h-0.5 bg-gray-400 -translate-y-1/2 -z-10"></span>
      </span>
      </h4>
      <h4 className='text-xs -mt-2 font-medium text-gray-600 '>Build every 3 years</h4>
      <h4 className='flex items-center -mb-4 text-zinc-600'><Done/><span className='ml-4'> Unlimited bandwitch</span></h4>
      <h4 className='flex items-center -mb-4 text-zinc-600'><Done/><span className='ml-4'> Encrypted connection</span></h4>
      <h4 className='flex items-center -mb-4 text-zinc-600'><Done/><span className='ml-4'> No traffic logs</span></h4>
      <h4 className='flex items-center -mb-4 text-zinc-600'><Done/><span className='ml-4'> Works on all devices</span></h4>
      <h4 className='flex items-center -mb-4 text-zinc-600'><Done/><span className='ml-4'> Instant setup</span></h4>
      <h4 className='flex items-center  text-zinc-600'><Done/><span className='ml-4'> Torrent allowed</span></h4>
    <Button text="Subscribe" className="text-white  bg-[#01BDAA] w-full border-2 rounded-lg  "/>
    </div>
  
  </div>
   {/* tarif Basic */}
  <div className="max-md:border-2 max-md:bg-[linear-gradient(360deg,#ffb6b68a,#ffffffff)] max-md:border-pink-500 p-6 max-md:w-[302px] mx-auto max-lg:px-0 py-12 rounded-2xl">
    <div className="py-2 px-8 flex flex-col  gap-6 ">
    <Button 
  text="Premium plan" 
  className="bg-[#FFD7E2] ml-2 text-xs hover:bg-[#fdb9b9] transition-all rounded-md text-[#FE356F] font-sans" 
    />
    <h4 className='text-left text-xs font-semibold -mb-4 '>3 Years</h4>
    <h2 className='text-2xl font-bold'>$2.99 <span className='text-xs font-medium'>/ month</span></h2>

      <h4 className='text-xs -mt-6 font-medium text-gray-600 '>Build every 3 years</h4>
      <h4 className='flex items-center mt-8 -mb-4 text-zinc-600'><Done/><span className='ml-4'> Unlimited bandwitch</span></h4>
      <h4 className='flex items-center -mb-4 text-zinc-600'><Done/><span className='ml-4'> Encrypted connection</span></h4>
      <h4 className='flex items-center -mb-4 text-zinc-600'><Done/><span className='ml-4'> No traffic logs</span></h4>
      <h4 className='flex items-center -mb-4 text-zinc-600'><Done/><span className='ml-4'> Works on all devices</span></h4>
      <h4 className='flex items-center -mb-4 text-zinc-600'><Done/><span className='ml-4'> Instant setup</span></h4>
      <h4 className='flex items-center  text-zinc-600'><Done/><span className='ml-4'> Torrent allowed</span></h4>
    <Button text="Subscribe" className="max-md:bg-[#ef7779] hover:bg-[#e37072] transition-all text-white  bg-[#01BDAA] w-full border-2 rounded-lg  "/>
    </div>
  
  </div>
  </div>
{/* Premium Card */}
<div className='relative w-full mt-12 '>
  <div className="absolute -z-10 top-[-80px] right-[-70px]">
  <BgBackLogo/>
  </div>
</div>
<div className="relative container bg-white p-12 w-[90%] z-20  mx-auto rounded-2xl shadow-[0_0_67px_3px_#0000002e]">
    
    <div className="text-center mb-12">
      <h2 className="font-bold text-4xl mb-4">A premium experience</h2>
      <p className="text-xl text-gray-600">The highest rated VPN trusted and loved by our users</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
    <PremiunCard text="No limit"  desc="Enjoy unlimited data - nothing will stop you!" icon={<Fast/>}/>
    <PremiunCard text="100% Safe"  desc="All your data is encrypted, keeping you safe!" icon={<Safe/>}/>
    <PremiunCard text="Fastest VPN"  desc="HD Streaming with fastest VPN,  no buffering!" icon={<Fastest/>}/>
    <PremiunCard text="No-Logs Policy"  desc="Maintain your online privacy and anonymity." icon={<Security/>}/>

    </div>

  </div>
  {/* Rated VPN */}
  <section className='w-full container my-12 mt-28'>
<div className="md:ml-[16rem] max-md:ml-8 flex flex-col gap-4">
  <h2 className='font-bold text-4xl max-md:text-3xl'>The highest rated VPN</h2>
  <span className='text-left'>Trusted and loved by our users</span>
</div>
<div className="flex max-md:flex-col w-fit gap-4 my-12 justify-between items-center">
  <div className="bg-[#410182] rounded-br-xl max-md:-translate-x-4 mx-0 rounded-tr-xl py-8 px-4">
    <div className="flex gap-4 text-white ">
      <h2 className='text-9xl '>"</h2>
      <div className=''>
        <span className=''>
        Since we trust that you will fall in love with vping, we offer our users the option to try it for 30 days. If you don’t enjoy the experience, we will give you a 100% refund. It is a long established fact that a reader will be distracted.
        </span>
          <div className='flex gap-4   items-center '>
            <div className="rounded-full  overflow-hidden mt-6  relative w-[100px] h-[100px] bg-amber-400">
              <img src={Avatar} width={80}  alt="avatar" className='absolute top-5 left-2' />
            </div>
            <div className="text-white ">
              <h4 className='mb-2'>Salina Gomez</h4>
              <span className='text-xs'>Aug 15, 2021</span>
            </div>
            <div className='flex max-sm:flex-col gap-0.5 mt-8'>
              <Star className="size-6 fill-amber-400 stroke-amber-400"/>
              <Star className="size-6 fill-amber-400 stroke-amber-400"/>
              <Star className="size-6 fill-amber-400 stroke-amber-400"/>
              <Star className="size-6 fill-amber-400 stroke-amber-400"/>
              <Star className="size-6 stroke-amber-400"/>

            </div>
          </div>
      </div>
    </div>

  </div>
  <div className=''>
    <MenAvatar/>
  </div>
</div>
  </section>
    {/* Question */}
  <section className="py-20 bg-white ">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
      Questions users are asking
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {faqQuestion.map((faq,index)=>(
        <label key={index} className='bg-white rounded-xl shadow-md px-6 py-5 flex justify-between items-center cursor-pointer transition hover:shadow-lg'>
            <select className='appearance-none' name="" id="">
              <option value="">{faq.question}</option>
            </select>
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </label>
      ))}
    </div>
    </div>
  </section>
  {/* Footer*/}

<Footer/>

  </div>
  )
}

export default App
