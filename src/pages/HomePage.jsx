import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className=' flex justify-center items-center h-[100vh] flex-col text-center'>
      <h1 className=' text-white text-[3rem] font-bold'>Ready to watch? Let's Start!</h1>
      <Link to='/shows' className=" flex justify-center items-center  bg-red-600 rounded-full p-3 gap-3 cursor-pointer">
        <button className=' text-white text-2xl'>Get Started</button>
        <BsFillArrowRightCircleFill className=" text-white text-[2rem]" />
      </Link>
    </div>
  )
}
