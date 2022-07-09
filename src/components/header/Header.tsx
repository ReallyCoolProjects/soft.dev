import React, { Children } from 'react'
import RoundedBtn from '../resuable/RoundedBtn'
import Drawer from './Drawer'
import { openHamburger } from '../features/commonstate'
import { useDispatch,useSelector } from 'react-redux'
const Header = () => {
    let dispatch = useDispatch()
    let links = ['article', 'publish', 'sign in']
    let list = Children.toArray(links.map((link:string)=>{
        return <li><a href="#">{link}</a></li>
    }))
    let props={name:'Sign Up', links:list }
    const handleOpen = ()=>{
        dispatch(openHamburger('flip')) 
   }
  return (
   <header className='flex justify-between items-center p-2 px-4 relative'>
    <div className='flex '>
    <span onClick={()=>handleOpen()} className='fa-solid fa-bars text-2xl mr-4'></span>
    <h1 className='text-2xl'>soft.dev</h1>
    </div>
    <nav className='list-none hidden'>
    {list}
    </nav>
    <div className='pt-2'>
    <RoundedBtn {...props} />
    </div>
    <Drawer {...props} />
   </header>
  )
}

export default Header