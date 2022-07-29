import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes'
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

const Home = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    // const carousel = new Carousel(items, options);

    useEffect(() => setMounted(true), [])
    
    if (!mounted) return null
    
    return (
        <body className="ml-16 antialiased text-gray-700 bg-white dark:text-white dark:bg-slate-700" styles="font-family: 'Roboto', sans-serif">
            
            {/* <script src="../path/to/flowbite/dist/flowbite.js" async></script> */}
            <nav className="flex flex-wrap items-center justify-center p-6">
                
                <div className="flex items-center flex-shrink-0 mr-6 text-dark md:text-right justify-">
                    <span className="text-xl font-semibold tracking-tight hover:text-black"><a href="#">Artware House</a></span>
                </div>
            </nav>

            {/* <div className="max-w-2xl m-auto">
            <div id="default-carousel" className="relative mt-4 mb-4 ml-4" data-carousel="static">

                <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                        <img src="http://drive.google.com/uc?export=view&id=1zliUy5PaN7GwFF5v8K7ss6CuDDOmviGy" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="http://drive.google.com/uc?export=view&id=1og6PQpOcDpvw7OItPepdXkLP2vCPH8am" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="http://drive.google.com/uc?export=view&id=112ZSA2PplOP008lKw8MXPkVSOyQsMISC" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                    </div>
                </div>

                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>

                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={() => {
                carousel.prev();
            }}>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="hidden">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="hidden">Next</span>
                    </span>
                </button>
            </div>
            <p className="ml-4">This carousel component is part of the <a className="text-blue-600 hover:underline" href="https://flowbite.com/docs/components/carousel/" target="_blank" without rel="noreferrer">Flowbite component library.</a></p>
            </div> */}

{/* <div className="font-sans leading-normal tracking-normal bg-white ">
    <div className="relative bg-white shadow-2xl carousel h-96">
        <div className="relative w-2/3 h-full overflow-hidden carousel-inner">
            <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"></input>
            <div className="absolute h-full opacity-0 carousel-item">
                <div className="block  bg-[url('http://drive.google.com/uc?export=view&id=1KYpA0j3Wvx53k6sRlUTZDNdJxTWp9vAK')] text-white text-5xl text-center">Slide 1</div>
            </div>
            <label htmlFor="carousel-3" className="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-1 md:ml-10 hover:text-white hover:bg-yellow-500">‹</label>
            <label htmlFor="carousel-2" className="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-1 md:mr-10 hover:text-white hover:bg-blue-700">›</label>

            <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""></input>
            <div className="absolute h-full opacity-0 carousel-item">
                <div className="block text-5xl text-center text-white bg-yellow-500">Slide 2</div>
            </div>
            <label htmlFor="carousel-1" className="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-2 md:ml-10 hover:text-white hover:bg-blue-700">‹</label>
            <label htmlFor="carousel-3" className="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-2 md:mr-10 hover:text-white hover:bg-blue-700">›</label>

            <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""></input>
            <div className="absolute h-full opacity-0 carousel-item">
                <div className="block h-full w-full bg-[url('http://drive.google.com/uc?export=view&id=1KYpA0j3Wvx53k6sRlUTZDNdJxTWp9vAK')] text-white text-5xl text-center">Slide 3</div>
            </div>
            <label htmlFor="carousel-2" className="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-3 md:ml-10 hover:text-white hover:bg-blue-700">‹</label>
            <label htmlFor="carousel-1" className="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-3 md:mr-10 hover:text-white hover:bg-blue-700">›</label>

            <ol className="carousel-indicators">
                <li className="inline-block mr-3">
                <label htmlFor="carousel-1" className="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700">•</label>
                </li>
                <li className="inline-block mr-3">
                <label htmlFor="carousel-2" className="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700">•</label>
                </li>
                <li className="inline-block mr-3">
                <label htmlFor="carousel-3" className="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700">•</label>
                </li>
            </ol>

        </div>
    </div>
</div> */}

{/* <div id="carouselExampleCaptions" className="relative carousel slide" data-bs-ride="carousel">
  <div className="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="relative w-full overflow-hidden carousel-inner">
    <div className="relative float-left w-full carousel-item active">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        className="block w-full"
        alt="..."
      />
      <div className="absolute hidden text-center carousel-caption md:block">
        <h5 className="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="relative float-left w-full carousel-item">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        className="block w-full"
        alt="..."
      />
      <div className="absolute hidden text-center carousel-caption md:block">
        <h5 className="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="relative float-left w-full carousel-item">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        className="block w-full"
        alt="..."
      />
      <div className="absolute hidden text-center carousel-caption md:block">
        <h5 className="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="inline-block bg-no-repeat carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="inline-block bg-no-repeat carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

  
                        
            <div className="py-20 bg-cover bg-no-repeat bg-fixed bg-[url('http://drive.google.com/uc?export=view&id=1KYpA0j3Wvx53k6sRlUTZDNdJxTWp9vAK')]">
                <div className="container px-6 m-auto text-center opacity-100">
                <h2 className="mb-2 text-4xl font-bold text-white"></h2>
                <div className="border-2 rounded-3xl">
                <h3 className="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg dark:text-white dark:bg-slate-700 hover:border-transparent">Explore Anime Draw House's board "Anime sketch", followed by 137 people on Pinterest</h3>
                </div>
                <br></br>
                <button className="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg dark:text-white dark:bg-slate-700 hover:border-transparent hover:text-slate-100 hover:bg-gray-800 dark:hover:text-blue-500 dark:hover:bg-slate-100" onClick={()=>
                        document.getElementById('modal').classList.toggle('hidden')}>Contact Artist</button>
                </div>
            </div>
                    {/* Socmed Modal */}
                    <div className="fixed top-0 left-0 z-10 hidden w-full overflow-y-auto" id="modal">
                        <div className="flex items-center justify-center px-4 pt-4 pb-20 text-center min-height-100vh sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-900 opacity-75" />
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                            <div className="inline-block overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl align-center dark:bg-slate-700 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <div className="px-4 pt-5 pb-4 bg-white dark:bg-slate-600 sm:p-6 sm:pb-4">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="font-serif text-2xl font-bold leading-7 dark:text-gray-900">Contact Artist By:</h1>
                                                <div className="flex gap-x-3 items-start p-5 rounded-xl  bg-[#F4F9FA] dark:bg-slate-700 border border-[#b5c9c9]">
                                                    <input className="flex-none w-6 h-6 text-black focus:ring-0" type="radio" name="Plan" id="Standard"></input>
                                                    <div className="flex flex-col gap-3">
                                                        <h2 className="text-lg font-medium leading-5">Twiter</h2>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 items-start p-5 rounded-xl bg-[#F4F9FA] dark:bg-slate-700 border border-[#b5c9c9]">
                                                    <input className="flex-none w-6 h-6 text-black focus:ring-0" type="radio" name="Plan" id="Advanced"></input>
                                                    <div className="flex flex-col gap-3">
                                                        <h2 className="text-lg font-medium leading-5">Facebook</h2>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 items-start p-5 rounded-xl bg-[#F4F9FA] dark:bg-slate-700 border border-[#b5c9c9]">
                                                    <input className="flex-none w-6 h-6 text-black focus:ring-0" type="radio" name="Plan" id="Advanced"></input>
                                                    <div className="flex flex-col gap-3">
                                                        <h2 className="text-lg font-medium leading-5">Pinterest</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-3 text-right ">
                                                <button type="button" className="px-4 py-2 mr-2 text-white bg-gray-500 rounded dark:bg-slate-100 dark:text-gray-800 hover:bg-gray-700" onClick={()=>
                                                document.getElementById('modal').classList.toggle('hidden')}>
                                                    <i className="fas fa-times"></i> Cancel
                                                </button>
                                                <button type="button" className="px-4 py-2 mr-2 text-white bg-gray-800 rounded hover:bg-gray-700"><i className="fas fa-plus"></i> Confirm</button>
                                            </div>
                            </div>
                            </div>
                        </div>
                    </div>  
                    {/*End Socmed Modal*/}
                    
                    {/* Category List */}
                    <section className="container p-10 px-6 mx-auto">
                    <h2 className="mb-8 text-4xl font-bold text-center text-gray-800 dark:text-white">Arts List!</h2>
                    <div className="flex flex-wrap items-center mb-20">
                        <div className="w-full pr-10 md:w-1/2">
                        <h4 data-text="Husbando" className="text-3xl text-gray-800 dark:text-slate-100 font-bold mb-3 relative overflow-hidden pb-8 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-slate-700 dark:before:decoration-slate-100 before:absolute before:whitespace-nowrap before:text-transparent hover:before:animate-wave">Husbando</h4>
                        <p className="text-gray-600 temb-8 dark:text-gray-300">A fictional male character from non-live-action visual media (typically an anime, manga, or video game) to whom one is attracted and/or considers their significant other.</p>
                        </div>
                        <div className="w-full md:w-1/2">
                        <img className="rounded-lg" src="http://drive.google.com/uc?export=view&id=1zliUy5PaN7GwFF5v8K7ss6CuDDOmviGy" alt="Husbando" />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center mb-20">
                        <div className="w-full md:w-1/2">
                        <img className="rounded-lg" src="http://drive.google.com/uc?export=view&id=1og6PQpOcDpvw7OItPepdXkLP2vCPH8am" alt="Waifu" />
                        </div>
                        <div className="w-full pl-10 md:w-1/2">
                        <h4 data-text="Waifu" className="text-3xl text-gray-800 dark:text-slate-100  font-bold mb-3 relative overflow-hidden pb-8 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-slate-700 dark:before:decoration-slate-100 before:absolute before:whitespace-nowrap before:text-transparent hover:before:animate-wave">Waifu</h4>
                        <p className="mb-8 text-gray-600 dark:text-gray-300">a fictional female character, usually in anime or related media, that someone has great, and sometimes romantic, affection for.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center mb-20">
                        <div className="w-full pr-10 md:w-1/2">
                        <h4 data-text="Lewd" className="text-3xl text-gray-800 dark:text-slate-100 font-bold mb-3 relative overflow-hidden pb-8 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-slate-700 dark:before:decoration-slate-100 before:absolute before:whitespace-nowrap before:text-transparent hover:before:animate-wave">Lewd</h4>
                        <p className="mb-8 text-gray-600 dark:text-gray-300">Lewd is an English adjective used to describe a subject, act or remark as sexually vulgar, but not necessarily pornographic. The word was largely used by anime and manga fans to express their disdain for erotic depictions of certain characters starting around 2008</p>
                        </div>
                        <div className="w-full md:w-1/2">
                        <img className="w-full rounded-lg" src="http://drive.google.com/uc?export=view&id=112ZSA2PplOP008lKw8MXPkVSOyQsMISC" alt="Lewd" />
                        </div>
                    </div>
                    </section>
                    {/* End Category List */}
                    
                    

                    {/* Recomended Product */}
                    <section className="bg-gray-100">
                    <div className="container px-6 py-20 mx-auto">
                    <h1 className="mx-12 my-10 text-5xl text-center text-gray-700 lg:text-6xl" >
                        Carousel with Tailwind
                    </h1>

                    <div className="container relative w-full mx-auto overflow-hidden">

                        <div className="flex items-center justify-center carousel-items animate-carouselAnim" styles="width: fit-content; animation: carouselAnim 10s infinite alternate linear;">

                            <div className="relative flex flex-col items-center px-4 py-3 mx-5 my-10 bg-white rounded-lg shadow-lg carousel-focus" styles="width: 270px;">
                                <svg className="absolute top-0 right-0 w-12 h-12 mt-2 -mr-5 text-gray-700 cursor-pointer fill-current hover:text-teal-500" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                                 {/* <button className="absolute top-0 right-0 px-1 py-0 text-lg font-bold bg-teal-400 rounded-full">+</button>  */}
                                <span className="mb-3 text-xl font-bold text-gray-700">Sup3r-Us3r</span>
                                <img className="w-16 h-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img"></img>
                                <p className="mt-3 text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!</p>
                                <button className="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg dark:text-white dark:bg-slate-700 hover:border-transparent hover:text-slate-100 hover:bg-gray-800 dark:hover:text-blue-500 dark:hover:bg-slate-100">Button</button>
                            </div>

                            <div className="relative flex flex-col items-center px-4 py-3 mx-5 my-10 bg-white rounded-lg shadow-lg carousel-focus" styles="width: 270px;">
                                <svg className="absolute top-0 right-0 w-12 h-12 mt-2 -mr-5 text-gray-700 cursor-pointer fill-current hover:text-teal-500" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                                 {/* <button className="absolute top-0 right-0 px-1 py-0 text-lg font-bold bg-teal-400 rounded-full">+</button>  */}
                                <span className="mb-3 text-xl font-bold text-gray-700">Sup3r-Us3r</span>
                                <img className="w-16 h-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img"></img>
                                <p className="mt-3 text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!</p>
                                <button className="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg dark:text-white dark:bg-slate-700 hover:border-transparent hover:text-slate-100 hover:bg-gray-800 dark:hover:text-blue-500 dark:hover:bg-slate-100">Button</button>
                            </div>

                            <div className="relative flex flex-col items-center px-4 py-3 mx-5 my-10 bg-white rounded-lg shadow-lg carousel-focus" styles="width: 270px;">
                                <svg className="absolute top-0 right-0 w-12 h-12 mt-2 -mr-5 text-gray-700 cursor-pointer fill-current hover:text-teal-500" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                                 {/* <button className="absolute top-0 right-0 px-1 py-0 text-lg font-bold bg-teal-400 rounded-full">+</button>  */}
                                <span className="mb-3 text-xl font-bold text-gray-700">Sup3r-Us3r</span>
                                <img className="w-16 h-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img"></img>
                                <p className="mt-3 text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!</p>
                                <button className="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg dark:text-white dark:bg-slate-700 hover:border-transparent hover:text-slate-100 hover:bg-gray-800 dark:hover:text-blue-500 dark:hover:bg-slate-100">Button</button>
                            </div>

                            <div className="relative flex flex-col items-center px-4 py-3 mx-5 my-10 bg-white rounded-lg shadow-lg carousel-focus" styles="width: 270px;">
                                <svg className="absolute top-0 right-0 w-12 h-12 mt-2 -mr-5 text-gray-700 cursor-pointer fill-current hover:text-teal-500" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                                 {/* <button className="absolute top-0 right-0 px-1 py-0 text-lg font-bold bg-teal-400 rounded-full">+</button>  */}
                                <span className="mb-3 text-xl font-bold text-gray-700">Sup3r-Us3r</span>
                                <img className="w-16 h-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img"></img>
                                <p className="mt-3 text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!</p>
                                <button className="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg dark:text-white dark:bg-slate-700 hover:border-transparent hover:text-slate-100 hover:bg-gray-800 dark:hover:text-blue-500 dark:hover:bg-slate-100">Button</button>
                            </div>

                            <div className="relative flex flex-col items-center px-4 py-3 mx-5 my-10 bg-white rounded-lg shadow-lg carousel-focus" styles="width: 270px;">
                                <svg className="absolute top-0 right-0 w-12 h-12 mt-2 -mr-5 text-gray-700 cursor-pointer fill-current hover:text-teal-500" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                                 {/* <button className="absolute top-0 right-0 px-1 py-0 text-lg font-bold bg-teal-400 rounded-full">+</button>  */}
                                <span className="mb-3 text-xl font-bold text-gray-700">Sup3r-Us3r</span>
                                <img className="w-16 h-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img"></img>
                                <p className="mt-3 text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!</p>
                                <button className="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg dark:text-white dark:bg-slate-700 hover:border-transparent hover:text-slate-100 hover:bg-gray-800 dark:hover:text-blue-500 dark:hover:bg-slate-100">Button</button>
                            </div>

                            <div className="relative flex flex-col items-center px-4 py-3 mx-5 my-10 bg-white rounded-lg shadow-lg carousel-focus" styles="width: 270px;">
                                <svg className="absolute top-0 right-0 w-12 h-12 mt-2 -mr-5 text-gray-700 cursor-pointer fill-current hover:text-teal-500" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                                 {/* <button className="absolute top-0 right-0 px-1 py-0 text-lg font-bold bg-teal-400 rounded-full">+</button>  */}
                                <span className="mb-3 text-xl font-bold text-gray-700">Sup3r-Us3r</span>
                                <img className="w-16 h-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img"></img>
                                <p className="mt-3 text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!</p>
                                <button className="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg dark:text-white dark:bg-slate-700 hover:border-transparent hover:text-slate-100 hover:bg-gray-800 dark:hover:text-blue-500 dark:hover:bg-slate-100">Button</button>
                            </div>

                            <div className="relative flex flex-col items-center px-4 py-3 mx-5 my-10 bg-white rounded-lg shadow-lg carousel-focus" styles="width: 270px;">
                                <svg className="absolute top-0 right-0 w-12 h-12 mt-2 -mr-5 text-gray-700 cursor-pointer fill-current hover:text-teal-500" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                                 {/* <button className="absolute top-0 right-0 px-1 py-0 text-lg font-bold bg-teal-400 rounded-full">+</button>  */}
                                <span className="mb-3 text-xl font-bold text-gray-700">Sup3r-Us3r</span>
                                <img className="w-16 h-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img"></img>
                                <p className="mt-3 text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!</p>
                                <button className="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg dark:text-white dark:bg-slate-700 hover:border-transparent hover:text-slate-100 hover:bg-gray-800 dark:hover:text-blue-500 dark:hover:bg-slate-100">Button</button>
                            </div>

                            <div className="relative flex flex-col items-center px-4 py-3 mx-5 my-10 bg-white rounded-lg shadow-lg carousel-focus" styles="width: 270px;">
                                <svg className="absolute top-0 right-0 w-12 h-12 mt-2 -mr-5 text-gray-700 cursor-pointer fill-current hover:text-teal-500" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                                 {/* <button className="absolute top-0 right-0 px-1 py-0 text-lg font-bold bg-teal-400 rounded-full">+</button>  */}
                                <span className="mb-3 text-xl font-bold text-gray-700">Sup3r-Us3r</span>
                                <img className="w-16 h-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img"></img>
                                <p className="mt-3 text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!</p>
                                <button className="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg dark:text-white dark:bg-slate-700 hover:border-transparent hover:text-slate-100 hover:bg-gray-800 dark:hover:text-blue-500 dark:hover:bg-slate-100">Button</button>
                            </div>

                            <div className="relative flex flex-col items-center px-4 py-3 mx-5 my-10 bg-white rounded-lg shadow-lg carousel-focus" styles="width: 270px;">
                                <svg className="absolute top-0 right-0 w-12 h-12 mt-2 -mr-5 text-gray-700 cursor-pointer fill-current hover:text-teal-500" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"/></svg>
                                 {/* <button className="absolute top-0 right-0 px-1 py-0 text-lg font-bold bg-teal-400 rounded-full">+</button>  */}
                                <span className="mb-3 text-xl font-bold text-gray-700">Sup3r-Us3r</span>
                                <img className="w-16 h-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img"></img>
                                <p className="mt-3 text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!</p>
                                <button className="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg dark:text-white dark:bg-slate-700 hover:border-transparent hover:text-slate-100 hover:bg-gray-800 dark:hover:text-blue-500 dark:hover:bg-slate-100">Button</button>
                            </div>

                        </div>

                    </div>
                    </div>
                    </section>
                    {/* End Recomended Product */}
<div className="bg-zinc-200">
    <div className="flex items-center w-screen min-h-screen">
    <div className="container flex flex-wrap items-start ml-auto mr-auto">
        <div className="w-full pl-5 mt-4 mb-4 lg:pl-2">
        <h1 className="text-3xl font-extrabold text-gray-700 lg:text-4xl">
            Best Sellers
        </h1>
        </div>
        <div className="w-full pl-5 pr-5 mb-5 md:w-1/2 lg:w-1/4 lg:pl-2 lg:pr-2">
        <div className="p-2 transition duration-300 transform bg-white rounded-lg m-h-64 hover:translate-y-2 hover:shadow-xl">
            <figure className="mb-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh623NvOxkXXQ7XkIjAskXx344nABgsouANg&usqp=CAU" alt="" className="h-64 ml-auto mr-auto" />
            </figure>
            <div className="flex flex-col p-4 rounded-lg bg-slate-300 dark:bg-slate-500">
            <div>
                <h5 className="text-2xl font-bold leading-none text-slate-800 dark:text-white">
                iPhone 11 Pro Max
                </h5>
                <span className="text-xs leading-none text-gray-400">And then there was Pro.</span>
            </div>
            <div className="flex items-center">
                <div className="text-lg font-light text-white">
                $1099,00
                </div>
                <button href="javascript:;" className="flex w-10 h-10 ml-auto text-white transition duration-300 rounded-full bg-slate-900 hover:bg-white hover:text-slate-800 hover:shadow-xl focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="m-auto stroke-current">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                </button>
            </div>
            </div>
        </div>
        </div>
        <div className="w-full pl-5 pr-5 mb-5 md:w-1/2 lg:w-1/4 lg:pl-2 lg:pr-2">
        <div className="p-2 transition duration-300 transform bg-white rounded-lg m-h-64 hover:translate-y-2 hover:shadow-xl">
            <figure className="mb-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvvqQ9ep0OLPlUy9Zr9QKlHrM35KtDn6AXw&usqp=CAU" alt="" className="h-64 ml-auto mr-auto" />
            </figure>
            <div className="flex flex-col p-4 rounded-lg bg-slate-300 dark:bg-slate-500">
            <div>
                <h5 className="text-2xl font-bold leading-none text-slate-800 dark:text-white">
                iPhone 11 Pro Max
                </h5>
                <span className="text-xs leading-none text-gray-400">And then there was Pro.</span>
            </div>
            <div className="flex items-center">
                <div className="text-lg font-light text-white">
                $1099,00
                </div>
                <button href="javascript:;" className="flex w-10 h-10 ml-auto text-white transition duration-300 rounded-full bg-slate-900 hover:bg-white hover:text-slate-800 hover:shadow-xl focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="m-auto stroke-current">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                </button>
            </div>
            </div>
        </div>
        </div>
        <div className="w-full pl-5 pr-5 mb-5 md:w-1/2 lg:w-1/4 lg:pl-2 lg:pr-2">
        <div className="p-2 transition duration-300 transform bg-white rounded-lg m-h-64 hover:translate-y-2 hover:shadow-xl">
            <figure className="mb-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0YmclIJ-oL04daKZucC58ihTr5WccwVWkw&usqp=CAU" alt="" className="h-64 ml-auto mr-auto" />
            </figure>
            <div className="flex flex-col p-4 rounded-lg bg-slate-300 dark:bg-slate-500">
            <div>
                <h5 className="text-2xl font-bold leading-none text-slate-800 dark:text-white">
                iPhone 11 Pro Max
                </h5>
                <span className="text-xs leading-none text-gray-400">And then there was Pro.</span>
            </div>
            <div className="flex items-center">
                <div className="text-lg font-light text-white">
                $1099,00
                </div>
                <button href="javascript:;" className="flex w-10 h-10 ml-auto text-white transition duration-300 rounded-full bg-slate-900 hover:bg-white hover:text-slate-800 hover:shadow-xl focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="m-auto stroke-current">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                </button>
            </div>
            </div>
        </div>
        </div>
        <div className="w-full pl-5 pr-5 mb-5 md:w-1/2 lg:w-1/4 lg:pl-2 lg:pr-2">
        <div className="p-2 transition duration-300 transform bg-white rounded-lg m-h-64 hover:translate-y-2 hover:shadow-xl">
            <figure className="mb-2">
            <img src="https://cdn.myanimelist.net/images/characters/16/326102.jpg" alt="" className="h-64 ml-auto mr-auto" />
            </figure>
            <div className="flex flex-col p-4 rounded-lg bg-slate-300 dark:bg-slate-500">
            <div>
                <h5 className="text-2xl font-bold leading-none text-slate-800 dark:text-white">
                iPhone 11 Pro Max
                </h5>
                <span className="text-xs leading-none text-gray-400">And then there was Pro.</span>
            </div>
            <div className="flex items-center">
                <div className="text-lg font-light text-white">
                $1099,00
                </div>
                <button href="javascript:;" className="flex w-10 h-10 ml-auto text-white transition duration-300 rounded-full bg-slate-900 hover:bg-white hover:text-slate-800 hover:shadow-xl focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="m-auto stroke-current">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                </button>
            </div>
            </div>
        </div>
        </div>
        <div className="w-full pl-5 pr-5 mb-5 md:w-1/2 lg:w-1/4 lg:pl-2 lg:pr-2">
        <div className="p-2 transition duration-300 transform bg-white rounded-lg m-h-64 hover:translate-y-2 hover:shadow-xl">
            <figure className="mb-2">
            <img src="https://img.game8.co/3219359/4393ca907fc54c5aba01657a03d41485.jpeg/show" alt="" className="h-64 ml-auto mr-auto" />
            </figure>
            <div className="flex flex-col p-4 rounded-lg bg-slate-300 dark:bg-slate-500">
            <div>
                <h5 className="text-2xl font-bold leading-none text-slate-800 dark:text-white">
                iPhone 11 Pro Max
                </h5>
                <span className="text-xs leading-none text-gray-400">And then there was Pro.</span>
            </div>
            <div className="flex items-center">
                <div className="text-lg font-light text-white">
                $1099,00
                </div>
                <button href="javascript:;" className="flex w-10 h-10 ml-auto text-white transition duration-300 rounded-full bg-slate-900 hover:bg-white hover:text-slate-800 hover:shadow-xl focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="m-auto stroke-current">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                </button>
            </div>
            </div>
        </div>
        </div>
        <div className="w-full pl-5 pr-5 mb-5 md:w-1/2 lg:w-1/4 lg:pl-2 lg:pr-2">
        <div className="p-2 transition duration-300 transform bg-white rounded-lg m-h-64 hover:translate-y-2 hover:shadow-xl">
            <figure className="mb-2">
            <img src="https://i.pinimg.com/originals/44/6f/14/446f142f802dfbe3018753547156b440.jpg" alt="" className="h-64 ml-auto mr-auto" />
            </figure>
            <div className="flex flex-col p-4 rounded-lg bg-slate-300 dark:bg-slate-500">
            <div>
                <h5 className="text-2xl font-bold leading-none text-slate-800 dark:text-white">
                iPhone 11 Pro Max
                </h5>
                <span className="text-xs leading-none text-gray-400">And then there was Pro.</span>
            </div>
            <div className="flex items-center">
                <div className="text-lg font-light text-white">
                $1099,00
                </div>
                <button href="javascript:;" className="flex w-10 h-10 ml-auto text-white transition duration-300 rounded-full bg-slate-900 hover:bg-white hover:text-slate-800 hover:shadow-xl focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="m-auto stroke-current">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                </button>
            </div>
            </div>
        </div>
        </div>
        <div className="w-full pl-5 pr-5 mb-5 md:w-1/2 lg:w-1/4 lg:pl-2 lg:pr-2">
        <div className="p-2 transition duration-300 transform bg-white rounded-lg m-h-64 hover:translate-y-2 hover:shadow-xl">
            <figure className="mb-2">
            <img src="https://preview.redd.it/wfd4jfo75xc91.png?width=640&crop=smart&auto=webp&s=f8a0cd098694be92faf1136ada4787a082a3c162" alt="" className="h-64 ml-auto mr-auto" />
            </figure>
            <div className="flex flex-col p-4 rounded-lg bg-slate-300 dark:bg-slate-500">
            <div>
                <h5 className="text-2xl font-bold leading-none text-slate-800 dark:text-white">
                iPhone 11 Pro Max
                </h5>
                <span className="text-xs leading-none text-gray-400">And then there was Pro.</span>
            </div>
            <div className="flex items-center">
                <div className="text-lg font-light text-white">
                $1099,00
                </div>
                <button href="javascript:;" className="flex w-10 h-10 ml-auto text-white transition duration-300 rounded-full bg-slate-900 hover:bg-white hover:text-slate-800 hover:shadow-xl focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="m-auto stroke-current">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                </button>
            </div>
            </div>
        </div>
        </div>
        <div className="w-full pl-5 pr-5 mb-5 md:w-1/2 lg:w-1/4 lg:pl-2 lg:pr-2">
        <div className="p-2 transition duration-300 transform bg-white rounded-lg m-h-64 hover:translate-y-2 hover:shadow-xl">
            <figure className="mb-2">
            <img src="https://pbs.twimg.com/media/Eg-FcvnU8AIX4xt.jpg" alt="" className="h-64 ml-auto mr-auto" />
            </figure>
            <div className="flex flex-col p-4 rounded-lg bg-slate-300 dark:bg-slate-500">
            <div>
                <h5 className="text-2xl font-bold leading-none text-slate-800 dark:text-white">
                iPhone 11 Pro Max
                </h5>
                <span className="text-xs leading-none text-gray-400">And then there was Pro.</span>
            </div>
            <div className="flex items-center">
                <div className="text-lg font-light text-white">
                $1099,00
                </div>
                <button href="javascript:;" className="flex w-10 h-10 ml-auto text-white transition duration-300 rounded-full bg-slate-900 hover:bg-white hover:text-slate-800 hover:shadow-xl focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="m-auto stroke-current">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                </button>
            </div>
            </div>
        </div>
        </div>
        
        
        
    </div>
</div>

<br></br>
<div className="flex items-center justify-center">
    <button className="px-8 py-4 mt-6 font-bold tracking-wider text-white uppercase bg-gray-800 rounded-full shadow-lg dark:bg-white dark:text-gray-800 hover:border-red hover:text-gray-800 dark:hover:text-white hover:bg-white dark:hover:bg-gray-800">Read More</button>
</div>
<br></br><br></br><br></br>
</div>


                    {/* Report */}
                    <section styles="background-color: #667eea">
                    <div className="container px-6 py-20 mx-auto text-center">
                        <h2 className="mb-6 text-4xl font-bold text-center text-gray-800 dark:text-white">Headquarters personnel</h2>
                        <h3 className="my-4 text-2xl text-gray-800 dark:text-white">Report to command center. Take it easy.</h3>
                        <button className="px-8 py-4 mt-6 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg dark:text-gray-800 hover:border-red hover:text-white dark:hover:text-white hover:bg-red-600" onClick={()=>
                        document.getElementById('modalReport').classList.toggle('hidden')}>Report</button>
                    </div>
                    </section>
                    {/* End Report */}

                    {/* Modal Report */}
                    <div className="fixed top-0 left-0 z-10 hidden w-full overflow-y-auto" id="modalReport">
                        <div className="flex items-center justify-center px-4 pt-4 pb-20 text-center min-height-100vh sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-900 opacity-75" />
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                            <div className="inline-block overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl align-center dark:bg-slate-700 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <div className="px-4 pt-5 pb-4 bg-white dark:bg-slate-600 sm:p-6 sm:pb-4">
                                            <div className="flex flex-col gap-4">
                                            <div className="mb-3 leading-normal">
                                                <h1 className="mb-2 text-base font-bold">Leave a comment</h1>
                                                <p className="mb-6 text-sm font-semibold text-grey-dark">Type your comment below.</p>
                                                <div className="flex items-center justify-between px-2 py-1 mb-6 border border-solid rounded cursor-pointer border-grey-light">
                                                    <div className="flex items-center">
                                                    <img className="w-8 h-8 mr-2 rounded-full" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=e21cd936afc296bf51b0af2afe62d0a1" alt="Profile picture"></img>
                                                    <div className="text-sm font-bold text-grey-light">Type your comment...</div>
                                                    </div>
                                                    <svg
                                                    className="w-10 h-10 text-grey-light"
                                                    width="32"
                                                    height="32"
                                                    viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
                                                    </svg>
                                                </div>
                                            </div>
                            
                                            </div>
                                            <div className="px-4 py-3 text-right ">
                                                <button type="button" className="px-4 py-2 mr-2 text-white bg-gray-500 rounded dark:bg-slate-100 dark:text-gray-800 hover:bg-gray-700" onClick={()=>
                                                document.getElementById('modalReport').classList.toggle('hidden')}>
                                                    <i className="fas fa-times"></i> Cancel
                                                </button>
                                                <button type="button" className="px-4 py-2 mr-2 text-white bg-gray-800 rounded hover:bg-gray-700"><i className="fas fa-plus"></i> Confirm</button>
                                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* End Modal Report */}

                    {/* Footer */}
                    <footer className="text-gray-700 bg-gray-100">
                        <div className="container px-6 pt-10 pb-6 mx-auto">
                            <div className="flex flex-wrap">
                            <div className="w-full text-center md:w-1/4 md:text-left ">
                                <h5 className="mb-6 font-bold uppercase">Links</h5>
                                <ul className="mb-4">
                                <li className="mt-2">
                                    <a href="#" className="text-gray-600 hover:underline hover:text-orange-500"></a>
                                </li>
                                <li className="mt-2">
                                    <a href="#" className="text-gray-600 hover:underline hover:text-orange-500">I promise</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#" className="text-gray-600 hover:underline hover:text-orange-500">Reckless is he</a>
                                </li>
                                </ul>
                            </div>
                            <div className="w-full text-center md:w-1/4 md:text-left ">
                                <h5 className="mb-6 font-bold uppercase">Legal</h5>
                                <ul className="mb-4">
                                <li className="mt-2">
                                    <a href="#" className="text-gray-600 hover:underline hover:text-orange-500"></a>
                                </li>
                                <li className="mt-2">
                                    <a href="#" className="text-gray-600 hover:underline hover:text-orange-500">Pulverized?</a>
                                </li>
                                </ul>
                            </div>
                            <div className="w-full text-center md:w-1/4 md:text-left ">
                                <h5 className="mb-6 font-bold uppercase">Social</h5>
                                <ul className="mb-4">
                                <li className="mt-2">
                                    <a href="#" className="text-gray-600 hover:underline hover:text-orange-500">Corellia</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#" className="text-gray-600 hover:underline hover:text-orange-500">Bilbringi</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#" className="text-gray-600 hover:underline hover:text-orange-500">Fondor</a>
                                </li>
                                </ul>
                            </div>
                            <div className="w-full text-center md:w-1/4 md:text-left ">
                                <h5 className="mb-6 font-bold uppercase">Through the Force</h5>
                                <ul className="mb-4">
                                <li className="mt-2">
                                    <a href="#" className="text-gray-600 hover:underline hover:text-orange-500">Journey to the Emperor</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#" className="text-gray-600 hover:underline hover:text-orange-500">Lord Vader ship approaching?</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#" className="text-gray-600 hover:underline hover:text-orange-500">X-wing class</a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </footer>
                    {/* End Footer */}
        </body>
    )
};

export default Home