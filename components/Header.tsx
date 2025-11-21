import Link from "next/link";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <main className="w-full flex justify-between items-center py-4 lg:py-10 border-2 border-gray-100 px-4 lg:px-26 z-50 fixed bg-white">
      <div className="">
        <h1 className="lg:text-[30px] text-[25px] font-extrabold">Sound Assist</h1>
      </div>

      <div className="hidden md:block">
        <Navbar />
      </div> 

      <div>
        <Link href="#assistance" className="cursor-pointer"><button  className="w-40 h-[50px] bg-[#032d77] text-[16px] cursor-pointer text-white rounded-[50px] font-semibold ">Get Started</button></Link>
      </div>
    </main>
  )
}

export default Header;