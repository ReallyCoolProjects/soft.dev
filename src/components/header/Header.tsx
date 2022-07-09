import React, { Children } from 'react'
import RoundedBtn from '../resuable/RoundedBtn'

const Header = () => {
    let links = ['article', 'publish', 'sign in']
    let list = Children.toArray(links.map((link:string)=>{
        return <li><a href="#">{link}</a></li>
    }))
   let props={name:'Sign Up'}
  return (
   <header className='flex justify-between items-center p-2 px-4'>
    <div className='flex '>
    <span className='fa-solid fa-bars text-2xl mr-4'></span>
    <h1 className='text-2xl'>soft.dev</h1>
    </div>
    <nav className='list-none hidden'>
    {list}
    </nav>
    <div className='pt-2'>
    <RoundedBtn {...props} />
    </div>

   </header>
  )
}

export default Header