import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openHamburger } from '../features/commonstate'

const Drawer = (props:any) => {
    let {isHamburger} = useSelector((state:any)=>state.commonState)
    let dispatch = useDispatch()

  return (
    <div className={`absolute z-[10] bg-[#fff] transition-transform top-0 min-h-screen right-1  w-full p-4 ${isHamburger? '':'-translate-x-full'}`}>
        <div>
        <i onClick={()=>dispatch(openHamburger('flip'))} className="fa-solid fa-xmark font-[600] text-3xl"></i>
        </div>
        <nav className='list-none text-3xl h-[40vh] justify-evenly flex flex-col z-[10]'>
        {props.links}

        </nav>
        <p className='relative -bottom-10'>Made by <b>Server[200]Success</b>  Gang</p>
    </div>
  )
}

export default Drawer