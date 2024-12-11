import React from 'react'
import images from '../../../constants/images'

const CTA = () => {
  return (     
      <>
        <svg 
          className='w-full h-auto max-h-40 translate-y-[1px]' 
          preserveAspectRatio='none'
          id="svg" 
          viewBox="0 0 1440 390" 
          xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stop-color="#F78DA7"></stop>
                <stop offset="95%" stop-color="#8ED1FC"></stop>
              </linearGradient>
            </defs>
            <path d="M 0,400 L 0,100 C 27.895540666917306,109.15491765426003 55.79108133383461,118.30983530852008 90,116 C 124.20891866616539,113.69016469147992 164.73121533157888,99.91557642017973 203,82 C 241.26878466842112,64.08442357982027 277.2840573398499,42.027859010761006 315,51 C 352.7159426601501,59.972140989238994 392.13255530902154,99.97298753677627 427,101 C 461.86744469097846,102.02701246322373 492.185721424064,64.0801908421339 521,56 C 549.814278575936,47.91980915786609 577.1245589947225,69.70624909468809 610,87 C 642.8754410052775,104.29375090531191 681.3160425970457,117.09481277911371 718,112 C 754.6839574029543,106.90518722088629 789.6112706170948,83.91449978885706 822,91 C 854.3887293829052,98.08550021114294 884.2388749345756,135.247188065458 919,134 C 953.7611250654244,132.752811934542 993.4332296446028,93.09674794931097 1027,79 C 1060.5667703553972,64.90325205068903 1088.0282064870137,76.3658201372981 1121,99 C 1153.9717935129863,121.6341798627019 1192.4539444073425,155.43997150149667 1225,147 C 1257.5460555926575,138.56002849850333 1284.1560158836164,87.87429385671524 1319,73 C 1353.8439841163836,58.12570614328476 1396.9219920581918,79.06285307164238 1440,100 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,233 C 26.062885025831108,259.59821538921904 52.125770051662215,286.1964307784381 90,276 C 127.87422994833778,265.8035692215619 177.55980481918226,218.81249227546667 220,213 C 262.44019518081774,207.18750772453333 297.6350106716089,242.55360011969526 324,260 C 350.3649893283911,277.44639988030474 367.9001524943821,276.973107245752 400,257 C 432.0998475056179,237.02689275424802 478.76437935086255,197.55397089729678 513,200 C 547.2356206491374,202.44602910270322 569.0423301021676,246.8110091650609 601,256 C 632.9576698978324,265.1889908349391 675.0663002404671,239.20199244245964 716,221 C 756.9336997595329,202.79800755754036 796.6924689359637,192.38102106510055 835,200 C 873.3075310640363,207.61897893489945 910.1638240156782,233.27392329713814 942,234 C 973.8361759843218,234.72607670286186 1000.6522350013238,210.52328574634694 1027,217 C 1053.3477649986762,223.47671425365306 1079.2272359790265,260.632933717474 1116,264 C 1152.7727640209735,267.367066282526 1200.4388210825698,236.94497938375702 1241,219 C 1281.5611789174302,201.05502061624298 1315.0174796906942,195.587148747498 1347,200 C 1378.9825203093058,204.412851252502 1409.491260154653,218.70642562625102 1440,233 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1">
            </path>
        </svg>
      <section className='relative bg-blue-300 px-5'>
        <div className='container grid grid-cols-12 mx-auto py-10'>
          <div className='col-span-12'>
            <h2 className='text-dark-light font-roboto font-bold text-2xl'> Get Our stories delivered From us to your inbox weekly. </h2>
            <div className='w-full max-w-[494] mt-12 space-y-3 mx-auto'>
              <input type="text" className='px-4 py-3 rounded-lg w-full placeholder:text-dark-light' placeholder='Your Email' />
              <button className='px-4 py-3 rounded-lg w-full bg-primary text-white font-bold '> Get Started </button>
            </div>
            <p className='text-dark-light text-sm leading-7 mt-6'>
              <span className='font-bold italic text-[#B3BAC5]'>Get a response tomorrow</span> 
              if you submit by 9pm today. If we received after 9pm will get a response the following day.
            </p>
          </div>
          <div className="col-span-12 hidden mb-[70px] md:block md:order-first" >
            <div className='w-3/4 mx-auto relative'>
              <div className={'w-full rounded-xl bg-white p-3 z-[1] relative'}>
                <img src={images.CtaImage} alt="title" className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60' />
                <div className='p-5'>
                  <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>
                    Future of Work
                  </h2>
                  <p className='text-dark-light mt-3 text-sm md:text-lg'>
                    Majority of people will in jobs that don't exist today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default CTA