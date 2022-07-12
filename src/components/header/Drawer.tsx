import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { openHamburger } from '../features/commonstate'
import BlackBtn from '../resuable/BlackBtn'
import GreenBtn from '../resuable/GreenBtn'

const Drawer = (props:any) => {
    let {isHamburger} = useSelector((state:any)=>state.commonState)
    let dispatch = useDispatch()
    let text = {text : 'Sign in'}
  return (
    <div className={`absolute z-[10] bg-[#fff] transition-transform top-0 min-h-screen right-1  w-full p-4 ${isHamburger? '':'-translate-x-full'}`}>
        <div>
        <i onClick={()=>dispatch(openHamburger('flip'))} className="fa-solid fa-xmark font-[600] text-3xl"></i>
        </div>
        <nav className='list-none text-3xl h-[50vh] justify-evenly flex flex-col z-[10]'>
        {props.links}
        <a href="https://github.com/ReallyCoolProjects/soft.dev" target='_blank'>
        <i className="fa-brands fa-github text-5xl"></i>
        </a>
        <Link to='/signin' ><BlackBtn {...text} /></Link>
        
        </nav>
        <p className='relative -bottom-10'>Made by <b>Server[200]Success</b>  Gang</p>
    </div>
  )
}

export default Drawer