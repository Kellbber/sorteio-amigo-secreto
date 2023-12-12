'use client'
import { useEffect, useState } from "react"

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldAddClass = scrollTop > 0;

      setIsScrolled(shouldAddClass);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`w-full fixed top-0 ${isScrolled ? 'bg-green-700/50' : ''}`}>
      <menu className='w-full flex gap-4 justify-center p-4 text-white'>
        <li className='cursor-pointer border-b border-transparent hover:border-white transition-all ease-in-out duration-100'>INÍCIO</li>
        <li className='cursor-pointer border-b border-transparent hover:border-white transition-all ease-in-out duration-100'>SORTEIO</li>
        <li className='cursor-pointer border-b border-transparent hover:border-white transition-all ease-in-out duration-100'>SOBRE</li>
      </menu>
    </header>
  )
}

export default Header
