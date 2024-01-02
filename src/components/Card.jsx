// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({data,refrence}) {
  return (
    <motion.div drag dragConstraints={refrence} className=' h-64 w-[16vw] bg-zinc-300  rounded-[40px] p-5 text-xl relative overflow-hidden'>
           <FaFileLines />
           <p className='text-[15px] p-2 tracking-tight leading-4 py-4 ' > {data.desc}</p>
           <div className='absolute left-0 bottom-0  w-full  '>
            <div className='flex justify-around item-center  mb-2 py-1 px-4  '>
              <h4>{data.fileSize}</h4>
              <span className=' w-7 h-7 flex items-center justify-center bg-slate-400 rounded-[50px]'>
                { data.close ? <IoCloseOutline/> : <MdDownload  size=".9em"/> }
              </span>
                </div>
                   {data.tag.isOpen && (
                  <div className='tag  w-full bg-green-500 py-4'>
                  <h3 className='text-center text-sm'>Download now</h3>
                  </div>
            )} 
           </div>
    </motion.div>
  )
}

export default Card  