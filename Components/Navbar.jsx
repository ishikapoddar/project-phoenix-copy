/* The above code is a React component that creates a navbar for a web application. It imports various
modules from Firebase, Next.js, and other libraries to implement features such as authentication,
search functionality, and theme switching. The navbar is responsive and includes a hamburger menu
for smaller screens. It also displays the user's profile and a sign-out button if the user is
authenticated. */
import React from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { RiMoonFill } from 'react-icons/ri'
import { BsFillSunFill } from 'react-icons/bs'
import { ImSearch } from 'react-icons/im'
import { useRouter } from 'next/navigation';


const style__button = "  hover:text-dark__blue hover:bg-main border-2 m-2 md:text-base p-1.5 md:px-1.5 md:py-0 rounded-md flex justify-around items-center font-bold sm:border-0 sm:rounded-none sm:w-full sm:m-0 sm:p-2.5 ";

const Navbar = ({theme, choosetheme}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={"fixed top-0 right-0 w-full overflow-auto h-[64px] z-[100] overflow-y-hidden text-1.1 border-b-2 border-[#dbad69] flex justify-center items-center " + `${theme ? "bg-bg_blue_phoenix text-main " : "text-light_theme_bg bg-light_theme_ot border-bg-light_theme_ot"}`}>
      <div className={"flex justify-between items-center w-full px-4"}>
        <div title={"CP UnOfficial"}>
          <Link href='/' className='flex items-center space-around'>
            <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678292149/logo_sgor2b.png"}
              alt="Phoenix"

              height={70}
              width={70}
            />
            <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678292149/pic5_zoom_on6noq.png"}
              alt="logo"

              height={50}
              width={150}
            />
          </Link>
        </div>
        <div className={'hidden sm:block'}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        {isOpen && <div className={`fixed top-[64px] right-0 h-auto z-10 border-x-2 border-b-2 rounded-b-lg md:hidden lg:hidden xl:hidden ${theme ? "bg-bg_blue_phoenix " : " bg-light_theme_ot  border-bg-light_theme_ot"}` }>
          <div className={`flex flex-col justify-between items-center px-2`}>
            <button className={'border-2 m-2 p-1.5 rounded-full ' + `${theme ? "hover:text-bg_blue_phoenix hover:bg-main border-main" : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot"}`} onClick={() =>{
              setOpen(false); choosetheme(!theme);}}>{!theme ? <RiMoonFill size={25} /> : <BsFillSunFill size={25} />}</button>
          </div>
        </div>

        }
        <div className={`flex justify-between items-center sm:hidden`}>
          <button 
            className={'border-2 m-2 p-1.5 ' + `${!theme ? "hover:text-bg_blue_phoenix hover:bg-main border-main rounded-full" : "hover:text-main hover:bg-light_theme_ot border-blue rounded-full"}`}
          onClick={()=> choosetheme(!theme)}> 
          {!theme ? <RiMoonFill size={25} /> : <BsFillSunFill size={25} />}</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar