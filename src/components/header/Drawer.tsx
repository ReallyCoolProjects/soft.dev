import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openHamburger } from '../features/commonstate'

const Drawer = (props:any) => {
    let {isHamburger} = useSelector((state:any)=>state.commonState)
    let dispatch = useDispatch()

    console.log(isHamburger);
    
  return (
    <div className={`absolute z-[10] bg-white transition-all top-0 w-full p-4 ${isHamburger? '':'-translate-x-full'}`}>
        <div>
        <i onClick={()=>dispatch(openHamburger('flip'))} className="fa-solid fa-xmark font-[600] text-3xl"></i>
        </div>
        <nav className='list-none text-3xl '>
        {props.links}
        </nav>
    </div>
  )
}

export default Drawer