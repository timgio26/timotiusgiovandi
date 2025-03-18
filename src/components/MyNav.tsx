'use client'

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from 'next/navigation'
import { ModeToggle } from "./ModeToggle";

export function MyNav() {
  const [showMenu,setShowMenu] = useState<boolean>(false)
  const router = useRouter()

  function showMobileMenu(){
    setShowMenu((curstate)=>!curstate)
  }

  return (
    <>
      <div className="bg-neutral-50 dark:bg-neutral-900 flex flex-row justify-between px-5 py-2 items-center">
        <div onClick={()=>router.push('/')}>
          <span>Timotius Giovandi</span>
        </div>
        <div className="hidden sm:flex flex-row gap-4 mx-5 items-center">
          <span className="cursor-pointer">About Me</span>
          <span className="cursor-pointer">Project</span>
          <span className="cursor-pointer">Contact</span>
          <ModeToggle/>
        </div>
        <div className="sm:hidden">
          <div onClick={showMobileMenu}>
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 bg-gray-300/10 gap-1 py-2" hidden={!showMenu}>
        <span>About Me</span>
        <span>Project</span>
        <span>Contact</span>
        <div className="flex flex-row justify-end">
        <ModeToggle/>

        </div>
      </div>
    </>
  );
}
