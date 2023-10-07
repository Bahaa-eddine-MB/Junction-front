
import Image from 'next/image'
import logo from '/public/images/logo.svg'
const Navbar = () => {
  return (
    <div className='flex justify-between px-8 items-center h-[64px] border border-b-1 bg-[#E9F0F3] border-[#0739461A]' >
     <Image src={logo} className='h-16 w-16' alt='logo' />
     <div className='flex justify-between gap-8 items-center'>
      <ul className='flex link justify-between gap-8 items-center cursor-pointer ' >
      <li>Accueil</li>
      <li>Prog</li>
      <li>FAQ</li>
      </ul>
      <div className=' px-8 py-1 bg-[#1BAAD1] text-white cursor-pointer ' >
       Join
      </div>
     </div>
    </div>
  )
}

export default Navbar