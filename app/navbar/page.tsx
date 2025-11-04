import Link from 'next/link'


function Navbar() {
  return (
    <div className="top-0 w-full fixed bg-emerald-800 space-x-50 p-3 flex flex-cols justify-between font-bold">
        <Link href="/Home" >Her~Portfolio</Link>
        <div className='space-x-5 '>
        <Link href="/about" className='hover:underline hover:text-blue-200' >About</Link>
         <Link href="/projects" className='hover:underline hover:text-blue-200'>Projects</Link>
          <Link href="/contact" className='hover:underline hover:text-blue-200'>Contact</Link>
          </div>
    </div>
    
  )
} 

export default Navbar