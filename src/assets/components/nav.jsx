import { IoMenu } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
export const Nav = ()=>{
return(
<div className="flex max-w-6xl m-auto justify-between items-center px-4 my-5 font-bold text-3xl text-white " >
    <div className="left">Satyam</div>
    <ul className=" hidden items-center sm:flex gap-6 ">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About me</li>
        <li className="cursor-pointer">Contact</li>
        <li typeof="button"><MdDarkMode/></li>
    </ul>
    <button className="sm:hidden md:hidden h-8 w-8 text-4xl "><IoMenu /></button>
</div>

)
}